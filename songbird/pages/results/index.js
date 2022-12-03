if (localStorage.getItem('language') == 'ru') {
    document.querySelector('.header').innerHTML = `
    <div class="header-top">
        <a href="../main/index.html" class="logo"><a></a></a>
        <h4>
            Счет:
            <span class="score">0</span>
        </h4>
    </div>
    <ul class="pagination">
        <li class="page-item"><a href="../main/index.html" class="page-link">Стартовая страница</a></li>
        <li class="page-item"><a href="../quiz/index.html" class="page-link">Викторина</a></li>
    </ul>
    `;
} else {
    document.querySelector('.header').innerHTML = `
    <div class="header-top">
        <a href="../main/index.html" class="logo"><a></a></a>
        <h4>
            Score:
            <span class="score">0</span>
        </h4>
    </div>
    <ul class="pagination">
        <li class="page-item"><a href="../main/index.html" class="page-link">Start Page</a></li>
        <li class="page-item"><a href="../quiz/index.html" class="page-link">Quiz</a></li>
    </ul>
    `;
}

const box = document.querySelector('.game-over-box');
const score = document.querySelector('.score');
score.textContent = localStorage.getItem('score');

if (localStorage.getItem('score') == 30) {
    if (localStorage.getItem('language') == 'ru') {
        box.innerHTML = `
        <h1>Поздравляем!</h1>
        <p>Вы прошли викторину и набрали максимальное количество баллов, а именно 30/30</p>
        <a href='../quiz/index.html' class="btn">
            Попробовать еще раз
        </a>
        `;
    } else {
        box.innerHTML = `
        <h1>Congratulations!</h1>
        <p>You passed the quiz and scored the maximum number of points, namely 30/30</p>
        <a href='../quiz/index.html' class="btn">
            Try more
        </a>
        `;
    }

} else {
    if (localStorage.getItem('language') == 'ru') {
        box.innerHTML = `
        <h1>Поздравляем!</h1>
        <p>Вы прошли викторину и набрали ${localStorage.getItem('score')} из 30 возможных баллов</p>
        <a href='../quiz/index.html' class="btn">
            Попробовать еще раз
        </a>
        `;
    } else {
        box.innerHTML = `
        <h1>Congratulations!</h1>
        <p>You passed the quiz and scored ${localStorage.getItem('score')} out of 30 possible points</p>
        <a href='../quiz/index.html' class="btn">
            Try more
        </a>
        `;
    }

}