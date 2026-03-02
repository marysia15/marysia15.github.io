(function () {
  "use strict";

  var elements = document.querySelectorAll("[data-include]");

  elements.forEach(function (el) {
    var src = el.getAttribute("data-include");

    fetch(src)
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
})();
