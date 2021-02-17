let burgerButton = document.querySelector('.burger');
let burgerMenu = document.querySelector('.nav__list');
 burgerButton.onclick = function () {
    burgerButton.classList.toggle('active');
    burgerMenu.classList.toggle('active');
 }  