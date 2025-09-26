// Get current count from localStorage (if none, start at 0)
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

// Increment by 1 since this page loads after a successful form submission
reviewCount++;

// Save back to localStorage
localStorage.setItem("reviewCount", reviewCount);

// Display the updated count
document.getElementById("reviewCounter").textContent = reviewCount;


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