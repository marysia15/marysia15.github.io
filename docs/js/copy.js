(function () {
  "use strict";

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
})();
