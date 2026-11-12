// The light and dark switch in the header. Without a choice the site follows
// the device's setting. A choice that differs from the device's is kept in
// this browser (localStorage "theme"), so the next page opens the same way;
// choosing what the device already shows clears it. Nothing is sent anywhere.
(function () {
  var button = document.querySelector(".theme-toggle");
  if (!button) return;
  var root = document.documentElement;
  var device = window.matchMedia("(prefers-color-scheme: dark)");
  var metas = Array.prototype.slice.call(document.querySelectorAll('meta[name="theme-color"]'));
  var light = "#FAF7F2", dark = "#171918";

  function isDark() {
    var chosen = root.getAttribute("data-theme");
    return chosen ? chosen === "dark" : device.matches;
  }
  function sync() {
    var on = isDark();
    button.setAttribute("aria-pressed", on ? "true" : "false");
    button.title = on ? "Switch to light" : "Switch to dark";
    var chosen = root.getAttribute("data-theme");
    metas.forEach(function (m) {
      var own = /dark/.test(m.getAttribute("media") || "") ? dark : light;
      m.setAttribute("content", chosen ? (chosen === "dark" ? dark : light) : own);
    });
  }
  function keep(value) {
    try {
      if (value) localStorage.setItem("theme", value);
      else localStorage.removeItem("theme");
    } catch (e) {}
  }

  button.hidden = false;
  button.addEventListener("click", function () {
    var next = isDark() ? "light" : "dark";
    if ((next === "dark") === device.matches) {
      root.removeAttribute("data-theme");
      keep(null);
    } else {
      root.setAttribute("data-theme", next);
      keep(next);
    }
    sync();
  });
  if (device.addEventListener) device.addEventListener("change", sync);
  sync();
})();
