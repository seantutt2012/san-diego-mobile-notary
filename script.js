const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#mainNav');
function closeMenu() { menu.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
toggle.addEventListener('click', () => { const open = menu.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); });
menu.addEventListener('click', (event) => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && menu.classList.contains('open')) { closeMenu(); toggle.focus(); } });
document.querySelector('#year').textContent = new Date().getFullYear();
const portrait = document.querySelector('.hero-photo');
function revealPortrait() { if (portrait.naturalWidth) portrait.parentElement.hidden = false; }
portrait.addEventListener('load', revealPortrait);
portrait.addEventListener('error', () => { portrait.parentElement.hidden = true; });
if (portrait.complete) revealPortrait();
