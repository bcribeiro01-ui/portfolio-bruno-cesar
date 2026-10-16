"use strict";
document.documentElement.classList.add("js");
const themeButton = document.querySelector(".theme-toggle");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const label = theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro";
  themeButton.setAttribute("aria-label", label);
  themeButton.title = label;
  document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#0b0f14" : "#f5f7fb";
}
try {
  const storedTheme = localStorage.getItem("bc-portfolio-theme");
  if (storedTheme === "light" || storedTheme === "dark") setTheme(storedTheme);
} catch { /* Tema padrão quando o armazenamento estiver bloqueado. */ }
themeButton.addEventListener("click", () => {
  const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  setTheme(theme);
  try { localStorage.setItem("bc-portfolio-theme", theme); } catch { /* Preferência apenas nesta sessão. */ }
});
function closeMenu(restoreFocus = false) {
  navigation.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  if (restoreFocus) menuButton.focus();
}
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(open));
  navigation.classList.toggle("is-open", open);
});
navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") closeMenu(true);
});
matchMedia("(max-width: 800px)").addEventListener("change", () => closeMenu());
document.querySelector("#year").textContent = String(new Date().getFullYear());
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      navigation.querySelectorAll('a[href^="#"]').forEach((link) => {
        if (link.hash === "#" + entry.target.id) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }
  }, { rootMargin: "-15% 0px -55% 0px", threshold: 0 });
  document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));
}
