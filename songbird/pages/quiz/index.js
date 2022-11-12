import birdsData from "../../birdsData.js";

const answers = document.querySelector('.answers-group'),
    pageItem = document.querySelectorAll('.page-item'),
    instruction = document.querySelector('.instruction'),
    randomBirdCard = document.querySelector('.random-bird'),
    cardBody = document.querySelector('.card-body'),
    cardDescription = document.querySelector('.card-description'),
    score = document.querySelector('.score'),
    nextLvlBtn = document.querySelector('.btn');

let winBird = randomBird(0),
    sum = 0,
    i = 0;


instruction.style.display = 'flex';
cardBody.style.display = 'none';
cardDescription.style.display = 'none';


function randomBird(i) {
    return birdsData[i][Math.floor(Math.random() * (5 - 1 + 1)) + 1];
}

let s = 5;

const nextSlide = () => {
    i++;

    if (i <= 5) {
        pageItem[i].classList.add('active');
    } else {
        localStorage.setItem('score', sum);
        window.location.href = '../results/index.html';
    }


    createRandomCard();
    instruction.style.display = 'flex';
    cardBody.style.display = 'none';
    cardDescription.style.display = 'none';
    winBird = randomBird(i);
    getAnswers(i);
}

function createRandomCard() {
    randomBirdCard.innerHTML = `
    <img src="../../assets/images/random-bird.jpg" alt="Random Bird">
            <div>
                <ul class="list-group">
                    <li class="list-group-item">
                        <h3>******</h3>
                    </li>
                    <li class="list-group-item">
                        <div class="audio-player">
                            <div class="controls">
                                <div class="play-button">
                                    <svg viewBox="-200 0 1200 1000">
                                        <path fill="#00bc8c"
                                            d="M96.51 11.97c-31.23 8.05-53.26 32.76-63.42 71.27-3.45 12.84-3.64 29.7-3.64 416.71s.19 403.87 3.64 416.71c16.09 60.74 61.69 86.03 120.9 67.25 9-2.87 53.65-25.1 116.49-58.24 56.14-29.51 221.29-116.3 367.28-192.93 145.99-76.64 271.29-143.31 278.38-148.1 39.28-25.68 59.59-63.04 53.26-97.52-4.79-26.63-24.33-53.07-52.88-71.65C892 399.37 172.58 22.32 154.95 16.38c-18.97-6.33-43.3-8.24-58.44-4.41z">
                                        </path>
                                    </svg>
                                </div>
                                <div class="timebar">
                                    <div class="timebar-bar">

                                    </div>
                                    <div class="timebar-circle">

                                    </div>
                                    <div class="timebar-info">
                                        <div>00:00</div>
                                        <div>02:03</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
    `;
}

createRandomCard();


let cardFunction = (e) => {
    const answersItems = document.querySelectorAll('.answers-group-item');

    instruction.style.display = 'none';
    cardBody.style.display = 'flex';
    cardDescription.style.display = 'flex';

    birdsData[i].forEach(bird => {
        if (bird.name == e.target.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim()) {
            cardBody.innerHTML = `
                <img src=${bird.image} alt="Bird">
                <div class="card-body-info">
                    <div class="card-body-name">
                        <h4>${bird.name}</h4>
                    </div>
                    <div class="card-body-species">
                        <span>${bird.species}</span>
                    </div>
                    <div class="card-body-audio">
                        <div class="audio-player">
                            <div class="controls">
                                <div class="play-button">
                                    <svg viewBox="-200 0 1200 1000">
                                        <path fill="#00bc8c"
                                            d="M96.51 11.97c-31.23 8.05-53.26 32.76-63.42 71.27-3.45 12.84-3.64 29.7-3.64 416.71s.19 403.87 3.64 416.71c16.09 60.74 61.69 86.03 120.9 67.25 9-2.87 53.65-25.1 116.49-58.24 56.14-29.51 221.29-116.3 367.28-192.93 145.99-76.64 271.29-143.31 278.38-148.1 39.28-25.68 59.59-63.04 53.26-97.52-4.79-26.63-24.33-53.07-52.88-71.65C892 399.37 172.58 22.32 154.95 16.38c-18.97-6.33-43.3-8.24-58.44-4.41z">
                                        </path>
                                    </svg>
                                </div>
                                <div class="timebar">
                                    <div class="card-bar">

                                    </div>
                                    <div class="timebar-circle">

                                    </div>
                                    <div class="timebar-info">
                                        <div>00:00</div>
                                        <div>02:03</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `;

            cardDescription.innerHTML = `
                 ${bird.description}
            `;

            if (winBird.name == bird.name) {
                sum += s;
                score.textContent = sum;

                e.target.classList.add('success')
                answersItems.forEach(elem => {
                    elem.removeEventListener('click', cardFunction)
                })

                randomBirdCard.innerHTML = `
                    <img src=${bird.image} alt="Random Bird">
                    <div>
                        <ul class="list-group">
                            <li class="list-group-item">
                                <h3>${bird.name}</h3>
                            </li>
                            <li class="list-group-item">
                                <div class="audio-player">
                                    <div class="controls">
                                        <div class="play-button">
                                            <svg viewBox="-200 0 1200 1000">
                                                <path fill="#00bc8c"
                                                    d="M96.51 11.97c-31.23 8.05-53.26 32.76-63.42 71.27-3.45 12.84-3.64 29.7-3.64 416.71s.19 403.87 3.64 416.71c16.09 60.74 61.69 86.03 120.9 67.25 9-2.87 53.65-25.1 116.49-58.24 56.14-29.51 221.29-116.3 367.28-192.93 145.99-76.64 271.29-143.31 278.38-148.1 39.28-25.68 59.59-63.04 53.26-97.52-4.79-26.63-24.33-53.07-52.88-71.65C892 399.37 172.58 22.32 154.95 16.38c-18.97-6.33-43.3-8.24-58.44-4.41z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div class="timebar">
                                            <div class="timebar-bar">

                                            </div>
                                            <div class="timebar-circle">

                                            </div>
                                            <div class="timebar-info">
                                                <div>00:00</div>
                                                <div>02:03</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                `;

                nextLvlBtn.classList.add('btn-next');

                nextLvlBtn.addEventListener('click', nextSlide);
            } else {
                e.target.classList.add('error');
                s--;
                e.target.removeEventListener('click', cardFunction);
                console.log(s);
            }
        }
    })

}

function getAnswers(i) {
    pageItem.forEach(item => {
        item.classList.remove('active');
    })

    if (i <= 5) {
        pageItem[i].classList.add('active');
    }

    nextLvlBtn.classList.remove('btn-next');
    nextLvlBtn.removeEventListener('click', nextSlide);

    s = 5;
    console.log(sum);
    console.log(winBird);

    answers.innerHTML = ``;
    birdsData[i].forEach(item => {
        answers.innerHTML += `
        <li class="answers-group-item">
            <span class="li-btn"></span>
            ${item.name}
        </li>
        `;
    })

    const answersItems = document.querySelectorAll('.answers-group-item');
    answersItems.forEach(item => {
        item.addEventListener('click', cardFunction)
    })
}


getAnswers(i);




