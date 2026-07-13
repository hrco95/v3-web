/* ============================================================
   V3 — glavna skripta
   Navigacija, jezici, animacije, dostupnost stanova, forma.
   ============================================================ */

(function () {
  "use strict";

  /* >>> ZAMIJENITI pravom e-mail adresom tvrtke <<< */
  var V3_EMAIL = "info@v3-gradnja.hr";

  var REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.addEventListener("DOMContentLoaded", function () {

    /* ---------- marquee: dupliciraj sadržaj prije prijevoda ---------- */
    document.querySelectorAll(".marquee__track").forEach(function (track) {
      track.innerHTML += track.innerHTML;
    });

    /* ---------- i18n ---------- */
    if (window.V3I18N) window.V3I18N.init();

    /* ---------- e-mail (jedno mjesto za promjenu) ---------- */
    document.querySelectorAll("[data-email]").forEach(function (el) {
      el.textContent = V3_EMAIL;
      el.setAttribute("href", "mailto:" + V3_EMAIL);
    });

    /* ---------- dostupnost stanova ---------- */
    function renderAvailability() {
      var map = window.AVAILABILITY || {};
      document.querySelectorAll("[data-avail]").forEach(function (el) {
        var status = map[el.getAttribute("data-avail")] || "available";
        var label = window.V3I18N ? window.V3I18N.t("unit." + status) : status;
        el.innerHTML = '<span class="badge badge--' + status + '">' + label + "</span>";
      });
    }
    renderAvailability();
    document.addEventListener("v3:lang", renderAvailability);

    /* ---------- mobilni izbornik ---------- */
    var menuBtn = document.querySelector(".menu-btn");
    var overlay = document.querySelector(".menu-overlay");
    if (menuBtn && overlay) {
      menuBtn.addEventListener("click", function () {
        var open = overlay.classList.toggle("is-open");
        menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
        document.body.style.overflow = open ? "hidden" : "";
      });
      overlay.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          overlay.classList.remove("is-open");
          menuBtn.setAttribute("aria-expanded", "false");
          document.body.style.overflow = "";
        });
      });
    }

    /* ---------- header: sakrij pri skrolanju dolje ---------- */
    var head = document.querySelector(".site-head");
    var lastY = 0;
    window.addEventListener("scroll", function () {
      var y = window.scrollY;
      if (head) {
        head.classList.toggle("is-solid", y > 10);
        head.classList.toggle("is-hidden", y > 340 && y > lastY && !(overlay && overlay.classList.contains("is-open")));
      }
      var toTop = document.querySelector(".to-top");
      if (toTop) toTop.classList.toggle("is-on", y > 700);
      lastY = y;
    }, { passive: true });

    /* ---------- povratak na vrh ---------- */
    var toTop = document.querySelector(".to-top");
    if (toTop) {
      toTop.addEventListener("click", function () {
        if (window.__lenis) window.__lenis.scrollTo(0);
        else window.scrollTo({ top: 0, behavior: REDUCED ? "auto" : "smooth" });
      });
    }

    /* ---------- Lenis (glatko skrolanje) ---------- */
    if (window.Lenis && !REDUCED) {
      var lenis = new Lenis({ duration: 1.05 });
      window.__lenis = lenis;
      function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
      requestAnimationFrame(raf);

      document.querySelectorAll('a[href^="#"]').forEach(function (a) {
        a.addEventListener("click", function (e) {
          var target = document.querySelector(a.getAttribute("href"));
          if (target) { e.preventDefault(); lenis.scrollTo(target, { offset: -70 }); }
        });
      });
    }

    /* ---------- GSAP animacije ---------- */
    if (window.gsap && !REDUCED) {
      if (window.ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
        if (window.__lenis) window.__lenis.on("scroll", ScrollTrigger.update);
      }

      /* ulaz hero sekcije */
      var heroBits = document.querySelectorAll(".hero .eyebrow, .hero-title, .hero-sub, .hero-cta, .p-hero .breadcrumb, .p-hero .eyebrow, .p-hero h1, .p-hero__meta");
      if (heroBits.length) {
        gsap.from(heroBits, { y: 46, opacity: 0, duration: 1.1, stagger: 0.09, ease: "power3.out", delay: 0.1 });
      }
      var heroImg = document.querySelector(".hero-visual img, .p-hero__visual img");
      if (heroImg) {
        gsap.from(heroImg, { scale: 1.12, opacity: 0, duration: 1.6, ease: "power2.out", delay: 0.25 });
      }

      /* otkrivanje pri skrolanju */
      if (window.ScrollTrigger) {
        document.querySelectorAll("[data-reveal]").forEach(function (el) {
          gsap.from(el, {
            y: 44, opacity: 0, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%" }
          });
        });
        document.querySelectorAll("[data-reveal-stagger]").forEach(function (group) {
          gsap.from(group.children, {
            y: 40, opacity: 0, duration: 0.9, stagger: 0.1, ease: "power3.out",
            scrollTrigger: { trigger: group, start: "top 86%" }
          });
        });
        /* blaga paralaksa velikih vizuala */
        document.querySelectorAll(".hero-visual img, .p-hero__visual img, .project-card__media img").forEach(function (img) {
          gsap.to(img, {
            yPercent: 6, ease: "none",
            scrollTrigger: { trigger: img, start: "top bottom", end: "bottom top", scrub: true }
          });
        });
      }
    }

    /* ---------- upit za pojedini stan -> ispuni formu ---------- */
    document.querySelectorAll("[data-inquiry]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var form = document.querySelector("[data-form]");
        if (!form) return;
        var select = form.querySelector('select[name="project"]');
        if (select) select.value = btn.getAttribute("data-inquiry");
        var unitSuffix = btn.getAttribute("data-inquiry-unit");
        var msg = form.querySelector('textarea[name="message"]');
        if (msg && unitSuffix && window.V3I18N) {
          var unitLine = window.V3I18N.t("unit.inquiry") + ": " +
                         window.V3I18N.t("cols.unit") + " " + unitSuffix;
          if (msg.value.indexOf(unitLine) === -1) {
            msg.value = unitLine + "\n" + msg.value;
          }
        }
        var target = document.querySelector("#kontakt");
        if (target) {
          if (window.__lenis) window.__lenis.scrollTo(target, { offset: -40 });
          else target.scrollIntoView({ behavior: REDUCED ? "auto" : "smooth" });
        }
        var nameInput = form.querySelector('input[name="name"]');
        if (nameInput) setTimeout(function () { nameInput.focus({ preventScroll: true }); }, 700);
      });
    });

    /* ---------- kontakt forma (mailto — bez backenda) ---------- */
    document.querySelectorAll("[data-form]").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var get = function (n) { var f = form.querySelector('[name="' + n + '"]'); return f ? f.value.trim() : ""; };
        var projectVal = get("project");
        var projectLabel = {
          general: window.V3I18N.t("form.optGeneral"),
          bjelovar: window.V3I18N.t("form.optBjelovar"),
          regina: window.V3I18N.t("form.optRegina")
        }[projectVal] || projectVal;

        var subject = "V3 — " + projectLabel;
        var body = get("message") + "\n\n---\n" +
                   get("name") + "\n" + get("email") +
                   (get("phone") ? "\n" + get("phone") : "");

        var status = form.querySelector(".form-status");
        if (status) status.textContent = window.V3I18N.t("form.success");

        window.location.href = "mailto:" + V3_EMAIL +
          "?subject=" + encodeURIComponent(subject) +
          "&body=" + encodeURIComponent(body);
      });
    });

    /* ---------- godina u podnožju ---------- */
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  });
})();
