// Toggle hamburger menu
const hamburger = document.getElementById('hamburger');
const navUl = document.querySelector('nav ul');

if (hamburger && navUl) {
  hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
  });
}

// Magic button functionality
const magicBtn = document.getElementById('magicBtn');
const magicArea = document.getElementById('magicArea');

if (magicBtn && magicArea) {
  magicBtn.addEventListener('click', () => {
    const messages = [
      "✨ Surprise! Check our specials! ✨",
      "🚗 New cars just arrived! 🚗",
      "🎉 Enjoy your visit! 🎉",
      "🌟 Adventure awaits! 🌟"
    ];
    magicArea.textContent = messages[Math.floor(Math.random() * messages.length)];
  });
}
