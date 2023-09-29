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












