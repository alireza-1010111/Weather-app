import { getWeekDay } from "./utils/customeDate.js";
import getWeatherData from "./utils/httpReq.js";
import { showModal, removeModal } from "./utils/modal.js";

const searchInput = document.querySelector("input");
const searchButton = document.querySelector("button");
const weatherContainer = document.getElementById("weather");
const loader = document.getElementById("loader");
const locationIcon = document.getElementById("location");
const forecastContainer = document.getElementById("forecast");
const modalButton = document.getElementById("modal-button");

const toggleLoader = (show) => {
  loader.style.display = show ? "inline-block" : "none";
};

const renderCurrentWeather = (data) => {
  if (!data) return;

  const weatherJSX = `
    <h1>${data.name}, ${data.sys.country}</h1>
    <div id="main">
       <img alt="weather icon" src="http://openweathermap.org/img/w/${
         data.weather[0].icon
       }.png" />
       <span>${data.weather[0].main}</span>
     <p>${Math.round(data.main.temp)}℃</p>
    </div> 
    <div id="info">
       <p>Humidity: <span>${data.main.humidity} %</span></p>
       <p>Wind Speed: <span>${data.wind.speed} m/s</span></p>
    </div>
  `;

  weatherContainer.innerHTML = weatherJSX;
};

const renderForecastWeather = (data) => {
  if (!data) return;

  forecastContainer.innerHTML = "";
  data = data.list.filter((obj) => obj.dt_txt.endsWith("12:00:00"));
  data.forEach((i) => {
    const forecastJSX = `
       <div>
           <img alt="weather icon" src="http://openweathermap.org/img/w/${
             i.weather[0].icon
           }.png" />
           <h3>${getWeekDay(i.dt)}</h3>
           <p>${Math.round(i.main.temp)} ℃</p>
           <span>${i.weather[0].main}</span>
       </div>
    `;
    forecastContainer.innerHTML += forecastJSX;
  });
};

const searchHandler = async () => {
  const cityName = searchInput.value;
  if (!cityName) {
    showModal("Please enter city name!");
    return;
  }

  try {
    toggleLoader(true);
    const currentData = await getWeatherData("current", cityName);
    renderCurrentWeather(currentData);
    const forecastData = await getWeatherData("forecast", cityName);
    renderForecastWeather(forecastData);
  } catch (error) {
    console.log(error);
  } finally {
    toggleLoader(false);
  }
};

const positionCallback = async (position) => {
  try {
    toggleLoader(true);
    const currentData = await getWeatherData("current", position.coords);
    renderCurrentWeather(currentData);
    const forecastData = await getWeatherData("forecast", position.coords);
    renderForecastWeather(forecastData);
  } catch (error) {
    console.log(error);
  } finally {
    toggleLoader(false);
  }
};

const errorCallback = (error) => {
  showModal(error.message);
};

const locationHandler = () => {
  if (navigator.geolocation) {
    try {
      toggleLoader(true);
      navigator.geolocation.getCurrentPosition(positionCallback, errorCallback);
    } catch (error) {
      console.log(error);
    } finally {
      toggleLoader(false);
    }
  } else {
    showModal("Your browser does not support geolocation");
  }
};

const initHandler = async () => {
  try {
    toggleLoader(true);
    const currentData = await getWeatherData("current", "semnan");
    renderCurrentWeather(currentData);
    const forecastData = await getWeatherData("forecast", "semnan");
    renderForecastWeather(forecastData);
  } catch (error) {
    console.log(error);
  } finally {
    toggleLoader(false);
  }
};

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchHandler();
  }
});
searchButton.addEventListener("click", searchHandler);
locationIcon.addEventListener("click", locationHandler);
modalButton.addEventListener("click", removeModal);
document.addEventListener("DOMContentLoaded", initHandler);
