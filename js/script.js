
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
});
