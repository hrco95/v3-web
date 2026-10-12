/* ============================================================
   V3 — interaktivni tlocrti
   Geometrija je shematska, izrađena prema projektnoj
   dokumentaciji (iskaz površina preuzet iz projekta).
   Sve mjere u SVG koordinatama ~ centimetri.
   ============================================================ */

(function () {
  "use strict";

  /* pomoćnik: stepenice (linije gazišta) */
  function stairs(x, y, w, h, step) {
    var d = "";
    for (var yy = y + step; yy < y + h; yy += step) {
      d += "M" + x + " " + yy + "H" + (x + w);
    }
    return '<path class="plan-decor" d="' + d + '"/>';
  }

  /* pomoćnik: kose linije rampe */
  function rampLines(x, y, w, h, step) {
    var d = "";
    for (var yy = y + step; yy < y + h; yy += step) {
      d += "M" + x + " " + yy + "H" + (x + w);
    }
    return '<path class="plan-decor" style="opacity:.3" d="' + d + '"/>';
  }

  /* ---------- definicije tlocrta ---------- */

  var PLANS = {

    /* Bjelovar — oba stana imaju identičan tlocrt */
    "bjelovar-main": {
      viewBox: "0 -10 960 1090",
      outline: "M10 10 H945 V880 H10 Z",
      rooms: [
        { id: "bj-stub",    key: "rooms.stubiste",  common: true, x: 20, y: 20, w: 210, h: 850 },
        { id: "bj-hodnik",  num: 1, key: "rooms.hodnik",    area: 5.89,  x: 245, y: 400, w: 390, h: 150, unit: "A" },
        { id: "bj-soba2",   num: 2, key: "rooms.spavaca",   area: 10.27, x: 245, y: 20,  w: 280, h: 365, unit: "A" },
        { id: "bj-soba3",   num: 3, key: "rooms.spavaca",   area: 9.11,  x: 620, y: 20,  w: 310, h: 295, unit: "A" },
        { id: "bj-kupa",    num: 4, key: "rooms.kupaonica", area: 4.30,  x: 770, y: 330, w: 160, h: 270, unit: "A" },
        { id: "bj-dnevni",  num: 5, key: "rooms.dnevni",    area: 21.10, unit: "A",
          points: "245,565 755,565 755,615 935,615 935,870 245,870", numPos: [310, 640] },
        { id: "bj-ostava",  num: 6, key: "rooms.ostava",    area: 0.98,  x: 645, y: 455, w: 110, h: 90,  unit: "A" },
        { id: "bj-lodja",   num: 7, key: "rooms.loggia",    area: 2.03,  x: 245, y: 885, w: 270, h: 100, unit: "A", out: true },
        { id: "bj-terasa",  num: 8, key: "rooms.terasa",    area: 3.53,  x: 530, y: 885, w: 405, h: 175, unit: "A", out: true }
      ],
      decor: [ stairs(30, 40, 190, 300, 27) ],
      unitLabels: [{ unit: "A", x: 590, y: 690, subY: 732 }],
      variants: {
        s1: { unitSuffix: { A: "1" }, groups: [{ unit: "A", suffix: "1", total: 57.21 }] },
        s2: { unitSuffix: { A: "2" }, groups: [{ unit: "A", suffix: "2", total: 57.21 }] }
      }
    },

    /* Regina — stambena etaža (2 stana, zrcaljeno oko stubišta) */
    "regina-main": {
      viewBox: "0 -130 1620 1450",
      outline: "M20 185 H1600 V1290 H20 Z",
      rooms: [
        { id: "rg-stub", key: "rooms.stubiste", area: 10.21, common: true, x: 700, y: 185, w: 220, h: 1045 },
        /* stan lijevo (tip A) */
        { id: "ra-hodnik", num: 1, key: "rooms.hodnik",    area: 5.70,  x: 215,  y: 765, w: 345, h: 165, unit: "A" },
        { id: "ra-open",   num: 2, key: "rooms.open",      area: 21.30, x: 40,   y: 185, w: 460, h: 460, unit: "A", numPos: [85, 235] },
        { id: "ra-soba1",  num: 3, key: "rooms.spavaca1",  area: 9.80,  x: 335,  y: 945, w: 300, h: 325, unit: "A" },
        { id: "ra-soba2",  num: 4, key: "rooms.spavaca2",  area: 9.11,  x: 40,   y: 945, w: 280, h: 325, unit: "A" },
        { id: "ra-kupa",   num: 5, key: "rooms.kupaonica", area: 4.30,  x: 40,   y: 660, w: 160, h: 270, unit: "A" },
        { id: "ra-ostava", num: 6, key: "rooms.ostava",    area: 1.02,  x: 215,  y: 660, w: 115, h: 90,  unit: "A" },
        { id: "ra-lodja",  num: 7, key: "rooms.loggia",    area: 2.03,  x: 515,  y: 20,  w: 185, h: 150, unit: "A", out: true },
        { id: "ra-balkon", num: 8, key: "rooms.balkon",    area: 4.03,  x: 60,   y: 20,  w: 450, h: 150, unit: "A", out: true },
        /* stan desno (tip B) */
        { id: "rb-hodnik", num: 1, key: "rooms.hodnik",    area: 5.70,  x: 1060, y: 765, w: 345, h: 165, unit: "B" },
        { id: "rb-open",   num: 2, key: "rooms.open",      area: 21.30, x: 1120, y: 185, w: 460, h: 460, unit: "B", numPos: [1165, 235] },
        { id: "rb-soba1",  num: 3, key: "rooms.spavaca1",  area: 10.85, x: 951,  y: 945, w: 334, h: 325, unit: "B" },
        { id: "rb-soba2",  num: 4, key: "rooms.spavaca2",  area: 8.12,  x: 1330, y: 945, w: 250, h: 325, unit: "B" },
        { id: "rb-kupa",   num: 5, key: "rooms.kupaonica", area: 4.30,  x: 1420, y: 660, w: 160, h: 270, unit: "B" },
        { id: "rb-ostava", num: 6, key: "rooms.ostava",    area: 1.02,  x: 1290, y: 660, w: 115, h: 90,  unit: "B" },
        { id: "rb-lodja",  num: 7, key: "rooms.loggia",    area: 2.03,  x: 920,  y: 20,  w: 185, h: 150, unit: "B", out: true },
        { id: "rb-balkon", num: 8, key: "rooms.balkon",    area: 4.03,  x: 1110, y: 20,  w: 450, h: 150, unit: "B", out: true }
      ],
      decor: [
        stairs(710, 790, 200, 420, 30),
        /* strelica prema moru */
        '<path class="plan-decor" style="opacity:1" d="M810 -30 V-85 M796 -71 L810 -85 L824 -71"/>'
      ],
      extras: '<text class="plan-arrow-label" x="810" y="-102" data-plan-i18n="plan.sea"></text>',
      unitLabels: [
        { unit: "A", x: 270, y: 430, subY: 472 },
        { unit: "B", x: 1350, y: 430, subY: 472 }
      ],
      variants: {
        f0: { unitSuffix: { A: "S1", B: "S2" }, groups: [{ unit: "A", suffix: "S1", total: 57.29 }, { unit: "B", suffix: "S2", total: 57.35 }] },
        f1: { unitSuffix: { A: "S3", B: "S4" }, groups: [{ unit: "A", suffix: "S3", total: 57.29 }, { unit: "B", suffix: "S4", total: 57.35 }] },
        f2: { unitSuffix: { A: "S5", B: "S6" }, groups: [{ unit: "A", suffix: "S5", total: 57.29 }, { unit: "B", suffix: "S6", total: 57.35 }] }
      }
    },

    /* Regina — suteren: garaža, spremišta, stubište */
    "regina-garage": {
      viewBox: "0 0 1580 1120",
      outline: "M20 20 H1560 V1100 H20 Z",
      rooms: [
        { id: "g-pgm3", key: "rooms.pgm", label: "PGM 3", x: 40,   y: 40,  w: 500, h: 240 },
        { id: "g-pgm2", key: "rooms.pgm", label: "PGM 2", x: 40,   y: 290, w: 500, h: 240 },
        { id: "g-pgm1", key: "rooms.pgm", label: "PGM 1", x: 40,   y: 540, w: 500, h: 240 },
        { id: "g-pgm4", key: "rooms.pgm", label: "PGM 4", x: 1040, y: 40,  w: 500, h: 240 },
        { id: "g-pgm5", key: "rooms.pgm", label: "PGM 5", x: 1040, y: 290, w: 500, h: 240 },
        { id: "g-pgm6", key: "rooms.pgm", label: "PGM 6", x: 1040, y: 540, w: 500, h: 240 },
        { id: "g-ramp", key: "rooms.rampa", x: 590, y: 20, w: 400, h: 300, out: true },
        { id: "g-sp1",  key: "rooms.spremiste", label: "1", sub: true, x: 40,   y: 820, w: 190, h: 260 },
        { id: "g-sp2",  key: "rooms.spremiste", label: "2", sub: true, x: 240,  y: 820, w: 150, h: 260 },
        { id: "g-sp3",  key: "rooms.spremiste", label: "3", sub: true, x: 400,  y: 820, w: 150, h: 260 },
        { id: "g-stub", key: "rooms.stubiste", common: true, x: 660, y: 820, w: 260, h: 260 },
        { id: "g-sp4",  key: "rooms.spremiste", label: "4", sub: true, x: 930,  y: 820, w: 150, h: 260 },
        { id: "g-sp5",  key: "rooms.spremiste", label: "5", sub: true, x: 1090, y: 820, w: 150, h: 260 },
        { id: "g-sp6",  key: "rooms.spremiste", label: "6", sub: true, x: 1250, y: 820, w: 290, h: 260 }
      ],
      decor: [
        rampLines(600, 40, 380, 270, 34),
        '<path class="plan-decor" d="M790 60 V280 M776 266 L790 280 L804 266"/>',
        stairs(675, 845, 230, 210, 26)
      ],
      unitLabels: [],
      variants: {
        g: {
          unitSuffix: {},
          custom: [
            { key: "rooms.pgm", val: "PGM 1–6" },
            { key: "rooms.spremiste", val: "1–6" },
            { key: "rooms.stubiste", val: "" },
            { key: "rooms.rampa", val: "" }
          ],
          note: "plan.garageNote"
        }
      }
    }
  };

  /* ---------- crtanje ---------- */

  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); }

  function renderSVG(def) {
    var s = '<svg viewBox="' + def.viewBox + '" role="img" aria-hidden="false">';
    s += '<path class="plan-outline" d="' + def.outline + '"/>';
    def.rooms.forEach(function (r) {
      var cls = "plan-room" + (r.common ? " plan-room--common" : "") + (r.out ? " plan-room--out" : "");
      if (r.points) {
        s += '<polygon class="' + cls + '" data-room="' + r.id + '" points="' + r.points + '"/>';
      } else {
        s += '<rect class="' + cls + '" data-room="' + r.id + '" x="' + r.x + '" y="' + r.y +
             '" width="' + r.w + '" height="' + r.h + '"/>';
      }
    });
    (def.decor || []).forEach(function (d) { s += d; });
    def.rooms.forEach(function (r) {
      var cx = r.numPos ? r.numPos[0] : r.x + r.w / 2;
      var cy = r.numPos ? r.numPos[1] : r.y + r.h / 2;
      if (r.num != null) {
        s += '<text class="plan-num" x="' + cx + '" y="' + cy + '">' + r.num + "</text>";
      } else if (r.label) {
        s += '<text class="plan-num plan-num--sub" x="' + cx + '" y="' + cy + '">' + esc(r.label) + "</text>";
      }
    });
    (def.unitLabels || []).forEach(function (u) {
      s += '<text class="plan-unitname" data-unit-label="' + u.unit + '" x="' + u.x + '" y="' + u.y + '"></text>';
      s += '<text class="plan-unitsub" data-unit-sub="' + u.unit + '" x="' + u.x + '" y="' + u.subY + '"></text>';
    });
    if (def.extras) s += def.extras;
    s += "</svg>";
    return s;
  }

  /* ---------- inicijalizacija po kontejneru ---------- */

  function initPlan(container) {
    var name = container.getAttribute("data-plan");
    var stages = {};
    container.querySelectorAll("[data-stage]").forEach(function (el) {
      var stageName = el.getAttribute("data-stage");
      var def = PLANS[name + "-" + stageName];
      if (!def) return;
      el.innerHTML = renderSVG(def) + '<div class="plan-tip" role="status"></div>';
      stages[stageName] = { el: el, def: def };
    });

    var aside = container.querySelector("[data-plan-aside]");
    var tabs = document.querySelectorAll('[data-plan-tabs="' + name + '"] button');
    var current = { stage: null, variant: null };

    function t(k) { return window.V3I18N.t(k); }
    function fmtArea(n) { return window.V3I18N.area(n); }

    function unitName(suffix) { return t("cols.unit") + " " + suffix; }

    function applyLabels() {
      var st = stages[current.stage];
      if (!st) return;
      var variant = st.def.variants[current.variant];
      Object.keys(variant.unitSuffix || {}).forEach(function (u) {
        var nameEl = st.el.querySelector('[data-unit-label="' + u + '"]');
        var subEl = st.el.querySelector('[data-unit-sub="' + u + '"]');
        var group = (variant.groups || []).filter(function (g) { return g.unit === u; })[0];
        if (nameEl) nameEl.textContent = unitName(variant.unitSuffix[u]);
        if (subEl && group) subEl.textContent = fmtArea(group.total);
      });
      st.el.querySelectorAll("[data-plan-i18n]").forEach(function (el) {
        el.textContent = t(el.getAttribute("data-plan-i18n"));
      });
    }

    function renderAside() {
      if (!aside) return;
      var st = stages[current.stage];
      if (!st) return;
      var variant = st.def.variants[current.variant];
      var html = "";

      if (variant.groups && variant.groups.length) {
        variant.groups.forEach(function (g) {
          var rooms = st.def.rooms
            .filter(function (r) { return r.unit === g.unit; })
            .sort(function (a, b) { return a.num - b.num; });
          html += '<div class="plan-unit-head"><h3>' + esc(unitName(g.suffix)) + "</h3>";
          html += '<p class="plan-unit-total">' + esc(t("plan.totalLabel")) +
                  " <strong>" + fmtArea(g.total) + "</strong></p></div>";
          html += '<ol class="room-list">';
          rooms.forEach(function (r) {
            html += '<li data-room-ref="' + r.id + '">' +
                    '<span class="r-num">' + r.num + "</span>" +
                    '<span class="r-name">' + esc(t(r.key)) + "</span>" +
                    '<span class="r-dots"></span>' +
                    '<span class="r-area">' + fmtArea(r.area) + "</span></li>";
          });
          html += "</ol>";
        });
      }

      if (variant.custom) {
        html += '<div class="plan-unit-head"><h3>' + esc(t("plan.garageTitle")) + "</h3></div>";
        html += '<ol class="room-list">';
        variant.custom.forEach(function (row) {
          html += '<li><span class="r-name">' + esc(t(row.key)) + "</span>" +
                  '<span class="r-dots"></span>' +
                  '<span class="r-area">' + esc(row.val) + "</span></li>";
        });
        html += "</ol>";
        if (variant.note) html += '<p class="plan-disclaimer">' + esc(t(variant.note)) + "</p>";
      }

      aside.innerHTML = html;

      /* sinkronizacija: red u popisu <-> prostorija na tlocrtu */
      aside.querySelectorAll("[data-room-ref]").forEach(function (li) {
        var id = li.getAttribute("data-room-ref");
        li.addEventListener("mouseenter", function () { setHot(id, true); });
        li.addEventListener("mouseleave", function () { setHot(id, false); });
      });
    }

    function setHot(id, on) {
      container.querySelectorAll('[data-room="' + id + '"], [data-room-ref="' + id + '"]')
        .forEach(function (el) { el.classList.toggle("is-hot", on); });
    }

    function show(stageName, variantName) {
      current.stage = stageName;
      current.variant = variantName;
      Object.keys(stages).forEach(function (sn) {
        stages[sn].el.hidden = sn !== stageName;
      });
      applyLabels();
      renderAside();
    }

    /* tooltip + hover na prostorijama */
    Object.keys(stages).forEach(function (sn) {
      var st = stages[sn];
      var tip = st.el.querySelector(".plan-tip");

      st.el.querySelectorAll(".plan-room").forEach(function (rect) {
        var id = rect.getAttribute("data-room");
        var room = st.def.rooms.filter(function (r) { return r.id === id; })[0];

        rect.addEventListener("pointerenter", function () {
          setHot(id, true);
          var extra = room.area != null ? fmtArea(room.area) : (room.label || "");
          tip.innerHTML = "<strong>" + esc(t(room.key)) + "</strong>" +
                          (extra ? "<em>" + esc(extra) + "</em>" : "");
          tip.classList.add("is-on");
        });
        rect.addEventListener("pointermove", function (e) {
          var b = st.el.getBoundingClientRect();
          tip.style.left = (e.clientX - b.left) + "px";
          tip.style.top = (e.clientY - b.top) + "px";
        });
        rect.addEventListener("pointerleave", function () {
          setHot(id, false);
          tip.classList.remove("is-on");
        });
      });
    });

    /* tabovi */
    tabs.forEach(function (btn) {
      btn.addEventListener("click", function () {
        tabs.forEach(function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");
        show(btn.getAttribute("data-stage-target"), btn.getAttribute("data-variant"));
      });
    });

    /* početno stanje = prvi tab */
    var first = tabs[0];
    if (first) {
      show(first.getAttribute("data-stage-target"), first.getAttribute("data-variant"));
    }

    /* promjena jezika -> ponovno iscrtaj tekstove */
    document.addEventListener("v3:lang", function () {
      applyLabels();
      renderAside();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-plan]").forEach(initPlan);
  });
})();
