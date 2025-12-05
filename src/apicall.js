const axios = window.axios

export const findLatitudeAndLongitude = (cityName) => {
  let latitude, longitude;

  return axios.get('http://localhost:5000/location',
    {
      params : {
        q: cityName,
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

export const getWeatherTemp = (latitude, longitude) => {
    let weatherTemp;

    return axios.get('http://localhost:5000/weather',
    {
      params:{
        lat: latitude,
        lon: longitude,
      }
    })
    .then((response) => {
      let ktemp = response.data.main.temp;
      weatherTemp = (ktemp - 273.15) * (9 / 5) + 32;
      weatherTemp = Math.ceil(weatherTemp)
      console.log('success in getWeatherTemp!', weatherTemp);
      return {weatherTemp};
    })
    .catch((error) => {
      console.log('error in getWeatherTemp!');
    });
};

