(function () {
  "use strict";

  // ── Copy-to-clipboard ──
  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".copy-btn");
    if (!btn) return;

    var text = btn.getAttribute("data-copy");
    if (!text) return;

    navigator.clipboard.writeText(text).then(function () {
      var original = btn.textContent;
      btn.textContent = "Skopiowano!";
      btn.classList.add("copied");

      setTimeout(function () {
        btn.textContent = original;
        btn.classList.remove("copied");
      }, 2000);
    });
  });

  // ── Sticky CTA: hide when donation card is visible ──
  var stickyCta = document.querySelector(".sticky-cta");
  var pitSection = document.getElementById("dane-do-pit");

  if (stickyCta && pitSection && window.IntersectionObserver) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          stickyCta.style.display = entry.isIntersecting ? "none" : "";
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(pitSection);
  }
})();
