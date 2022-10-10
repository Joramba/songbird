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

//Burger menu

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

// Donate Amount 

const donateContainer = document.querySelectorAll('.pick_feed-line-bar-container'),
    donateInput = document.querySelector('.pick_feed-another_amount-input');

donateContainer.forEach(item => {
    item.addEventListener('click', () => {
        donateContainer.forEach(elem => {
            elem.children[1].style.display = 'none';
            elem.children[2].style.color = '#333B41';
        })
        item.children[1].style.display = 'block';
        item.children[2].style.color = '#FE9013';
        donateInput.value = item.children[2].getAttribute('value');
    })
});

donateInput.addEventListener('change', (e) => {
    donateContainer.forEach(elem => {
        if (elem.children[2].getAttribute('value') == e.target.value) {
            elem.children[1].style.display = 'block';
            elem.children[2].style.color = '#FE9013';
        } else {
            elem.children[1].style.display = 'none';
            elem.children[2].style.color = '#333B41';
        }
    })
})