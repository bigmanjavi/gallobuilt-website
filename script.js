const menu = document.querySelector('.menu');
const nav = document.querySelector('#navlinks');
menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }));
document.querySelector('#year').textContent = new Date().getFullYear();
const form = document.querySelector('#quote-form');
const status = document.querySelector('#form-status');
form.addEventListener('submit', async event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const button = form.querySelector('button[type="submit"]');
  button.disabled = true;
  button.textContent = 'Sending…';
  status.textContent = 'Sending your request…';
  try {
    const response = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
    const result = await response.json();
    if (!response.ok || result.success === false || result.success === 'false') throw new Error('Submission not accepted');
    status.textContent = 'Your request was submitted. We will be in touch. (If this is the first submission, the site owner must activate FormSubmit by email before delivery.)';
    form.reset();
  } catch (error) {
    status.textContent = 'We could not submit the form right now. Please call (832) 221-7042 or email contact@gallobuilt.com instead.';
  } finally { button.disabled = false; button.textContent = 'Submit Quote Request'; }
});
