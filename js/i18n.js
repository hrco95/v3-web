/* ============================================================
   V3 — i18n engine
   HR je zadani jezik (sadržaj je upisan u HTML-u),
   EN i DE se primjenjuju zamjenom teksta preko data-i18n atributa.
   ============================================================ */

(function () {
  "use strict";

  var LANGS = ["hr", "en", "de"];
  var LOCALES = { hr: "hr-HR", en: "en-GB", de: "de-DE" };
  var STORE_KEY = "v3-lang";

  function detect() {
    try {
      var saved = localStorage.getItem(STORE_KEY);
      if (saved && LANGS.indexOf(saved) !== -1) return saved;
    } catch (e) { /* privatni način rada */ }
    var nav = (navigator.language || "hr").slice(0, 2).toLowerCase();
    return LANGS.indexOf(nav) !== -1 ? nav : "hr";
  }

  function lookup(dict, path) {
    var parts = path.split(".");
    var cur = dict;
    for (var i = 0; i < parts.length; i++) {
      if (cur == null) return null;
      cur = cur[parts[i]];
    }
    return typeof cur === "string" ? cur : null;
  }

  var V3I18N = {
    lang: detect(),

    t: function (path) {
      var val = lookup(window.I18N[this.lang], path);
      if (val == null) val = lookup(window.I18N.hr, path);
      return val == null ? path : val;
    },

    /* 57.21 -> "57,21 m²" (hr/de) ili "57.21 m²" (en) */
    area: function (num) {
      return num.toLocaleString(LOCALES[this.lang], {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }) + " m²";
    },

    set: function (lang) {
      if (LANGS.indexOf(lang) === -1) return;
      this.lang = lang;
      try { localStorage.setItem(STORE_KEY, lang); } catch (e) { /* ignore */ }
      this.apply();
    },

    apply: function () {
      var self = this;
      document.documentElement.lang = this.lang;

      /* tekstovi */
      document.querySelectorAll("[data-i18n]").forEach(function (el) {
        var val = self.t(el.getAttribute("data-i18n"));
        if (val.indexOf("<") !== -1) el.innerHTML = val;
        else el.textContent = val;
      });

      /* atributi: data-i18n-attr="placeholder:form.name;aria-label:nav.menu" */
      document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
        el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
          var idx = pair.indexOf(":");
          if (idx === -1) return;
          el.setAttribute(pair.slice(0, idx).trim(), self.t(pair.slice(idx + 1).trim()));
        });
      });

      /* brojevi (kvadrature) s lokaliziranim decimalnim zarezom */
      document.querySelectorAll("[data-num]").forEach(function (el) {
        var n = parseFloat(el.getAttribute("data-num"));
        if (!isNaN(n)) el.textContent = self.area(n);
      });

      /* naslov i opis stranice */
      var page = document.body.getAttribute("data-page");
      if (page) {
        document.title = self.t("meta." + page + ".title");
        var md = document.querySelector('meta[name="description"]');
        if (md) md.setAttribute("content", self.t("meta." + page + ".desc"));
      }

      /* aktivni gumb jezika */
      document.querySelectorAll(".lang button").forEach(function (btn) {
        btn.classList.toggle("is-active", btn.getAttribute("data-lang") === self.lang);
      });

      /* obavijesti ostale module (tlocrti, badge-evi) */
      document.dispatchEvent(new CustomEvent("v3:lang", { detail: { lang: self.lang } }));
    },

    init: function () {
      var self = this;
      document.querySelectorAll(".lang button").forEach(function (btn) {
        btn.addEventListener("click", function () {
          self.set(btn.getAttribute("data-lang"));
        });
      });
      this.apply();
    }
  };

  window.V3I18N = V3I18N;
})();
