document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  const servicosItem = document.querySelector('.menu-item-has-children');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    toggle.classList.toggle('open');
  });

  // Mostrar submenu no hover
  servicosItem.addEventListener('mouseenter', () => {
    servicosItem.classList.add('active');
  });

  // Ocultar submenu ao tirar o mouse
  servicosItem.addEventListener('mouseleave', () => {
    servicosItem.classList.remove('active');
  });
});