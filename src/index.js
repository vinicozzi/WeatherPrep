// const API_URL = 'https://api.open-meteo.com/v1/forecast';
// const latitude = 52.52;
// const longitude = 13.41;
// const current_weather = true;
// const hourly = 'temperature_2m,relativehumidity_2m,windspeed_10m';

// fetch(`https://api.open-meteo.com/v1/forecast?`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error(error);
//   });
// const city = 'West Islip';
// const url = ``;

const city = document.querySelector('#city-input');
const weatherButton = document.querySelector('#weather-button');

weatherButton.addEventListener("click", () => {

    const cityValue = encodeURIComponent(city.value);
    fetch(`https://geocode.maps.co/search?city=${cityValue}`)
        .then(response => response.json())
        .then(data => {
            const longitude = (data[0].lon);
            const latitude = (data[0].lat);

            fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
            // console.log(`Longitude: ${longitude}, Latitude: ${latitude}`);
        })
        .catch(error => {
            console.error(error);
        });

  

});

// async function presentLongAndLat(address) {
//     const url = `https://geocode.maps.co/search?city={city}`
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
// // }
// https://geocode.maps.co/search?street=555+5th+Ave&city=New+York&state=NY&postalcode=10017&country=US

// presentLongAndLat('New York');
// Define a function to fetch weather data for a given city
// async function fetchWeatherData(city) {
//     // Use the open-meteo API to get the weather forecast for the city
//     const url = `https://api.open-meteo.com/v1/forecast?place=Berlin`;
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);  
//     // Use the temperature data to provide clothing advice
//     // ...
//   }
  
  // Example usage:
//   fetchWeatherData('Berlin');

//   https://api.open-meteo.com/v1/forecast
//   ?latitude=52.52
//   &longitude=13.41
//   &hourly=temperature_2m&
//   hourly=relativehumidity_2m&
//   hourly=dewpoint_2m&
//   hourly=apparent_temperature&
//   hourly=precipitation_probability
//   &hourly=precipitation
//   &hourly=rain
//   &hourly=showers
//   &hourly=snowfall
//   &hourly=snow_depth
//   &hourly=windspeed_10m
//   &hourly=windspeed_80m
//   &hourly=windspeed_120m
//   &hourly=windspeed_180m
//   &daily=weathercode
//   &daily=temperature_2m_max
//   &daily=temperature_2m_min
//   &temperature_unit=fahrenheit
//   &windspeed_unit=mph
//   &precipitation_unit=inch
//   &timeformat=unixtime
//   &past_days=0&forecast_days=
//   7&start_date=2023-05-27&end_date=
//   2023-05-28&timezone=America%2
//   FNew_York