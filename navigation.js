const toggle = document.querySelector('.nav-toggle');
const links = document.getElementById(toggle.getAttribute('aria-controls'));
const mobile = window.matchMedia('(max-width: 760px)');

function closeMenu(restoreFocus = false) {
  toggle.setAttribute('aria-expanded', 'false');
  if (restoreFocus) toggle.focus();
}

toggle.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!isOpen));
});

document.addEventListener('click', (event) => {
  const target = event.target;
  if (toggle.contains(target)) return;
  if (!links.contains(target) || target.closest('a')) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeMenu(true);
  }
});

mobile.addEventListener('change', () => closeMenu());
toggle.hidden = false;
