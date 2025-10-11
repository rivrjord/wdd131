const culturalTopicsData = [
    {
        className: "food",
        image: "images/img/jollof.webp",
        alt: "Plate of Jollof Rice and Plantain",
        title: "Food: A Culinary Journey",
        description: "Explore the bold, spicy flavors of Nigerian cuisine. Learn about Jollof Rice, Suya, Egusi soup, and regional specialties that define our tables.",
        linkText: "Read Food Guides",
        linkUrl: "#"
    },
    {
        className: "attire",
        image: "images/img/culture.webp",
        alt: "People in colorful Nigerian traditional attire",
        title: "Fashion & Attire",
        description: "From the elaborate Agbada and George to the modern use of Ankara, discover the deep significance of clothing in Nigerian identity and celebration.",
        linkText: "See Attire Styles",
        linkUrl: "#"
    },
    {
        className: "arts",
        image: "images/img/art.jpg",
        alt: "Film crew setting up a scene in Nigeria",
        title: "Arts, Film & Music",
        description: "The global dominance of Afrobeats and the massive influence of Nollywood (Nigerian cinema). Dive into the creativity defining modern Nigeria.",
        linkText: "Discover Afrobeats",
        linkUrl: "#"
    },
    {
        className: "language",
        image: "images/img/tradition.jpg",
        alt: "People shaking hands",
        title: "Language & Etiquette",
        description: "Nigeria has over 500 languages. Learn basic phrases in Igbo, Hausa, and Yoruba, and understand the formal etiquette of Nigerian greetings.",
        linkText: "Learn Phrases",
        linkUrl: "#"
    }
];

function createTopicCard(topic) {
    // Uses template literal to generate the card HTML
    return `
        <article class="topic-card ${topic.className}">
            <img src="${topic.image}" alt="${topic.alt}" loading="lazy">
            <div class="card-info">
                <h3>${topic.title}</h3>
                <p>${topic.description}</p>
                <a href="${topic.linkUrl}" class="learn-more">${topic.linkText}</a>
            </div>
        </article>
    `;
}

function loadCulturalTopics() {
    const gridContainer = document.querySelector('.topic-grid');
    if (gridContainer) {
        // Generate HTML for all cards
        const cardsHTML = culturalTopicsData.map(createTopicCard).join('');
        
        // Inject HTML into the container
        gridContainer.innerHTML = cardsHTML;
    }
}

// Run the function when the script loads
loadCulturalTopics();