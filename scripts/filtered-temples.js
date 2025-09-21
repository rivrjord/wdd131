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

const homeLink = document.getElementById("home");

homeLink.addEventListener("click", () => {
  createTempleCard(temples); // Show all temples again
});


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2022, May, 22",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/6-Rome-Temple-2160338.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-763229.jpg"
  },
  {
    templeName: "Billings Montana",
    location: "Billings, Montana, United States",
    dedicated: "1999, Novemver, 20",
    area: 33800,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/billings-montana/400x250/08-Billings-Montana-Temple-1781063.jpg"
  },
  {
    templeName: "Boise Idaho",
    location: "Boise, Idaho, United States",
    dedicated: "1984, May, 25",
    area: 35868,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/boise-idaho/400x250/boise-idaho-temple-exterior-2012-1029111-wallpaper.jpg"
  },
  {
    templeName: "Chicago Illinois",
    location: "Chicago, Illinois, United States",
    dedicated: "1985, August, 9",
    area: 37062,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/chicago-illinois/400x250/Chicago-Temple_0738.jpg"
  }
];

// Initial display of all temples
createTempleCard(temples);

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

  filteredTemples.forEach(temple => {
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
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".content").appendChild(card);
  });
}