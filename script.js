function toggleMenu(){
    const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
menu.classList.toggle("open");
icon.classList.toggle("open");
}

const toggleThemeButton = document.getElementById('toggle-theme-button');

toggleThemeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});
