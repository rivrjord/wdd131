const destinationsData = [
    {
        name: "Lagos: The City of Aquatic Splendour",
        description: "A bustling, vibrant mega-city known for its dynamic nightlife, beautiful beaches, and thriving arts scene. A true cultural and economic hub.",
        image: "images/img/lagos.webp",
        alt: "Lagos Cityscape",
        link: "#", // Replace with actual link
        linkText: "See Lagos Guides"
    },
    {
        name: "Abuja: The Nation's Capital",
        description: "Planned and organized, Abuja is home to stunning modern architecture, Aso Rock, and key national monuments. A center of power and green spaces.",
        image: "images/img/abuja.webp",
        alt: "Abuja Aso Rock",
        link: "#",
        linkText: "See Abuja Guides"
    },
    {
        name: "Calabar: Culture & Carnival Hub",
        description: "Famous for its annual, spectacular Carnival, Calabar offers rich historical sites, serene rainforests, and a relaxed, beautiful atmosphere.",
        image: "images/img/carnival.webp",
        alt: "Calabar Carnival Dancers",
        link: "#",
        linkText: "See Calabar Guides"
    },
    {
        name: "Kano: Ancient City of Commerce",
        description: "Explore the historic dye pits, ancient city walls, and the bustling Kurmi Market. Kano is a deep dive into the Hausa culture and history.",
        image: "images/img/kano.webp",
        alt: "Kano Ancient Dye Pits",
        link: "#",
        linkText: "See Kano Guides"
    }
    // Add more destination objects here!
];

/**
 * Generates the HTML string for a single destination card.
 * @param {object} destination - The data object for a single destination.
 * @returns {string} The HTML string for the article element.
 */
function createDestinationCard(destination) {
    // Uses template literal for clean HTML generation
    return `
        <article class="destination-card">
            <img src="${destination.image}" alt="${destination.alt}" loading="lazy">
            <div class="card-info">
                <h3>${destination.name}</h3>
                <p>${destination.description}</p>
                <a href="${destination.link}" class="learn-more">${destination.linkText}</a>
            </div>
        </article>
    `;
}

/**
 * Finds the grid container and populates it with all destination cards.
 */
function loadDestinations() {
    // Target the element with class 'destination-grid'
    const gridContainer = document.querySelector('.destination-grid');

    if (gridContainer) {
        // Clear any existing HTML to prevent duplicates or initial content
        gridContainer.innerHTML = ''; 

        // Generate HTML for each destination, storing an array of strings
        // and then joining them into one large string.
        const cardsHTML = destinationsData.map(createDestinationCard).join('');
        
        // Insert all cards into the container at once for better performance
        gridContainer.innerHTML = cardsHTML;
    }
}

// Run the function when the script loads (due to 'defer' in the HTML link)
loadDestinations();