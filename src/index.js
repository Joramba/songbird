import './style.scss';

const divMain = document.createElement("div"),
    buttonContainer = document.createElement("div"),
    actionContainer = document.createElement("div"),
    fieldContainer = document.createElement("div"),
    sizeContainer = document.createElement("div");

divMain.className = "main";
buttonContainer.className = "button_container";
buttonContainer.innerHTML = `   
    <button class="button start_button">Shuffle and start</button>
    <button class="button stop_button">Stop</button>
    <button class="button save_button">Save</button>
    <button class="button res_button">Results</button>
`;

actionContainer.className = 'action_container';
actionContainer.innerHTML = `
    <div class="moves">Moves: 0 </div>
    <div class="time">Time: 00:00 </div>
`;

fieldContainer.className = 'field_container';
fieldContainer.innerHTML = `
    <div class="field_area">
        <div>1</div>  <div>2</div>  <div>3</div>  <div>4</div>
        <div>5</div>  <div>6</div>  <div>7</div>  <div>8</div>
        <div>9</div>  <div>10</div> <div>11</div> <div>12</div>
        <div>13</div> <div>14</div> <div>15</div>
    </div>
`;

sizeContainer.className = 'size_container';
sizeContainer.innerHTML = `
    <div class="frame_size">4x4</div>
    <div class="sizes">Other sizes 3x3 4x4 5x5 6x6 7x7 8x8</div>
`;

divMain.appendChild(buttonContainer);
divMain.appendChild(actionContainer);
divMain.appendChild(fieldContainer);
divMain.appendChild(sizeContainer);

document.body.appendChild(divMain);

const buttons = document.querySelectorAll('.button'),
    field = document.querySelector('.field_area');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(item => {
            item.classList.remove('active');
        })
        button.classList.add('active');
    })
});


const fieldPiece = field.getElementsByTagName('div');

for (let i = 0; i < fieldPiece.length; i++) {
    fieldPiece[i].className = 'fieldpiece';
    fieldPiece[i].style.left = (i % 4 * 100) + 'px';
    fieldPiece[i].style.top = (parseInt(i / 4) * 100) + 'px';
    fieldPiece[i].style.backgroundPosition = '-' + fieldPiece[i].style.left + ' ' + '-' + fieldPiece[i].style.top;
}

const time = document.querySelector('.time'),
    start_button = document.querySelector('.start_button'),
    stop_button = document.querySelector('.stop_button');

let spaceY,
    spaceX;
    
spaceX = '300px';
spaceY = '300px';

function setTime(seconds) {
    for (let i = 0; i < 300; i++) {
        let rand = parseInt(Math.random() * 100) % 4;
        console.log(rand);
        console.log(spaceY);
        console.log(spaceX);

        if (rand == 0) {
            let temp = up(spaceX, spaceY);
            if (temp != -1) {
                swap(temp);
            }
        }

        if (rand == 1) {
            let temp = down(spaceX, spaceY);
            if (temp != -1) {
                swap(temp);
            }
        }



        if (rand == 2) {
            let temp = left(spaceX, spaceY);
            if (temp != -1) {
                swap(temp);
            }

        }


        if (rand == 3) {
            let temp = right(spaceX, spaceY);
            if (temp != -1) {
                swap(temp);
            }
        }
    }

    let timer = setInterval(function () {
        seconds++;
        let m = Math.floor(seconds / 60);
        if (m < 10) {
            m = `0` + m;
        }
        let s = seconds % 60;
        if (s < 10) {
            s = `0` + s;
        }
        time.innerHTML = `Time: ${m}:${s}`;
    }, 1000);

    stop_button.addEventListener('click', () => {
        clearInterval(timer);
    });

    start_button.addEventListener('click', () => {
        time.innerHTML = `Time: 00:00`;
        setTime(0);
    });
}

function setMove(count) {
    document.querySelector('.moves').textContent = `Moves: ${count}`;
}



function left(x, y) {
    let cordX = parseInt(x);
    let cordY = parseInt(y);

    if (cordX > 0) {
        for (var i = 0; i < fieldPiece.length; i++) {
            if (parseInt(fieldPiece[i].style.left) + 100 == cordX && parseInt(fieldPiece[i].style.top) == cordY) {
                return i;
            }
        }
    }
    else {
        return -1;
    }

}
function right(x, y) {
    var cordX = parseInt(x);
    var cordY = parseInt(y);
    if (cordX < 300) {
        for (var i = 0; i < fieldPiece.length; i++) {
            if (parseInt(fieldPiece[i].style.left) - 100 == cordX && parseInt(fieldPiece[i].style.top) == cordY) {
                return i;
            }
        }
    }
    else {
        return -1;
    }
}



function up(x, y) {
    let cordX = parseInt(x);
    let cordY = parseInt(y);
    if (cordY > 0) {
        for (let i = 0; i < fieldPiece.length; i++) {
            if (parseInt(fieldPiece[i].style.top) + 100 == cordY && parseInt(fieldPiece[i].style.left) == cordX) {
                return i;
            }
        }
    }
    else {
        return -1;
    }
}



function down(x, y) {
    let cordX = parseInt(x);
    let cordY = parseInt(y);
    if (cordY < 300) {
        for (let i = 0; i < fieldPiece.length; i++) {
            if (parseInt(fieldPiece[i].style.top) - 100 == cordY && parseInt(fieldPiece[i].style.left) == cordX) {
                return i;
            }
        }
    }

    else {
        return -1;
    }
}


function swap(position) {
    let temp = fieldPiece[position].style.top;
    fieldPiece[position].style.top = spaceY;
    spaceY = temp;
    temp = fieldPiece[position].style.left;
    fieldPiece[position].style.left = spaceX;
    spaceX = temp;
}

start_button.addEventListener('click', () => {
    setTime(0);
});

setMove(0);

