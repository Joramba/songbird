const burger = document.querySelector('.header_burger'),
    burgerMenu = document.querySelector('.burger'),
    burgerClose = document.querySelector('.burger_close');

[`load`, `resize`].forEach(it => {
    window.addEventListener(it, () => {
        if (window.screen.width > 640) {
            burgerMenu.classList.remove('open');
        }
    });
});


burger.addEventListener('click', () => {
    burgerMenu.classList.add('open');
});

burgerClose.addEventListener('click', () => {
    burgerMenu.classList.remove('open');
});