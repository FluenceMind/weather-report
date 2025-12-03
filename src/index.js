"use strict";

const state = {
    addOneButton: null,
    minusOneButton: null,
    temperatureValue: 72,
    tempdisplay: null,
};

const addtempButton = () => {
    state.temperatureValue += 1;
    state.tempdisplay.textContent = `${state.temperatureValue}`;
};

const minustempButton = () => {
    state.temperatureValue -= 1;
    state.tempdisplay.textContent = `${state.temperatureValue}`;
};

const loadControls = () => {
    state.addOneButton = document.getElementById('increase-temp-btn');
    state.minusOneButton = document.getElementById('decrease-temp-btn');
    state.tempdisplay = document.getElementById('temperature-value');
};
const registerEvents = () => {
    state.addOneButton.addEventListener('click', addtempButton);
    state.minusOneButton.addEventListener('click', minustempButton);
};

const onLoaded = () => {
    loadControls();
    registerEvents();
};


onLoaded()