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

// const city = document.querySelector('#city-input');
const cityInput = document.querySelector('#city-input');
console.log(cityInput);
const stateInput = document.querySelector('#state-input');
console.log(stateInput);
const weatherButton = document.querySelector('#weather-button');
// const state = document.querySelector('#state-input')

weatherButton.addEventListener("click", () => {

    const city = encodeURIComponent(cityInput.value).split('%20').join(' ');
    const state = encodeURIComponent(stateInput.value).split('%20').join(' ');

    // city
    //     "West%20Islip"
    // state
    //     "New%20York"

    debugger 
    fetch(`https://geocode.maps.co/search?city=${city}&state=${state}`)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            const longitude = (data[0].lon);
            const latitude = (data[0].lat);

            fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                const values = Object.values((Object.values(data))[8]); 

                let dailyArray = [];

               for (let i = 0; i < values.length; i++) {
                    dailyArray = dailyArray.concat(values[i][0]);
                }
                
                const date = dailyArray[0];
                const weathercode = dailyArray[1];
                const temp_max = dailyArray[2];
                const temp_min = dailyArray[3];
                const apparent_max = dailyArray[4];
                const apparent_min = dailyArray[5];

                // Weather codes
                const weatherCodes = [
                    { range: [0], description: 'Clear Sky' },
                    { range: [1, 2, 3], description: 'Mainly clear, partly cloudy, and overcast' },
                    { range: [45, 48], description: 'Fog and depositing rime fog' },
                    { range: [51, 53, 55], description: 'Drizzle: Light, moderate, and dense intensity' },
                    { range: [56, 57], description: 'Freezing Drizzle: Light and dense intensity' },
                    { range: [61, 63, 65], description: 'Rain: Slight, moderate and heavy intensity' },
                    { range: [66, 67], description: 'Freezing Rain: Light and heavy intensity' },
                    { range: [71, 73, 75], description: 'Snow fall: Slight, moderate, and heavy intensity' },
                    { range: [77], description: 'Snow grains' },
                    { range: [80, 81, 82], description: 'Rain showers: Slight, moderate, and violent' },
                    { range: [85, 86], description: 'Snow showers slight and heavy' },
                ];
  
                    // Find weather code description
                    const weatherCode = weatherCodes.find(({ range }) => range.includes(weathercode));
                    document.getElementById('weathercode').innerHTML = weatherCode ? weatherCode.description : '';
  
                    // Update weather data
                    document.querySelector('#date').innerHTML = date;
                    document.getElementById('temp-max').innerHTML = temp_max;
                    document.getElementById('temp-min').innerHTML = temp_min;
                    document.getElementById('apparent-max').innerHTML = apparent_max;
                    document.getElementById('apparent-min').innerHTML = apparent_min;

            })
            .catch(error => {
                console.error(error);
            });

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