import birdsData from "../../birdsData.js";

const answers = document.querySelector('.answers-group');
    
function getAnswers(i) {
    birdsData[i].forEach(item => {
        answers.innerHTML += `
        <li class="answers-group-item">
            <span class="li-btn"></span>
            ${item.name}
        </li>
        `;
    })
}

getAnswers(0);
