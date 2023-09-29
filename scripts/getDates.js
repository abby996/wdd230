// Get the current year
var currentYear = new Date().getFullYear();

// Set the current year in the "currentYear" span
document.getElementById('currentYear').textContent = currentYear;

// Function to format the last modified date
function formatDate(date) {
    const options = { year: 'numeric', month: 'numeric' ,day:'numeric' , hour:'numeric',minute:'numeric', second:'numeric'};
    return date.toLocaleDateString(undefined, options);
}

// Get the last modified date and set it in the "lastModified" span
let oLastModif = new Date(document.lastModified);
document.getElementById('lastModified').textContent = formatDate(oLastModif);

//temperature

function afficherTemperature() {
    const temperatureCelsius = 25; // Remplacez cette valeur par la température en degrés Celsius que vous avez
    const temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;
    const soleilEmoji = "\u{1F31E}";
    const temperatureOutput = document.getElementById("temperatureOutput");
    temperatureOutput.textContent = ` : ${temperatureFahrenheit}°F ${soleilEmoji} - Sunshine`;
}

document.addEventListener("DOMContentLoaded", function () {
    afficherTemperature();
    
});






// Navigation menu

const hamButton = document.querySelector('#menu');

const navigation = document.querySelector('.navigation');
const main = document.querySelector("main");

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');

    
        if (modeButton.textContent.includes("☰")) {
            main.style.background = "#000";
            main.style.color = "#fff";
            modeButton.textContent = "❎";
        } else {
            main.style.background = "#eee";
            main.style.color = "#000";
            modeButton.textContent = "☰";
        }
    });
;








