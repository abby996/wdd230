// Specify the latitude and longitude for Trier, Germany
const lat = 49.7592;     
 const lon = 6.6417; 

// Your API key from OpenWeatherMap
const apiKey = '4c5d981292429b9f6f6291be2a352bb0'; 

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



const chamberLocation = 'chamber-location'; // Replace with the actual location

// Function to fetch weather data
async function getWeatherData() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=df7ad1a7e0a2e62f12490fb9d6461e51`);
        const data = await response.json();

        // Update current temperature and description
        document.getElementById('current-temp').textContent = `${data.main.temp}°C`;
        document.getElementById('description').textContent = data.weather[0].description;

        // Fetch 3-day forecast
        const forecastResponse = await fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=49.75&lon=6.64&appid=df7ad1a7e0a2e62f12490fb9d6461e51`);
        const forecastData = await forecastResponse.json();

        // Update the 3-day forecast
        const forecast = forecastData.list.slice(0, 8); // Assuming 3-hour increments
        const forecastContainer = document.getElementById('forecast');

        forecast.forEach((item, index) => {
            const forecastDay = forecastContainer.getElementsByClassName('forecast-day')[index];
            forecastDay.getElementsByClassName('day')[0].textContent = item.dt_txt;
            forecastDay.getElementsByClassName('temp')[0].textContent = `${item.main.temp}°C`;
            forecastDay.getElementsByClassName('description')[0].textContent = item.weather[0].description;
        });
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Call the function to get weather data
getWeatherData();


