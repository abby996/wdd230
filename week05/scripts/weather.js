// Specify the latitude and longitude for Trier, Germany
const lat = 49.7592; // Replace with the actual latitude
const lon = 6.6417; // Replace with the actual longitude

// Your API key from OpenWeatherMap
const apiKey = '4c5d981292429b9f6f6291be2a352bb0'; // Replace with your actual API key

// Define the query string
const queryString = `?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

// Define the API URL with the query string
const url = 'https://api.openweathermap.org/data/2.5/weather' + queryString;

// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data); // Call the displayResults function with the data
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
apiFetch();

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}
