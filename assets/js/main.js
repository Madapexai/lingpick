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

  // Language: remember the user's choice + locale-aware first visit
  var KEY = "lingpick-lang";
  var isZh = location.pathname.endsWith("zh.html");
  var links = document.querySelectorAll(".lang-switch a");
  links.forEach(function (a) {
    a.addEventListener("click", function () {
      try { localStorage.setItem(KEY, a.getAttribute("href").indexOf("zh") > -1 ? "zh" : "en"); } catch (e) {}
    });
  });
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
