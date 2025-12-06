/*import {
  findLatitudeAndLongitude,
  getWeatherTemp,
} from '../src/apicall.js';
*/


const state = {
    addOneButton: null,
    minusOneButton: null,
    realTimeButton: null,
    tempValue: 0,
    tempDisplay: null,
    landscapeDisplay: null,
    cityNameInput: null,
    headerCityName: null,
    skySelect: null,
    skyDisplay: null,
};


const addtempButton = () => {
    state.tempValue += 1;
    state.tempDisplay.textContent = `${state.tempValue}`;
    tempValueColorPatternChange();
};

const minustempButton = () => {
    state.tempValue -= 1;
    state.tempDisplay.textContent = `${state.tempValue}`;
    tempValueColorPatternChange();
};

const tempValueColorPatternChange = () => {
    if (state.tempValue >= 80) {
        state.tempDisplay.style.color = 'red';
        state.landscapeDisplay.textContent = `🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂`;
    } else if (state.tempValue >= 70 && state.tempValue <= 79) {
        state.tempDisplay.style.color = 'orange';
        state.landscapeDisplay.textContent = `"🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"`;
    } else if (state.tempValue >= 60 && state.tempValue <= 69) {
        state.tempDisplay.style.color = 'yellow';
        state.landscapeDisplay.textContent = `"🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"` ;
    } else if (state.tempValue >= 50 && state.tempValue <= 59) {
        state.tempDisplay.style.color = 'green';
        state.landscapeDisplay.textContent = `"🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"`;
    } else if (state.tempValue <= 49) {
        state.tempDisplay.style.color = 'teal';
        state.landscapeDisplay.textContent = `"🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"`;
    }
};

const updateCityName = () => {
    const newCityName = state.cityNameInput.value;
    state.headerCityName.textContent = newCityName;
};

const updateSky = () => {
    const skyChoice = state.skySelect.value;

    if (skyChoice === 'Sunny') {
        state.skyDisplay.textContent = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';
    } else if (skyChoice === 'Cloudy') {
        state.skyDisplay.textContent = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
    } else if (skyChoice === 'Rainy') {
        state.skyDisplay.textContent = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
    } else if (skyChoice === 'Snowy') {
        state.skyDisplay.textContent = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
    }
};

const realTimeWeatherTemp = () => {
    findLatitudeAndLongitude(state.cityNameInput.value)
      .then(({latitude, longitude}) => getWeatherTemp(latitude,longitude))
      .then(({weatherTemp})=> {
        state.tempValue = weatherTemp;
        state.tempDisplay.textContent = `${state.tempValue}`;
        tempValueColorPatternChange();
      }).catch((error) => {
        console.log('error');
      });
};

const loadControls = () => {
    state.addOneButton = document.getElementById('increaseTempControl');
    state.minusOneButton = document.getElementById('decreaseTempControl');
    state.tempDisplay = document.getElementById('tempValue');
    state.landscapeDisplay = document.getElementById('landscape');
    state.cityNameInput = document.getElementById('cityNameInput');
    state.headerCityName = document.getElementById('headerCityName');
    state.realTimeButton = document.getElementById('currentTempButton');
    state.skySelect = document.getElementById('skySelect');
    state.skyDisplay = document.getElementById('sky');
};
const registerEvents = () => {
    state.addOneButton.addEventListener('click', addtempButton);
    state.minusOneButton.addEventListener('click', minustempButton);
    state.realTimeButton.addEventListener('click', realTimeWeatherTemp);
    state.cityNameInput.addEventListener('input', updateCityName);
    state.skySelect.addEventListener('change', updateSky);
};

const onLoaded = () => {
    loadControls();
    registerEvents();
    updateCityName();
    updateSky();
};


onLoaded();