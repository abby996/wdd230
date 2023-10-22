
const baseURL=" https://abby996.github.io/wdd230/";

const linksURL="https://abby996.github.io/wdd230/data/links.json";


async function getLinks(){
    const response = await fetch (linksURL) ;
    const data = await response.json();
    
    displayLinks(data);
};

getLinks();

function displayLinks(){
    const weekItem = document.createElement('li');



    let card = document.createElement('section');
    weeks.appendChild(card);  

// Loop through the data and populate the list
data.index.forEach((week) => {
    const weekItem = document.createElement("li");
    const weekTitle = document.createElement("title");
    weekTitle.textContent = `Week ${week.week}: `;
    weekItem.appendChild(weekTitle);
}
        
)}



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


   const chamberLocation = 'Haiti'; //  actual location

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


   async function getSpotlightMembers() {
    try {
        // Fetch the JSON data containing member information
        const response = await fetch('your-members-data.json'); // Replace with the correct URL or fetch method
        const data = await response.json();

        // Filter members with silver or gold membership levels
        const qualifiedMembers = data.members.filter(member => member.membershipLevel === "Silver" || member.membershipLevel === "Gold");

        // Shuffle the array to randomize the selection
        shuffleArray(qualifiedMembers);

        // Display a maximum of 3 spotlight advertisements
        const maxAds = 3;
        const spotlightAdsContainer = document.getElementById('spotlight-ads');

        for (let i = 0; i < Math.min(maxAds, qualifiedMembers.length); i++) {
            const member = qualifiedMembers[i];
            const adElement = createAdElement(member);

            spotlightAdsContainer.appendChild(adElement);
        }
    } catch (error) {
        console.error('Error fetching or processing member data:', error);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createAdElement(member) {
    // Create and customize the HTML element for the spotlight advertisement
    const adElement = document.createElement('div');
    adElement.classList.add('spotlight-ad');

    // You can customize the content of the advertisement here
    adElement.innerHTML = `
        <h3>${member.name}</h3>
        <p>Membership Level: ${member.membershipLevel}</p>
        <!-- Add other member information as needed -->
    `;

    return adElement;
}

// Call the function to get spotlight members and display advertisements
getSpotlightMembers();

// Get the banner and close button elements
const banner = document.getElementById('event-banner');
const closeBannerButton = document.getElementById('close-banner');

// Function to check if the current day is Monday, Tuesday, or Wednesday
function isDayToDisplayBanner() {
    const today = new Date().getDay();
    return today >= 1 && today <= 3; // Monday (1), Tuesday (2), Wednesday (3)
}

// Function to show the banner
function showBanner() {
    if (isDayToDisplayBanner()) {
        banner.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function() {
  // Your JavaScript code here
});


// Function to hide the banner when the close button is clicked
function closeBanner() {
    banner.style.display = 'none';
}

// Event listener for the close button
closeBannerButton.addEventListener('click', closeBanner);

// Show the banner on page load if it's a valid day
showBanner();




async function getWeatherData() {
  const apiKey = '4c5d981292429b9f6f6291be2a352bb0';  
  const chamberLocation = 'Haiti';

  try {
      // Fetch current weather data
      const currentWeatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${chamberLocation}&units=metric&appid=${apiKey}`);
      const currentWeatherData = await currentWeatherResponse.json();

      // Fetch 3-day forecast
      const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${chamberLocation}&units=metric&appid=${apiKey}`);
      const forecastData = await forecastResponse.json();

      // Update the HTML with current weather data
      document.getElementById('current-temp').textContent = `${currentWeatherData.main.temp}°C`;
      document.getElementById('description').textContent = currentWeatherData.weather[0].description;

      // Update the 3-day forecast
      const forecastDays = forecastData.list.slice(0, 3); // Assuming 3-day forecast
      const forecastContainer = document.getElementById('forecast');

      forecastDays.forEach((forecast, index) => {
          const forecastDay = forecastContainer.getElementsByClassName('forecast-day')[index];
          forecastDay.getElementsByClassName('day')[0].textContent = forecast.dt_txt;
          forecastDay.getElementsByClassName('temp')[0].textContent = `${forecast.main.temp}°C`;
          forecastDay.getElementsByClassName('description')[0].textContent = forecast.weather[0].description;
      });
  } catch (error) {
      console.error('Error fetching weather data:', error);
  }
}

// Call the function to get weather data
getWeatherData();

