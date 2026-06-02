const themeSwitch = document.getElementById("theme-switch");

const updateThemeButton = (theme) => {
  if (!themeSwitch) return;
  themeSwitch.textContent = theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
};

const applyTheme = (theme) => {
  document.body.classList.toggle("darkmode", theme === "dark");
  document.body.classList.toggle("lightmode", theme === "light");
  localStorage.setItem("theme", theme);
  updateThemeButton(theme);
};

const storedTheme = localStorage.getItem("theme");
const defaultTheme = storedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
applyTheme(defaultTheme);

if (themeSwitch) {
  themeSwitch.addEventListener("click", () => {
    const currentTheme = document.body.classList.contains("darkmode") ? "dark" : "light";
    applyTheme(currentTheme === "dark" ? "light" : "dark");
  });
}

