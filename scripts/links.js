
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
    cards.appendChild(card);  

// Loop through the data and populate the list
data.index.forEach((week) => {
    const weekItem = document.createElement("li");
    const weekTitle = document.createElement("strong");
    weekTitle.textContent = `Week ${week.week}: `;
    weekItem.appendChild(weekTitle);
}
        
)}


  