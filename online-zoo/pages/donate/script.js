const burger = document.querySelector('.header_burger'),
    burgerMenu = document.querySelector('.burger'),
    burgerClose = document.querySelector('.burger_close'),
    background = document.querySelector('.background');

[`load`, `resize`].forEach(it => {
    window.addEventListener(it, () => {
        if (window.screen.width > 640) {
            burgerMenu.classList.remove('open');
        }
    });
});

burger.addEventListener('click', () => {
    burgerMenu.classList.add('open');

    document.body.style.overflow = 'hidden';
    background.style.display = 'block';
});

[burgerClose, background].forEach(item => {
    item.addEventListener('click', () => {
        burgerMenu.classList.remove('open');

        document.body.style.overflow = '';
        background.style.display = 'none';
    });
})
