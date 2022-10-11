import { testimonialsArray } from "./testimonialsCards.js";

const burger = document.querySelector('.header_burger'),
    burgerMenu = document.querySelector('.burger'),
    burgerClose = document.querySelector('.burger_close'),
    background = document.querySelector('.background'),
    cardContainers = document.querySelectorAll('.pets_container-cards'),
    gapContainer = parseInt(getComputedStyle(cardContainers[0]).gap, 10) - 1,
    next = document.querySelector('.arrow_right').parentNode,
    prev = document.querySelector('.arrow_left').parentNode;

[`load`, `resize`].forEach(it => {
    window.addEventListener(it, () => {
        if (window.screen.width > 640) {
            burgerMenu.classList.remove('open');
        }
    });
});

// Header Burger

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

// Carousel Pets

let PetsContainerWidth = 1190;
let i = 0;

next.addEventListener('click', () => {
    i++;
    if (i > 2) {
        i = 0;
    }
    cardContainers.forEach(item => {
        item.style['transform'] = `translateX(-${i * PetsContainerWidth}px)`
    });
});


prev.addEventListener('click', () => {
    i--;
    if (i < 0) {
        i = 2;
    }
    cardContainers.forEach(item => {
        item.style['transform'] = `translateX(-${i * PetsContainerWidth}px)`
    });
});

//  Carousel Testimonials

const testimonialsCards = document.querySelector('.testimonials_cards'),
    progressBar = document.querySelector('input[type="range"]');

let htmlCode = ``;

testimonialsArray.forEach(item => {
    htmlCode += `
    <div id="${item.id}" class="testimonials_cards-background">
        <div class="testimonials_card">
            <div class="testimonials_card-info">
                <img src="../../assets/icons/testimonials_icons/${item.pic}" alt="User">
                <div class="testimonials_card-title">
                    <h4>${item.name}</h4>
                    <div class="testimonials_card-data">
                        <div class="localisation">${item.location}</div>
                        <div>•</div>
                        <div class="day">${item.day}</div>
                    </div>
                </div>
            </div>
            <div class="testimonials_card-text">
                ${item.text}
            </div>
        </div>
    </div>`;
})

testimonialsCards.innerHTML = htmlCode;

let testemonialsWidth = 298;

if (window.screen.width <= 1000) {
    testemonialsWidth = 292 + 30;
} else if (window.screen.width <= 640) {

}

let rangeValue = function () {
    console.log(testemonialsWidth)
    testimonialsCards.style['transform'] = `translateX(-${progressBar.value * testemonialsWidth}px)`
}

progressBar.addEventListener("input", rangeValue);


// PopUp Testimonials

const testCards = document.querySelectorAll('.testimonials_cards-background');

testCards.forEach(item => {
    item.addEventListener('click', () => {
        if (window.screen.width <= 640) {
            const popUpMenu = document.querySelector('.popup_menu');

            testimonialsArray.forEach(elem => {
                if (elem.id == item.getAttribute('id')) {
                    let popup = `
                    <img class="popup_menu-close" src="../../assets/icons/popup_close.svg" alt="PopUp Close">
                    <div class="popup_menu_cards-background">
                        <div class="popup_menu_card">
                            <div class="popup_menu_card-info">
                                <img src="../../assets/icons/testimonials_icons/${elem.pic}" alt="User">
                                <div class="popup_menu_card-title">
                                    <h4>${elem.name}</h4>
                                    <div class="popup_menu_card-data">
                                        <div class="localisation">${elem.location}</div>
                                        <div>•</div>
                                        <div class="day">${elem.day}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="popup_menu_card-text">
                                ${elem.text}
                            </div>
                        </div>
                    </div>`
                    popUpMenu.innerHTML = popup;
                }
            })


            const popUp = document.querySelector('.popup_menu'),
                popUpClose = document.querySelector('.popup_menu-close');

            popUp.classList.add('open');
            document.body.style.overflow = 'hidden';
            background.style.display = 'block';

            [popUpClose, background].forEach(item => {
                item.addEventListener('click', () => {
                    popUp.classList.remove('open');
                    document.body.style.overflow = '';
                    background.style.display = 'none';
                });
            })
        }
    })
})








