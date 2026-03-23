// Mobile nav toggle
const toggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Active nav link
const currentPath = window.location.pathname;
document.querySelectorAll('.nav__links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPath || (href !== '/' && currentPath.startsWith(href))) {
    link.classList.add('active');
  }
  if (href === '/' && currentPath === '/') {
    link.classList.add('active');
  }
});
