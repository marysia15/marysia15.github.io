(function () {
  "use strict";

  // ── Tab switching ──
  var tabBtns = document.querySelectorAll(".tab-btn");
  var tabPanels = document.querySelectorAll(".tab-panel");

  tabBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var targetId = btn.getAttribute("aria-controls");

      // Deactivate all
      tabBtns.forEach(function (b) {
        b.setAttribute("aria-selected", "false");
        b.classList.remove("tab-btn-active");
      });
      tabPanels.forEach(function (p) {
        p.hidden = true;
        p.classList.remove("tab-panel--active");
      });

      // Activate selected
      btn.setAttribute("aria-selected", "true");
      btn.classList.add("tab-btn-active");
      var panel = document.getElementById(targetId);
      if (panel) {
        panel.hidden = false;
        panel.classList.add("tab-panel--active");
      }
    });
  });

  // ── Scroll-based sidebar progress highlighting ──
  var progressItems = document.querySelectorAll(".progress-item");

  if (!window.IntersectionObserver || progressItems.length === 0) return;

  var chapters = document.querySelectorAll(".historia-chapter");
  var activeChapterId = null;

  function setActive(id) {
    if (activeChapterId === id) return;
    activeChapterId = id;

    progressItems.forEach(function (item) {
      var matches = item.getAttribute("data-targets") === id;
      item.classList.toggle("progress-item-active", matches);
    });
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    {
      rootMargin: "-30% 0px -60% 0px",
      threshold: 0,
    }
  );

  chapters.forEach(function (chapter) {
    observer.observe(chapter);
  });

  // Activate first item on load
  if (chapters.length > 0) {
    setActive(chapters[0].id);
  }
})();
