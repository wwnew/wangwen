const root = document.documentElement;
const toggle = document.querySelector('.theme-toggle');
const storedTheme = localStorage.getItem('wangwen-theme');

if (storedTheme === 'dark') {
  root.dataset.theme = 'dark';
  toggle?.setAttribute('aria-pressed', 'true');
}

toggle?.addEventListener('click', () => {
  const isDark = root.dataset.theme === 'dark';
  if (isDark) {
    delete root.dataset.theme;
    localStorage.setItem('wangwen-theme', 'light');
  } else {
    root.dataset.theme = 'dark';
    localStorage.setItem('wangwen-theme', 'dark');
  }
  toggle.setAttribute('aria-pressed', String(!isDark));
});

document.querySelector('#year').textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -5% 0px' },
  );
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
