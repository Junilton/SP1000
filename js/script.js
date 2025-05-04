document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const siteNav = document.querySelector(".site-nav");
  const items = document.querySelectorAll(".menu-item-has-children");

  // Toggle menu mobile
  menuToggle.addEventListener("click", () => {
    siteNav.classList.toggle("open");
    menuToggle.classList.toggle("open");
  });

  items.forEach(item => {
    const link = item.querySelector("a");
    link.addEventListener("click", e => {
      const mobile = window.innerWidth <= 768;
      if (!mobile) {
        // No desktop, só deixamos o hover/CSS controlar o submenu
        return;
      }

      // === Mobile: abre submenu no 1º clique, navega no 2º ===
      const isActive = item.classList.contains("active");
      if (!isActive) {
        e.preventDefault();
        items.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
      }
      // 2º clique: não previne, deixa navegar
    });
  });

  // Fecha submenus ao clicar fora (mobile também fecha via script)
  document.addEventListener("click", e => {
    const mobile = window.innerWidth <= 768;
    if (mobile) {
      items.forEach(item => {
        if (!item.contains(e.target)) item.classList.remove("active");
      });
    }
  });
});