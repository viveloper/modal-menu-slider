const toggle = document.getElementById('toggle');
const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');

// toggle nav
toggle.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');
});

// show modal
open.addEventListener('click', () => {
  modal.classList.toggle('show-modal');
});

// hide modal
close.addEventListener('click', () => {
  modal.classList.toggle('show-modal');
});

// hide modal on outside click
document.body.addEventListener('click', e =>
  e.target === modal ? modal.classList.toggle('show-modal') : false
);
