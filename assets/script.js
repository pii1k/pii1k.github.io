// Highlight active nav link based on current path
(function () {
  const path = window.location.pathname.replace(/\/$/, "");
  document.querySelectorAll(".links a").forEach(a => {
    const href = a.getAttribute("href").replace(/\/$/, "");
    if (href === path) a.classList.add("active");
  });
})();
