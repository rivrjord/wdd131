const destinationPlaces = [
    {
        image: 'images/img/obudu.jpg',
        title: 'Obudu Mountain Resort',
        description: 'Experience the breathtaking beauty of Obudu Mountain Resort, a perfect blend of nature and adventure.',
        link: 'obudu.html'
    },
    {
        image: 'images/img/aso-rock.jpg',
        title: 'Aso Rock',
        description: 'Discover the iconic Aso Rock, a symbol of Nigeria\'s rich history and culture, located in the heart of Abuja.',
        link: 'aso-rock.html'
    },
    {
        image: 'images/img/drill.jpg',
        title: 'Drill Ranch',
        description:'Discover Drill Ranch, a wildlife sanctuary in Cross River State dedicated to protecting endangered drill monkeys and preserving Nigeria’s rainforest heritage.',
        link: 'drill.html'
    },
    { 
        image: 'images/img/lekki-conservation-centre.jpg',
        title: 'Lekki Conservation Center',
        description: 'Explore the lush greenery and diverse wildlife at Lekki Conservation Center, a haven for nature lovers in Lagos.',
        link: 'lekki-conservation-center.html'
    },
    { 
        image: 'images/img/agbokim.jpg',
        title: 'Agbokim Waterfalls',
        description: 'Witness the stunning Agbokim Waterfalls, a series of cascading falls surrounded by tropical rainforest in Cross River State.',
        link: 'agbokim-waterfalls.html'
    }
];

let index = 0;
let rotationInterval;

// Function to update the destination
function updateDestination() {
    const destinationImage = document.getElementById('destination-img');
    const destinationHeading = document.getElementById('destination-heading');
    const destinationDescription = document.getElementById('destination-description');

    const place = destinationPlaces[index];
    destinationImage.src = place.image;
    destinationHeading.textContent = place.title;
    destinationDescription.textContent = place.description;

    index = (index + 1) % destinationPlaces.length;
}

// Start the rotation
function startRotation() {
    rotationInterval = setInterval(updateDestination, 3000);
}

// Stop the rotation
function stopRotation() {
    clearInterval(rotationInterval);
}

// Initialize on page load
window.onload = () => {
    updateDestination();
    startRotation();
};

// Pause on hover (safe check)
const destinationSection = document.querySelector('.destination');
if (destinationSection) {
    destinationSection.addEventListener('mouseenter', stopRotation);
    destinationSection.addEventListener('mouseleave', startRotation);
}
// Festival Data
const festivalPlaces = [
    {
        title: 'Argungu Fishing Festival',
        description: 'Experience the vibrant Argungu Fishing Festival, a celebration of culture and tradition in Kebbi State.',
        link: 'argungu-festival.html',
        date: 'March 2025',
        city: 'Argungu, Kebbi State'
    },
    {
        title: 'Osun-Osogbo Festival',
        description: 'Join the Osun-Osogbo Festival, a sacred event honoring the river goddess Osun in Osogbo, Osun State.',
        link: 'osun-osogbo-festival.html',
        date: 'August 2025',
        city: 'Osogbo, Osun State'
    },
    { 
        title: 'Eyo Festival',
        description: 'Witness the colorful Eyo Festival, a traditional Yoruba festival held in Lagos to honor the departed souls of Lagosians.',
        link: 'eyo-festival.html',
        date: 'May 2025',
        city: 'Lagos, Lagos State'
    }
];

// ✅ Function to create and display festival cards
function createFestivalCard(festivals) {
    const festivalContainer = document.querySelector('.festival-cards'); // Must match your HTML

    if (!festivalContainer) {
        console.error('Festival container not found!');
        return;
    }

    festivals.forEach(festival => {
        const card = document.createElement('div');
        card.className = 'festival-card';
        card.innerHTML = `
            <h3>${festival.title}</h3>
            <p class="description">${festival.description}</p>
            <p class="details"><strong>Date:</strong> ${festival.date}</p>
            <p class="details"><strong>Location:</strong> ${festival.city}</p>
            <a href="${festival.link}" class="explore-button small-button learn-more">Learn More</a>
        `;
        festivalContainer.appendChild(card);
    });
}
// Run after page load
window.addEventListener('DOMContentLoaded', () => {
    createFestivalCard(festivalPlaces);
});


const menuButton = document.querySelector('#menu');
const nav = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('show');
  nav.classList.toggle('show');
});


