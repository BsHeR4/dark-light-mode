
function darkMode() {
    let body = document.querySelector('body');
    let darkModeButton = document.querySelector('.fa-moon');
    let lightModeButton = document.querySelector('.fa-sun');

    body.classList.toggle('darkMode');
    darkModeButton.classList.toggle('active');
    lightModeButton.classList.toggle('active');
}