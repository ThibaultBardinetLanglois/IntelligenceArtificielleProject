console.log('Hello World!');

const clickHambIcon = document.querySelector('.hamburger');

const burgerMenu = document.querySelector('.header__nav-topRight');

clickHambIcon.addEventListener('click', () => {
    burgerMenu.classList.toggle("change");
});