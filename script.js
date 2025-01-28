// Helper function to set a cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

// Helper function to get a cookie by name
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      return value;
    }
  }
  return null;
}

// Apply preferences from cookies
function applyPreferences() {
  const fontSize = getCookie("fontSize") || "16";
  const fontColor = getCookie("fontColor") || "#000000";

  document.documentElement.style.setProperty("--fontsize", `${fontSize}px`);
  document.documentElement.style.setProperty("--fontcolor", fontColor);

  // Set form values to reflect current preferences
  document.getElementById("fontsize").value = fontSize;
  document.getElementById("fontcolor").value = fontColor;
}

// Save preferences on form submission
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const fontSize = document.getElementById("fontsize").value;
  const fontColor = document.getElementById("fontcolor").value;

  // Save preferences in cookies
  setCookie("fontSize", fontSize, 365);
  setCookie("fontColor", fontColor, 365);

  // Apply preferences immediately
  document.documentElement.style.setProperty("--fontsize", `${fontSize}px`);
  document.documentElement.style.setProperty("--fontcolor", fontColor);

  alert("Preferences saved!");
});

// Initialize preferences on page load
document.addEventListener("DOMContentLoaded", applyPreferences);
