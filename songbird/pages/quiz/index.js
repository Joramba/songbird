import birdsDataRu from "../../birdsDataRu.js";
import birdsDataEn from "../../birdDataEn.js"

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

// let audio = new Audio(winBird.audio);


instruction.style.display = 'flex';
cardBody.style.display = 'none';
cardDescription.style.display = 'none';

const winSound = new Audio('../../assets/sound/winSound.mp3');
const loseSound = new Audio('../../assets/sound/loseSound.mp3');

winSound.volume = 0.03;
loseSound.volume = 0.03;

function randomBird(i) {
    return birdsDataRu[i][Math.floor(Math.random() * (5 - 1 + 1)) + 1];
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

    winBird = randomBird(i);
    createRandomCard();
    instruction.style.display = 'flex';
    cardBody.style.display = 'none';
    cardDescription.style.display = 'none';

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
                            <audio class="audio" src="${winBird.audio}" preload="metadata"></audio>
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
                                        <div class="time-start">00:00</div>
                                        <div class="time-end"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
    `;

    const audio = document.querySelector('.audio');
    const playBtn = document.querySelector('.play-button');
    const timebar = document.querySelector('.timebar-bar');
    const timebarCircle = document.querySelector('.timebar-circle');

    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playBtn.innerHTML = `
            <svg viewBox="0 0 47.607 47.607"><path fill="#00bc8c" d="M17.991 40.976a6.631 6.631 0 01-13.262 0V6.631a6.631 6.631 0 0113.262 0v34.345zM42.877 40.976a6.631 6.631 0 01-13.262 0V6.631a6.631 6.631 0 0113.262 0v34.345z"></path></svg>
            `;
        } else {
            audio.pause();
            playBtn.innerHTML = `                                    
            <svg viewBox="-200 0 1200 1000">
                <path fill="#00bc8c"
                    d="M96.51 11.97c-31.23 8.05-53.26 32.76-63.42 71.27-3.45 12.84-3.64 29.7-3.64 416.71s.19 403.87 3.64 416.71c16.09 60.74 61.69 86.03 120.9 67.25 9-2.87 53.65-25.1 116.49-58.24 56.14-29.51 221.29-116.3 367.28-192.93 145.99-76.64 271.29-143.31 278.38-148.1 39.28-25.68 59.59-63.04 53.26-97.52-4.79-26.63-24.33-53.07-52.88-71.65C892 399.37 172.58 22.32 154.95 16.38c-18.97-6.33-43.3-8.24-58.44-4.41z">
                </path>
            </svg>`;
        }
    })

    audio.onloadedmetadata = function () {
        let m = Math.floor(audio.duration / 60, 1);
        if (m < 10) {
            m = `0${m}`
        }

        let s = Math.round(audio.duration % 60);
        if (s < 10) {
            s = `0${s}`
        }

        document.querySelector('.time-end').textContent = `${m}:${s}`
    };

    timebar.addEventListener("click", (e) => {
        const timelineWidth = window.getComputedStyle(timebar).width;
        const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
        audio.currentTime = timeToSeek;
        progress = audio.currentTime / audio.duration * 100 + "%";
        timebarCircle.style.left = progress;
        timebar.style.background = `linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) ${progress}, rgb(115, 115, 115) ${progress}, rgb(115, 115, 115) 100%)`;
    }, false);

    let progress;

    setInterval(() => {
        progress = audio.currentTime / audio.duration * 100 + "%";
        timebarCircle.style.left = progress;
        timebar.style.background = `linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) ${progress}, rgb(115, 115, 115) ${progress}, rgb(115, 115, 115) 100%)`;
    }, 500);
}

createRandomCard();


let cardFunction = (e) => {
    const answersItems = document.querySelectorAll('.answers-group-item');
    instruction.style.display = 'none';
    cardBody.style.display = 'flex';
    cardDescription.style.display = 'flex';

    birdsDataRu[i].forEach(bird => {
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
                            <audio class="audio" src="${bird.audio}" preload="metadata"></audio>
                            <div class="controls">
                                <div class="play-button">
                                    <svg viewBox="-200 0 1200 1000">
                                        <path fill="#00bc8c"
                                            d="M96.51 11.97c-31.23 8.05-53.26 32.76-63.42 71.27-3.45 12.84-3.64 29.7-3.64 416.71s.19 403.87 3.64 416.71c16.09 60.74 61.69 86.03 120.9 67.25 9-2.87 53.65-25.1 116.49-58.24 56.14-29.51 221.29-116.3 367.28-192.93 145.99-76.64 271.29-143.31 278.38-148.1 39.28-25.68 59.59-63.04 53.26-97.52-4.79-26.63-24.33-53.07-52.88-71.65C892 399.37 172.58 22.32 154.95 16.38c-18.97-6.33-43.3-8.24-58.44-4.41z">
                                        </path>
                                    </svg>
                                </div>
                                <div class="timebar_card">
                                    <div class="card-bar">

                                    </div>
                                    <div class="card-circle">

                                    </div>
                                    <div class="timebar-info">
                                        <div class="time-start">00:00</div>
                                        <div class="time-end"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `;
            const audio = document.querySelectorAll('.audio')[1];
            const playBtn = document.querySelectorAll('.play-button')[1];

            const timebar = document.querySelector('.card-bar');
            const timebarCircle = document.querySelector('.card-circle');
            console.log(playBtn);

            playBtn.addEventListener('click', () => {
                if (audio.paused) {
                    audio.play();
                    playBtn.innerHTML = `
                            <svg viewBox="0 0 47.607 47.607"><path fill="#00bc8c" d="M17.991 40.976a6.631 6.631 0 01-13.262 0V6.631a6.631 6.631 0 0113.262 0v34.345zM42.877 40.976a6.631 6.631 0 01-13.262 0V6.631a6.631 6.631 0 0113.262 0v34.345z"></path></svg>
                            `;
                } else {
                    audio.pause();
                    playBtn.innerHTML = `                                    
                            <svg viewBox="-200 0 1200 1000">
                                <path fill="#00bc8c"
                                    d="M96.51 11.97c-31.23 8.05-53.26 32.76-63.42 71.27-3.45 12.84-3.64 29.7-3.64 416.71s.19 403.87 3.64 416.71c16.09 60.74 61.69 86.03 120.9 67.25 9-2.87 53.65-25.1 116.49-58.24 56.14-29.51 221.29-116.3 367.28-192.93 145.99-76.64 271.29-143.31 278.38-148.1 39.28-25.68 59.59-63.04 53.26-97.52-4.79-26.63-24.33-53.07-52.88-71.65C892 399.37 172.58 22.32 154.95 16.38c-18.97-6.33-43.3-8.24-58.44-4.41z">
                                </path>
                            </svg>`;
                }
            })

            timebar.addEventListener("click", (e) => {
                const timelineWidth = window.getComputedStyle(timebar).width;
                const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
                audio.currentTime = timeToSeek;
                progress = audio.currentTime / audio.duration * 100 + "%";
                timebarCircle.style.left = progress;
                timebar.style.background = `linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) ${progress}, rgb(115, 115, 115) ${progress}, rgb(115, 115, 115) 100%)`;
            }, false);

            let progress;

            setInterval(() => {
                progress = audio.currentTime / audio.duration * 100 + "%";
                timebarCircle.style.left = progress;
                timebar.style.background = `linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) ${progress}, rgb(115, 115, 115) ${progress}, rgb(115, 115, 115) 100%)`;
            }, 500);

            audio.onloadedmetadata = function () {
                let m = Math.floor(audio.duration / 60, 1);
                if (m < 10) {
                    m = `0${m}`
                }

                let s = Math.round(audio.duration % 60);
                if (s < 10) {
                    s = `0${s}`
                }

                document.querySelectorAll('.time-end')[1].textContent = `${m}:${s}`
            };

            cardDescription.innerHTML = `
                 ${bird.description}
            `;

            if (winBird.name == bird.name) {
                sum += s;
                score.textContent = sum;

                winSound.currentTime = 0
                winSound.play();

                e.target.classList.add('success')
                answersItems.forEach(elem => {
                    elem.removeEventListener('click', cardFunction)
                })

                randomBirdCard.innerHTML = `
                <img src="${bird.image}" alt="Random Bird">
                <div>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <h3>${bird.name}</h3>
                        </li>
                        <li class="list-group-item">
                            <div class="audio-player">
                                <audio class="audio" src="${winBird.audio}" preload="metadata"></audio>
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
                                            <div class="time-start">00:00</div>
                                            <div class="time-end"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                `;

                const audio = document.querySelectorAll('.audio')[0];
                const playBtn = document.querySelectorAll('.play-button')[0];
                const timebar = document.querySelector('.timebar-bar');
                const timebarCircle = document.querySelector('.timebar-circle');
            
                playBtn.addEventListener('click', () => {
                    if (audio.paused) {
                        audio.play();
                        playBtn.innerHTML = `
                        <svg viewBox="0 0 47.607 47.607"><path fill="#00bc8c" d="M17.991 40.976a6.631 6.631 0 01-13.262 0V6.631a6.631 6.631 0 0113.262 0v34.345zM42.877 40.976a6.631 6.631 0 01-13.262 0V6.631a6.631 6.631 0 0113.262 0v34.345z"></path></svg>
                        `;
                    } else {
                        audio.pause();
                        playBtn.innerHTML = `                                    
                        <svg viewBox="-200 0 1200 1000">
                            <path fill="#00bc8c"
                                d="M96.51 11.97c-31.23 8.05-53.26 32.76-63.42 71.27-3.45 12.84-3.64 29.7-3.64 416.71s.19 403.87 3.64 416.71c16.09 60.74 61.69 86.03 120.9 67.25 9-2.87 53.65-25.1 116.49-58.24 56.14-29.51 221.29-116.3 367.28-192.93 145.99-76.64 271.29-143.31 278.38-148.1 39.28-25.68 59.59-63.04 53.26-97.52-4.79-26.63-24.33-53.07-52.88-71.65C892 399.37 172.58 22.32 154.95 16.38c-18.97-6.33-43.3-8.24-58.44-4.41z">
                            </path>
                        </svg>`;
                    }
                })
            
                audio.onloadedmetadata = function () {
                    let m = Math.floor(audio.duration / 60, 1);
                    if (m < 10) {
                        m = `0${m}`
                    }
            
                    let s = Math.round(audio.duration % 60);
                    if (s < 10) {
                        s = `0${s}`
                    }
            
                    document.querySelector('.time-end').textContent = `${m}:${s}`
                };
            
                timebar.addEventListener("click", (e) => {
                    const timelineWidth = window.getComputedStyle(timebar).width;
                    const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
                    audio.currentTime = timeToSeek;
                    progress = audio.currentTime / audio.duration * 100 + "%";
                    timebarCircle.style.left = progress;
                    timebar.style.background = `linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) ${progress}, rgb(115, 115, 115) ${progress}, rgb(115, 115, 115) 100%)`;
                }, false);
            
                let progress;
            
                setInterval(() => {
                    progress = audio.currentTime / audio.duration * 100 + "%";
                    timebarCircle.style.left = progress;
                    timebar.style.background = `linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) ${progress}, rgb(115, 115, 115) ${progress}, rgb(115, 115, 115) 100%)`;
                }, 500);
                
                nextLvlBtn.classList.add('btn-next');

                nextLvlBtn.addEventListener('click', nextSlide);
            } else {
                e.target.classList.add('error');
                s--;
                e.target.removeEventListener('click', cardFunction);
                winSound.pause();
                loseSound.currentTime = 0;
                loseSound.play();

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
    birdsDataRu[i].forEach(item => {
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