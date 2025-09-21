const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
})


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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "images/filtered-images/aba-nigeria-temple.webp"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "images/filtered-images/manti-temple.webp"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "images/filtered-images/payson-utah-temple.webp"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2022, May, 22",
    area: 6861,
    imageUrl:
      "images/filtered-images/yigo-guam-temple.webp"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "images/filtered-images/washington-dc-temple.webp"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "images/filtered-images/lima-peru-temple.webp"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "images/filtered-images/mexico-city-temple.webp"
  },
  // Add more temple objects here...
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl:
      "images/filtered-images/rome-temple.webp"
  },
  {
    templeName: "Salt Lake",
    location: "Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl:
      "images/filtered-images/salt-lake-temple.webp"
  },
  {
    templeName: "Billings Montana",
    location: "Billings, Montana, United States",
    dedicated: "1999, Novemver, 20",
    area: 33800,
    imageUrl:
      "images/filtered-images/billings-montana-temple.webp"
  },
  {
    templeName: "Boise Idaho",
    location: "Boise, Idaho, United States",
    dedicated: "1984, May, 25",
    area: 35868,
    imageUrl:
      "images/filtered-images/boise-idaho-temple.webp"
  },
  {
    templeName: "Chicago Illinois",
    location: "Chicago, Illinois, United States",
    dedicated: "1985, August, 9",
    area: 37062,
    imageUrl:
      "images/filtered-images/chicago-temple.webp"
  }
];

// Initial display of all temples
createTempleCard(temples);

const homeLink = document.getElementById("home");

homeLink.addEventListener("click", () => {
  createTempleCard(temples); // Show all temples again
});


// Event listeners for filtering
// Non Utah Temples
const nonutahlink = document.getElementById("nonutah");
nonutahlink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => !temple.location.includes("Utah")));
});

// Old and New Temples
const oldlink = document.getElementById("old");
oldlink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => {
    const dedicatedYear = new Date(temple.dedicated).getFullYear();
    return dedicatedYear < 2000;
  }));
});

// New Temples
const newlink = document.getElementById("new");
newlink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => {
    const dedicatedYear = new Date(temple.dedicated).getFullYear();
    return dedicatedYear >= 2000;
  }));
});

// Small Temples
const smalllink = document.getElementById("small");
smalllink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area <= 10000));
});

// Large Temples
const largelink = document.getElementById("large");
largelink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area > 90000));
});


// Function to create and display temple cards
function createTempleCard(filteredTemples) {
  document.querySelector(".content").innerHTML = "";

  filteredTemples.forEach((temple, index) => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");
    card.classList.add("temple-card"); // This enabled me to exclusively design the card

    name.textContent = temple.templeName;
    location.innerHTML = `<span class = "label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class = "label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class = "label">Area:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `Image of ${temple.templeName} Temple`);
      // Optimize LCP for the first temple
    if (index === 0) {
      img.removeAttribute("loading"); // No lazy loading
      img.setAttribute("fetchpriority", "high");
    } else {
      img.setAttribute("loading", "lazy");
    };

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".content").appendChild(card);
  });
}