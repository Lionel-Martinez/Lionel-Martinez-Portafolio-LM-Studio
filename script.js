document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
  const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
  const themeToggleText = document.getElementById('theme-toggle-text');

  // Función para alternar las clases de modo oscuro
  function setDarkTheme(isDark) {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
      if (themeToggleDarkIcon) themeToggleDarkIcon.classList.add('hidden');
      if (themeToggleLightIcon) themeToggleLightIcon.classList.remove('hidden');
      if (themeToggleText) themeToggleText.textContent = 'Modo Claro';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
      if (themeToggleLightIcon) themeToggleLightIcon.classList.add('hidden');
      if (themeToggleDarkIcon) themeToggleDarkIcon.classList.remove('hidden');
      if (themeToggleText) themeToggleText.textContent = 'Modo Oscuro';
    }
  }

  // Verificación del tema preferido o guardado
  const savedTheme = localStorage.getItem('color-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    setDarkTheme(true);
  } else {
    setDarkTheme(false);
  }

  // Evento de clic en el botón de alternancia
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isCurrentlyDark = document.documentElement.classList.contains('dark');
      setDarkTheme(!isCurrentlyDark);
    });
  }

  // Cierre automático del menú móvil al hacer clic en enlaces
  document.querySelectorAll('#navbar-sticky a').forEach(link => {
    link.addEventListener('click', () => {
      const navbar = document.getElementById('navbar-sticky');
      if (navbar && !navbar.classList.contains('hidden')) {
        navbar.classList.add('hidden');
      }
    });
  });
});