import './style.scss';

const divMain = document.createElement("div"),
    buttonContainer = document.createElement("div"),
    actionContainer = document.createElement("div"),
    fieldContainer = document.createElement("div"),
    sizeContainer = document.createElement("div");

divMain.className = "main";
buttonContainer.className = "button_container";
buttonContainer.innerHTML = `   
    <button class="button">Shuffle and start</button>
    <button class="button">Stop</button>
    <button class="button">Save</button>
    <button class="button">Results</button>
`;

actionContainer.className = 'action_container';
fieldContainer.className = 'field_container';
sizeContainer.className = 'size_container';

divMain.appendChild(buttonContainer);
divMain.appendChild(actionContainer);
divMain.appendChild(fieldContainer);
divMain.appendChild(sizeContainer);
document.body.appendChild(divMain)