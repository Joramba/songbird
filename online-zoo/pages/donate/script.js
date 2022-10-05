const burger = document.querySelector('.header_burger'),
    burgerMenu = document.querySelector('.burger'),
    burgerClose = document.querySelector('.burger_close');



burger.addEventListener('click', () => {
    burgerMenu.classList.add('open');
});

burgerClose.addEventListener('click', () => {
    burgerMenu.classList.remove('open');
});