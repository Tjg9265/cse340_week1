const hamburger = document.getElementById('hamburger');
const navUl = document.querySelector('nav ul');
hamburger?.addEventListener('click', () => {
    navUl.classList.toggle('show');
});

const magicBtn = document.getElementById('magicBtn');
const magicArea = document.getElementById('magicArea');

magicBtn?.addEventListener('click', () => {
    const messages = [
    "✨ Surprise! Check our specials! ✨",
    "🚗 New cars just arrived! 🚗",
    "🎉 Enjoy your visit! 🎉",
    "🌟 Adventure awaits! 🌟" 
    ];
    magicArea.testContent = messages[Math.floor(Math.random() * messages.length)];
});