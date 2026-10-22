const menu = document.querySelector('.menu');
const nav = document.querySelector('#navlinks');
if (menu && nav) {
  menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }));
}
document.querySelector('#year').textContent = new Date().getFullYear();
// Quote requests use a regular HTTPS form POST, rather than a JavaScript fetch
// that can be blocked or hang on mobile browsers.
