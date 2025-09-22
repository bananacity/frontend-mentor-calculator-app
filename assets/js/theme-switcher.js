// Initial page load theme logic
const savedTheme = localStorage.getItem("selected-theme");
const prefersDarkTheme = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;
const initialTheme = savedTheme
  ? savedTheme
  : prefersDarkTheme
  ? "dark"
  : "light";

document.documentElement.setAttribute("data-selected-theme", initialTheme);
document.querySelector(`input[data-theme="${initialTheme}"]`).checked = true;

// Theme switcher logic
const handleThemeSelection = (event) => {
  const theme = event.target.getAttribute("data-theme");
  document.documentElement.setAttribute("data-selected-theme", theme);
  localStorage.setItem("selected-theme", theme);
};

const themeSwitcher = document.querySelector(".theme-toggle");
const radioInputs = themeSwitcher.querySelectorAll("input");

radioInputs.forEach((radioInput) => {
  radioInput.addEventListener("change", handleThemeSelection);
});
