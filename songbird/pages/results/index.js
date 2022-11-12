const box = document.querySelector('.box');

if (localStorage.getItem('score') == 30) {
    box.innerHTML = `
    <div class="box-message">
        Congrats, you got the maximum score :))
    </div>
    <img src="../../assets/images/result-win.png" alt="Meme result win">
    <a href='../quiz/index.html' class="btn">
        Try Again
    </a>
    `;
} else {
    box.innerHTML = `
    <div class="box-message">
        You have not scored the maximum number of points ):
    </div>
    <img src="../../assets/images/result-lose.png" alt="Meme result lose">
    <a href='../quiz/index.html' class="btn">
        Try Again
    </a>
    `;
}