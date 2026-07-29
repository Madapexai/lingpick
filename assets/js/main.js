// LingPick landing page — motion, language preference & accessibility
// UI Skills: motion-performance (transform/opacity only) + accessibility (reduced-motion)
(function () {
  "use strict";

  var prefersReduced = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Scroll reveal using IntersectionObserver (no layout thrashing)
  var reveals = document.querySelectorAll(".reveal");
  if (prefersReduced || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  // Language dropdown: toggle, remember choice, locale-aware first visit
  var KEY = "lingpick-lang";
  var isZh = location.pathname.endsWith("zh.html");
  document.querySelectorAll(".lang-wrap").forEach(function (w) {
    var btn = w.querySelector(".lang-btn");
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = w.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("click", function (e) {
      if (!w.contains(e.target)) {
        w.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
    w.querySelectorAll(".lang-menu a").forEach(function (a) {
      a.addEventListener("click", function () {
        try { localStorage.setItem(KEY, a.getAttribute("href").indexOf("zh") > -1 ? "zh" : "en"); } catch (e2) {}
        w.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  });

  // Product showcase — gentle auto-scroll (pauses on interaction, off for reduced-motion)
  var track = document.querySelector(".shot-track");
  if (track && !prefersReduced) {
    var step = function () {
      if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 4) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({ left: track.clientWidth * 0.62, behavior: "smooth" });
      }
    };
    var timer = setInterval(step, 3600);
    ["mouseenter", "touchstart", "focusin", "wheel"].forEach(function (ev) {
      track.addEventListener(ev, function () { clearInterval(timer); }, { passive: true });
    });
  }

  // First visit with no stored preference: if the browser prefers Chinese, show the Chinese page
  try {
    if (!localStorage.getItem(KEY) && !sessionStorage.getItem("lp-lang-redirect")) {
      var navLang = (navigator.language || "").toLowerCase();
      if (navLang.indexOf("zh") === 0 && !isZh) {
        sessionStorage.setItem("lp-lang-redirect", "1");
        location.href = "./zh.html";
      }
    }
  } catch (e) {}

  // Close mobile nav on anchor click (keyboard + pointer friendly)
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function () {
      var id = a.getAttribute("href");
      if (id.length > 1) {
        var target = document.querySelector(id);
        if (target) target.setAttribute("tabindex", "-1");
      }
    });
  });
})();
