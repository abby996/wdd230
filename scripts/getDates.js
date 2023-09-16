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
