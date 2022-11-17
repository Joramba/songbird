const menu = document.querySelector('.pagination'),
    main = document.querySelector('.main');



if (localStorage.getItem('language') == null) {
    localStorage.setItem('language', 'ru')
}



function changeLanguageApp() {
    if (localStorage.getItem('language') == 'ru') {
        menu.innerHTML = `
        <li class="page-item-main"><a href="#!" class="page-link">Стартовая страница</a></li>
        <li class="page-item-main"><a href="../quiz/index.html" class="page-link">Викторина</a></li>
        `;

        main.innerHTML = `
        <div class="main-container">
            <h1 class="title">Приложение Songbird</h1>
            <div class="text">Songbird - приложение-викторина для распознавания птиц по их голосам.</div>
            <div class="text-language">Выберите язык и начнем игру:</div>
            <div class="language">
                <span>Русский</span>
                <label class="toggle">
                    <input id="toggleswitch" type="checkbox">
                    <span class="roundbutton"></span>
                </label>
                <span>English</span>
            </div>
            <a href="../quiz/index.html" class="button">Играть</a>
        </div>
        `;
    } else {
        menu.innerHTML = `
        <li class="page-item-main"><a href="#!" class="page-link">Start Page</a></li>
        <li class="page-item-main"><a href="../quiz/index.html" class="page-link">Quiz</a></li>
        `;

        main.innerHTML = `
        <div class="main-container">
            <h1 class="title">Songbird app</h1>
            <div class="text">Songbird is a quiz app for recognizing birds by their voices.</div>
            <div class="text-language">Choose a language and let's start the game:</div>
            <div class="language">
                <span>Русский</span>
                <label class="toggle">
                    <input id="toggleswitch" type="checkbox" checked>
                    <span class="roundbutton"></span>
                </label>
                <span>English</span>
            </div>
            <a href="../quiz/index.html" class="button">Play</a>
        </div>
        `;
    }
    const input = document.getElementById('toggleswitch');

    input.addEventListener('change', function () {
        if (this.checked) {
            localStorage.setItem('language', 'en');
            changeLanguageApp();
        } else {
            localStorage.setItem('language', 'ru');
            changeLanguageApp();
        }
    });
}

changeLanguageApp();





