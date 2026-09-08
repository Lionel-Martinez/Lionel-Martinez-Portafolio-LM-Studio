
  // Cierra el menú hamburguesa móvil al hacer clic en cualquier enlace de navegación
document.querySelectorAll('#navbar-sticky a').forEach(link => {
  link.addEventListener('click', () => {
    const navbar = document.getElementById('navbar-sticky');
    if (!navbar.classList.contains('hidden')) {
      navbar.classList.add('hidden');
    }
  });
});
