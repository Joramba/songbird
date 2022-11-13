const box = document.querySelector('.game-over-box');
const score = document.querySelector('.score');
score.textContent = localStorage.getItem('score');

if (localStorage.getItem('score') == 30) {
    box.innerHTML = `
    <h1>Поздравляем!</h1>
    <p>Вы прошли викторину и набрали максимальное количество баллов, а именно 30/30</p>
    <a href='../quiz/index.html' class="btn">
        Попробовать еще раз
    </a>
    `;
} else {
    box.innerHTML = `
    <h1>Поздравляем!</h1>
    <p>Вы прошли викторину и набрали ${localStorage.getItem('score')} из 30 возможных баллов</p>
    <a href='../quiz/index.html' class="btn">
        Попробовать еще раз
    </a>
    `;
}