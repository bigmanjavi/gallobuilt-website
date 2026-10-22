const menu = document.querySelector('.menu');
const nav = document.querySelector('#navlinks');
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#quote-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const subject = 'GalloBuilt Quote Request - ' + data.get('name');
  const body = `Name: ${data.get('name')}\nPhone: ${data.get('phone')}\nLocation: ${data.get('location')}\n\nProject details:\n${data.get('details')}`;
  const url = `mailto:contact@gallobuilt.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.querySelector('#form-status').textContent = 'Your email app should open with your request. Please press Send there to submit it. If nothing opens, email contact@gallobuilt.com directly.';
  window.location.href = url;
});
