(function () {
  "use strict";

  var elements = document.querySelectorAll("[data-include]");
  var currentHash = window.location.hash;

  function scrollToHashTarget() {
    if (!currentHash || currentHash.length < 2) return;

    var target = document.getElementById(decodeURIComponent(currentHash.slice(1)));
    if (!target) return;

    requestAnimationFrame(function () {
      var root = document.documentElement;
      var previousScrollBehavior = root.style.scrollBehavior;
      var targetTop = target.getBoundingClientRect().top + window.scrollY;

      root.style.scrollBehavior = "auto";
      window.scrollTo(0, targetTop);

      requestAnimationFrame(function () {
        root.style.scrollBehavior = previousScrollBehavior;
      });
    });
  }

  function restoreHashScroll() {
    scrollToHashTarget();
    window.setTimeout(scrollToHashTarget, 100);
    window.setTimeout(scrollToHashTarget, 300);
  }

  if (elements.length === 0) {
    restoreHashScroll();
    return;
  }

  var includePromises = Array.prototype.map.call(elements, function (el) {
    var src = el.getAttribute("data-include");

    return fetch(src)
      .then(function (res) {
        if (!res.ok) throw new Error("Failed to load " + src);
        return res.text();
      })
      .then(function (html) {
        el.innerHTML = html;
      })
      .catch(function (err) {
        console.error(err);
      });
  });

  Promise.all(includePromises).then(function () {
    restoreHashScroll();

    if (document.readyState === "complete") {
      scrollToHashTarget();
      return;
    }

    window.addEventListener("load", scrollToHashTarget, { once: true });
  });
})();
