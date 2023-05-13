/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("// const API_URL = 'https://api.open-meteo.com/v1/forecast';\n// const latitude = 52.52;\n// const longitude = 13.41;\n// const current_weather = true;\n// const hourly = 'temperature_2m,relativehumidity_2m,windspeed_10m';\n\n// fetch(`https://api.open-meteo.com/v1/forecast?`)\n//   .then(response => response.json())\n//   .then(data => {\n//     console.log(data);\n//   })\n//   .catch(error => {\n//     console.error(error);\n//   });\n// const city = 'West Islip';\n// const url = ``;\nconst city = document.querySelector('.city-input');\nfetch(`https://geocode.maps.co/search?city=${encodeURIComponent(city)}`).then(response => response.json()).then(data => {\n  const longitude = data[0].lon;\n  const latitude = data[0].lat;\n}).catch(error => {\n  console.error(error);\n});\n// async function presentLongAndLat(address) {\n//     const url = `https://geocode.maps.co/search?city={city}`\n//     const response = await fetch(url);\n//     const data = await response.json();\n//     console.log(data);\n// // }\n// https://geocode.maps.co/search?street=555+5th+Ave&city=New+York&state=NY&postalcode=10017&country=US\n\n// presentLongAndLat('New York');\n// Define a function to fetch weather data for a given city\n// async function fetchWeatherData(city) {\n//     // Use the open-meteo API to get the weather forecast for the city\n//     const url = `https://api.open-meteo.com/v1/forecast?place=Berlin`;\n//     const response = await fetch(url);\n//     const data = await response.json();\n//     console.log(data);  \n//     // Use the temperature data to provide clothing advice\n//     // ...\n//   }\n\n// Example usage:\n//   fetchWeatherData('Berlin');\n\n//   https://api.open-meteo.com/v1/forecast\n//   ?latitude=52.52\n//   &longitude=13.41\n//   &hourly=temperature_2m&\n//   hourly=relativehumidity_2m&\n//   hourly=dewpoint_2m&\n//   hourly=apparent_temperature&\n//   hourly=precipitation_probability\n//   &hourly=precipitation\n//   &hourly=rain\n//   &hourly=showers\n//   &hourly=snowfall\n//   &hourly=snow_depth\n//   &hourly=windspeed_10m\n//   &hourly=windspeed_80m\n//   &hourly=windspeed_120m\n//   &hourly=windspeed_180m\n//   &daily=weathercode\n//   &daily=temperature_2m_max\n//   &daily=temperature_2m_min\n//   &temperature_unit=fahrenheit\n//   &windspeed_unit=mph\n//   &precipitation_unit=inch\n//   &timeformat=unixtime\n//   &past_days=0&forecast_days=\n//   7&start_date=2023-05-27&end_date=\n//   2023-05-28&timezone=America%2\n//   FNew_York//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJjaXR5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZmV0Y2giLCJlbmNvZGVVUklDb21wb25lbnQiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImxvbmdpdHVkZSIsImxvbiIsImxhdGl0dWRlIiwibGF0IiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJwcmVwLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgQVBJX1VSTCA9ICdodHRwczovL2FwaS5vcGVuLW1ldGVvLmNvbS92MS9mb3JlY2FzdCc7XG4vLyBjb25zdCBsYXRpdHVkZSA9IDUyLjUyO1xuLy8gY29uc3QgbG9uZ2l0dWRlID0gMTMuNDE7XG4vLyBjb25zdCBjdXJyZW50X3dlYXRoZXIgPSB0cnVlO1xuLy8gY29uc3QgaG91cmx5ID0gJ3RlbXBlcmF0dXJlXzJtLHJlbGF0aXZlaHVtaWRpdHlfMm0sd2luZHNwZWVkXzEwbSc7XG5cbi8vIGZldGNoKGBodHRwczovL2FwaS5vcGVuLW1ldGVvLmNvbS92MS9mb3JlY2FzdD9gKVxuLy8gICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4vLyAgIC50aGVuKGRhdGEgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuLy8gICB9KVxuLy8gICAuY2F0Y2goZXJyb3IgPT4ge1xuLy8gICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuLy8gICB9KTtcbi8vIGNvbnN0IGNpdHkgPSAnV2VzdCBJc2xpcCc7XG4vLyBjb25zdCB1cmwgPSBgYDtcbmNvbnN0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS1pbnB1dCcpXG5mZXRjaChgaHR0cHM6Ly9nZW9jb2RlLm1hcHMuY28vc2VhcmNoP2NpdHk9JHtlbmNvZGVVUklDb21wb25lbnQoY2l0eSl9YClcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IGxvbmdpdHVkZSA9IChkYXRhWzBdLmxvbik7XG4gICAgICAgIGNvbnN0IGxhdGl0dWRlID0gKGRhdGFbMF0ubGF0KTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH0pO1xuLy8gYXN5bmMgZnVuY3Rpb24gcHJlc2VudExvbmdBbmRMYXQoYWRkcmVzcykge1xuLy8gICAgIGNvbnN0IHVybCA9IGBodHRwczovL2dlb2NvZGUubWFwcy5jby9zZWFyY2g/Y2l0eT17Y2l0eX1gXG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4vLyAgICAgY29uc29sZS5sb2coZGF0YSk7XG4vLyAvLyB9XG4vLyBodHRwczovL2dlb2NvZGUubWFwcy5jby9zZWFyY2g/c3RyZWV0PTU1NSs1dGgrQXZlJmNpdHk9TmV3K1lvcmsmc3RhdGU9TlkmcG9zdGFsY29kZT0xMDAxNyZjb3VudHJ5PVVTXG5cbi8vIHByZXNlbnRMb25nQW5kTGF0KCdOZXcgWW9yaycpO1xuLy8gRGVmaW5lIGEgZnVuY3Rpb24gdG8gZmV0Y2ggd2VhdGhlciBkYXRhIGZvciBhIGdpdmVuIGNpdHlcbi8vIGFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlckRhdGEoY2l0eSkge1xuLy8gICAgIC8vIFVzZSB0aGUgb3Blbi1tZXRlbyBBUEkgdG8gZ2V0IHRoZSB3ZWF0aGVyIGZvcmVjYXN0IGZvciB0aGUgY2l0eVxuLy8gICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5vcGVuLW1ldGVvLmNvbS92MS9mb3JlY2FzdD9wbGFjZT1CZXJsaW5gO1xuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbi8vICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpOyAgXG4vLyAgICAgLy8gVXNlIHRoZSB0ZW1wZXJhdHVyZSBkYXRhIHRvIHByb3ZpZGUgY2xvdGhpbmcgYWR2aWNlXG4vLyAgICAgLy8gLi4uXG4vLyAgIH1cbiAgXG4gIC8vIEV4YW1wbGUgdXNhZ2U6XG4vLyAgIGZldGNoV2VhdGhlckRhdGEoJ0JlcmxpbicpO1xuXG4vLyAgIGh0dHBzOi8vYXBpLm9wZW4tbWV0ZW8uY29tL3YxL2ZvcmVjYXN0XG4vLyAgID9sYXRpdHVkZT01Mi41MlxuLy8gICAmbG9uZ2l0dWRlPTEzLjQxXG4vLyAgICZob3VybHk9dGVtcGVyYXR1cmVfMm0mXG4vLyAgIGhvdXJseT1yZWxhdGl2ZWh1bWlkaXR5XzJtJlxuLy8gICBob3VybHk9ZGV3cG9pbnRfMm0mXG4vLyAgIGhvdXJseT1hcHBhcmVudF90ZW1wZXJhdHVyZSZcbi8vICAgaG91cmx5PXByZWNpcGl0YXRpb25fcHJvYmFiaWxpdHlcbi8vICAgJmhvdXJseT1wcmVjaXBpdGF0aW9uXG4vLyAgICZob3VybHk9cmFpblxuLy8gICAmaG91cmx5PXNob3dlcnNcbi8vICAgJmhvdXJseT1zbm93ZmFsbFxuLy8gICAmaG91cmx5PXNub3dfZGVwdGhcbi8vICAgJmhvdXJseT13aW5kc3BlZWRfMTBtXG4vLyAgICZob3VybHk9d2luZHNwZWVkXzgwbVxuLy8gICAmaG91cmx5PXdpbmRzcGVlZF8xMjBtXG4vLyAgICZob3VybHk9d2luZHNwZWVkXzE4MG1cbi8vICAgJmRhaWx5PXdlYXRoZXJjb2RlXG4vLyAgICZkYWlseT10ZW1wZXJhdHVyZV8ybV9tYXhcbi8vICAgJmRhaWx5PXRlbXBlcmF0dXJlXzJtX21pblxuLy8gICAmdGVtcGVyYXR1cmVfdW5pdD1mYWhyZW5oZWl0XG4vLyAgICZ3aW5kc3BlZWRfdW5pdD1tcGhcbi8vICAgJnByZWNpcGl0YXRpb25fdW5pdD1pbmNoXG4vLyAgICZ0aW1lZm9ybWF0PXVuaXh0aW1lXG4vLyAgICZwYXN0X2RheXM9MCZmb3JlY2FzdF9kYXlzPVxuLy8gICA3JnN0YXJ0X2RhdGU9MjAyMy0wNS0yNyZlbmRfZGF0ZT1cbi8vICAgMjAyMy0wNS0yOCZ0aW1lem9uZT1BbWVyaWNhJTJcbi8vICAgRk5ld19Zb3JrIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxhQUFhLENBQUM7QUFDbERDLEtBQUssQ0FBRSx1Q0FBc0NDLGtCQUFrQixDQUFDSixJQUFJLENBQUUsRUFBQyxDQUFDLENBQ25FSyxJQUFJLENBQUNDLFFBQVEsSUFBSUEsUUFBUSxDQUFDQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ2pDRixJQUFJLENBQUNHLElBQUksSUFBSTtFQUNWLE1BQU1DLFNBQVMsR0FBSUQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDRSxHQUFJO0VBQy9CLE1BQU1DLFFBQVEsR0FBSUgsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDSSxHQUFJO0FBQ2xDLENBQUMsQ0FBQyxDQUNHQyxLQUFLLENBQUNDLEtBQUssSUFBSTtFQUNaQyxPQUFPLENBQUNELEtBQUssQ0FBQ0EsS0FBSyxDQUFDO0FBQ3hCLENBQUMsQ0FBQztBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVycHJlcC8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;