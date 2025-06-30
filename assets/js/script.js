function darkMode() {
    let hero = document.querySelector('.hero');
    let nav = document.querySelector('nav');
    let darkModeButton = document.querySelector('.fa-moon');
    let lightModeButton = document.querySelector('.fa-sun');

    hero.classList.toggle('darkMode');
    nav.classList.toggle('darkMode');
    darkModeButton.classList.toggle('active');
    lightModeButton.classList.toggle('active');
}