function toggleMode() {
  const body = document.body;
  const icon = document.getElementById('mode-icon');
  
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');

  if (body.classList.contains('dark-mode')) {
      icon.src = 'dark.png';
  } else {
      icon.src = 'light.png';
  }
}

// Set initial mode
document.body.classList.add('light-mode');
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
