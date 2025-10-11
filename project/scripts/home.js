const destinationPlaces = [
    {
        image: 'images/img/obudu.webp',
        title: 'Obudu Mountain Resort',
        description: 'Experience the breathtaking beauty of Obudu Mountain Resort, a perfect blend of nature and adventure.',
        link: 'obudu.html'
    },
    {
        image: 'images/img/aso-rock.webp',
        title: 'Aso Rock',
        description: 'Discover the iconic Aso Rock, a symbol of Nigeria\'s rich history and culture, located in the heart of Abuja.',
        link: 'aso-rock.html'
    },
    {
        image: 'images/img/drill.webp',
        title: 'Drill Ranch',
        description:'Discover Drill Ranch, a wildlife sanctuary in Cross River State dedicated to protecting endangered drill monkeys and preserving Nigeria’s rainforest heritage.',
        link: 'drill.html'
    },
    { 
        image: 'images/img/lekki.webp',
        title: 'Lekki Conservation Center',
        description: 'Explore the lush greenery and diverse wildlife at Lekki Conservation Center, a haven for nature lovers in Lagos.',
        link: 'lekki-conservation-center.html'
    },
    { 
        image: 'images/img/agbokim.webp',
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

    // Safety check: if the elements aren't found, stop to prevent errors
    if (!destinationImage || !destinationHeading || !destinationDescription) {
        stopRotation(); 
        return;
    }

    const place = destinationPlaces[index];
    destinationImage.src = place.image;
    destinationHeading.textContent = place.title;
    destinationDescription.textContent = place.description;

    index = (index + 1) % destinationPlaces.length;
}

// Start the rotation
function startRotation() {
    // Ensure any running interval is cleared before starting a new one
    clearInterval(rotationInterval); 
    rotationInterval = setInterval(updateDestination, 3000);
}

// Stop the rotation
function stopRotation() {
    clearInterval(rotationInterval);
}

// REMOVED: window.onload = () => { ... } // Conflicted with DOMContentLoaded

// REMOVED: const destinationSection = document.querySelector('.destination');
// REMOVED: if (destinationSection) { ... } // This was running before the DOM was fully ready

// Festival Data (remains the same)
const festivalPlaces = [
    {
        title: 'Argungu Fishing Festival',
        description: 'Experience the vibrant Argungu Fishing Festival, a celebration of culture and tradition in Kebbi State.',
        link: 'argungu-festival.html',
        date: 'March 2025',
        city: 'Argungu, Kebbi State'
    },
    // ... other festival data ...
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

// Function to create and display festival cards
function createFestivalCard(festivals) {
    const festivalContainer = document.querySelector('.festival-cards');

    if (!festivalContainer) {
        console.error('Festival container not found!');
        return;
    }

    // Using map and join for more efficient DOM manipulation
    const festivalCardsHTML = festivals.map(festival => `
        <div class="festival-card">
            <h3>${festival.title}</h3>
            <p class="description">${festival.description}</p>
            <p class="details"><strong>Date:</strong> ${festival.date}</p>
            <p class="details"><strong>Location:</strong> ${festival.city}</p>
            <a href="${festival.link}" class="explore-button small-button learn-more">Learn More</a>
        </div>
    `).join('');

    festivalContainer.innerHTML = festivalCardsHTML;
}

// -------------------------------------------------------------------
// CONSOLIDATED INITIALIZATION BLOCK
// -------------------------------------------------------------------

// Run all necessary initialization after page structure is loaded
window.addEventListener('DOMContentLoaded', () => {
    
    // 1. Destination Slide Initialization (Moved from window.onload)
    updateDestination();
    startRotation();
    
    // 2. Pause on hover (Ensure the element is ready before attaching listeners)
    // We target the overall card for the destination section
    const destinationCard = document.querySelector('.card:first-of-type'); 

    if (destinationCard) {
        destinationCard.addEventListener('mouseenter', stopRotation);
        destinationCard.addEventListener('mouseleave', startRotation);
    } else {
        console.warn("Could not find destination card for hover listener.");
    }
    
    // 3. Festival Card Generation
    createFestivalCard(festivalPlaces);

    // 4. Menu Toggle Setup (moved here to ensure elements are found)
    const menuButton = document.querySelector('#menu');
    const nav = document.querySelector('.navigation');

    if (menuButton && nav) {
        menuButton.addEventListener('click', () => {
          menuButton.classList.toggle('show');
          nav.classList.toggle('show');
        });
    } else {
        console.warn("Menu button or navigation not found.");
    }
});