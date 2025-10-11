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

/**
 * Handles the newsletter form submission, prevents the default action,
 * and displays a success message to the user.
 */
function handleNewsletterSubmission(event) {
    // 1. Prevent the default form submission action (which would reload the page)
    event.preventDefault();

    // Get the form and the elements needed for feedback
    const form = event.target;
    const emailInput = document.getElementById('subscribe-email');
    // Removed unused 'subscribeButton' constant

    const newsletterSection = document.querySelector('.newsletter-section');

    // Simple validation (checks if field is not empty)
    if (!emailInput.value.trim()) {
        alert('Please enter a valid email address.');
        return;
    }

    // 2. Hide the form elements
    form.style.display = 'none';

    // 3. Create and inject the success message element
    const successMessage = document.createElement('div');
    successMessage.classList.add('success-message');
    successMessage.style.textAlign = 'center';
    successMessage.style.padding = '2rem';
    // Using a light success background color
    successMessage.style.backgroundColor = 'var(--accent-light, #e6ffe6)'; 
    successMessage.style.borderRadius = 'var(--radius, 8px)';
    successMessage.style.marginTop = '1.5rem';
    
    // Set the overall text color for the success message to dark (as requested)
    successMessage.style.color = '#333';

    // Use the submitted email in the message
    const submittedEmail = emailInput.value.trim();

    successMessage.innerHTML = `
        <i class="fa-solid fa-circle-check fa-3x" style="color: var(--accent, #008000);"></i>
        <h3>Subscription Successful!</h3>
        <p>Thank you for joining the Dream Nigeria community! A confirmation email has been sent to <strong>${submittedEmail}</strong>.</p>
        <p>Get ready for exclusive travel tips and updates!</p>
    `;
    
    // Insert the success message right after the introductory paragraph
    // This targets the main <p> element in the section, not the one in the input group
    const paragraph = newsletterSection.querySelector('p:not(.newsletter-input-group p)');
    if (paragraph) {
        paragraph.insertAdjacentElement('afterend', successMessage);
    } else {
        // Fallback: append it to the section if the paragraph isn't found
        newsletterSection.appendChild(successMessage);
    }
}

// 4. Attach the event listener to the newsletter form
document.addEventListener('DOMContentLoaded', () => {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmission);
    }
});