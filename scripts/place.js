// Current Year
const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

// Last Modified
const ModifiedDate = new Date(document.lastModified);

let options = {
	weekday: "long",
	year: "numeric",
	month: "long",
	day: "numeric",
	hour: "numeric",
	minute: "2-digit",
	hour12: true
};

let formatted = ModifiedDate.toLocaleString("en-Us", options);
document.getElementById("lastmodified").textContent = "Last Modification: " + formatted;



// function to calculate the windchill
function calculateWindChill(tempC, speedkmh) {
    return (
        13.12 + 0.6215 * tempC - 11.37 * Math.pow(speedkmh, 0.16)
    ).toFixed(1);
}

let temperatureC = 8;      // Example temperature in Celsius
let windSpeedkmh = 10;

// Applying conditions
let windChillText = "N/A";
if (temperatureC <= 10 && windSpeedkmh > 4.8) {
    windChillText = calculateWindChill(temperatureC, windSpeedkmh) + "⁰C";
}

// Update DOM
document.getElementById("windchill").textContent = windChillText;