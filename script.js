function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split();
  for (const cookie of cookies) {
    const [key, value] = cookie.split('=');
    if (key === name) return value;
  }
  return null;
}

function applyPreferences() {
  const fontSize = getCookie('fontSize') || '16';
  const fontColor = getCookie('fontColor') || '#000000';

  document.documentElement.style.setProperty('--fontsize', `${fontSize}px`);
  document.documentElement.style.setProperty('--fontcolor', fontColor);

  document.getElementById('fontsize').value = fontSize;
  document.getElementById('fontcolor').value = fontColor;
}

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();

  const fontSize = document.getElementById('fontsize').value;
  const fontColor = document.getElementById('fontcolor').value;

  setCookie('fontSize', fontSize, 365);
  setCookie('fontColor', fontColor, 365);

  applyPreferences();

  alert('Preferences saved!');
});

document.addEventListener('DOMContentLoaded', applyPreferences);
