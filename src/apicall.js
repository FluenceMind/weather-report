const axios = require('axios')
const dotEnv = require('dotenv');

dotEnv.config();
const LOCATIONIQ_KEY = process.env.LOCATION_API_KEY;
const WEATHER_KEY = process.env.WEATHER_API_KEY;

const findLatitudeAndLongitude = (cityName) => {
  let latitude, longitude;

  return axios.get('https://us1.locationiq.com/v1/search.php',
    {
      params : {
        key: LOCATIONIQ_KEY,
        q: cityName,
        format: 'json'
      }
    })
    .then((response) => {
      latitude = response.data[0].lat;
      longitude = response.data[0].lon;
      console.log('success in findLatitudeAndLongitude!', latitude, longitude);

      return{latitude, longitude};
    })
    .catch((error) => {
      console.log('error in findLatitudeAndLongitude!');
    });
};

const getWeatherTemp = (latitude, longitude) => {
    let weatherStatus;

    return axios.get('https://api.openweathermap.org/data/3.0/onecall',
    {
      params:{
        lat: latitude,
        lon: longitude,
        appid: WEATHER_KEY,
      }
    })
    .then((response) => {
      ktemp = response.data.current.temp;
      weatherTemp = (ktemp - 273.15) * (9 / 5) + 32;
      console.log('success in getWeatherTemp!', weatherTemp);
      return {weatherTemp};
    })
    .catch((error) => {
      console.log('error in getWeatherTemp!');
    });
};


