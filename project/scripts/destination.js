const destinationsData = [
    {
        name: "Lagos: The City of Aquatic Splendour",
        description: "A bustling, vibrant mega-city known for its dynamic nightlife, beautiful beaches, and thriving arts scene. A true cultural and economic hub.",
        image: "images/img/lagos.webp",
        alt: "Lagos Cityscape",
        link: "https://en.wikipedia.org/wiki/Lagos", 
        linkText: "See Lagos Guides"
    },
    {
        name: "Abuja: The Nation's Capital",
        description: "Planned and organized, Abuja is home to stunning modern architecture, Aso Rock, and key national monuments. A center of power and green spaces.",
        image: "images/img/abuja.webp",
        alt: "Abuja Aso Rock",
        link: "https://en.wikipedia.org/wiki/Abuja",
        linkText: "See Abuja Guides"
    },
    {
        name: "Calabar: Culture & Carnival Hub",
        description: "Famous for its annual, spectacular Carnival, Calabar offers rich historical sites, serene rainforests, and a relaxed, beautiful atmosphere.",
        image: "images/img/carnival.webp",
        alt: "Calabar Carnival Dancers",
        link: "https://en.wikipedia.org/wiki/Calabar",
        linkText: "See Calabar Guides"
    },
    {
        name: "Kano: Ancient City of Commerce",
        description: "Explore the historic dye pits, ancient city walls, and the bustling Kurmi Market. Kano is a deep dive into the Hausa culture and history.",
        image: "images/img/kano.webp",
        alt: "Kano Ancient Dye Pits",
        link: "https://en.wikipedia.org/wiki/Kano_(city)",
        linkText: "See Kano Guides"
    }
];

/**
 * Generate the HTML for a destination card.
 */
function createDestinationCard(destination) {
    return `
        <article class="destination-card">
            <img src="${destination.image}" alt="${destination.alt}" loading="lazy">
            <div class="card-info">
                <h3>${destination.name}</h3>
                <p>${destination.description}</p>
                <a href="${destination.link}" 
                   class="learn-more" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   ${destination.linkText}
                </a>
            </div>
        </article>
    `;
}

/**
 * Populate the grid with destination cards.
 */
function loadDestinations() {
    const gridContainer = document.querySelector('.destination-grid');

    if (gridContainer) {
        if (destinationsData.length === 0) {
            gridContainer.innerHTML = `<p class="no-data">No destinations available at the moment.</p>`;
            return;
        }

        gridContainer.innerHTML = destinationsData.map(createDestinationCard).join('');
    }
}

document.addEventListener("DOMContentLoaded", loadDestinations);
