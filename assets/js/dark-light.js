    const toggleBtn = document.getElementById('themeToggle');

    function applyTheme(theme) {
      document.body.classList.remove('light', 'dark');
      document.body.classList.add(theme);
      toggleBtn.textContent = theme === 'light' ? 'Dark' : 'Light';
      localStorage.setItem('theme', theme);
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      applyTheme(savedTheme);
    } else {
      applyTheme('dark');
    }

    toggleBtn.addEventListener('click', () => {
      const current = document.body.classList.contains('light') ? 'light' : 'dark';
      applyTheme(current === 'light' ? 'dark' : 'light');
    });

    document.getElementById("year").textContent = new Date().getFullYear();