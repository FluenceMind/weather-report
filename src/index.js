"use strict";

const state = {
    getRealTimeTemperatureButton: null,
    addOneButton: null,
    minusOneButton: null,
    temperatureValue: 0,
    resetButton: null,
};

const upArrowClicked = () => {
    state.temperatureValue += 1;
    state.tempDisplay.textContent = `${state.temperature-value}`;


};

const tempColor = () => {
    state.
}


const loadControls = () => {
    state.addOneButton = document.getElementById('increase-temp-btn');
    state.minusOneButton = document.getElementById('decrease-temp-btn');
    state.temperatureValue = document.getElementById('temperature-value');
};

const registerEvents