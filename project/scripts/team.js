const teamData = [
    {
        image: "images/img/profile.webp",
        alt: "Photo of Lawrence Okon",
        name: "Lawrence Okon",
        role: "Founder & Developer",
        bio: "Blending technology and culture to reshape global perceptions of Nigeria through immersive digital storytelling.",
        social: [
            { icon: "fa-brands fa-linkedin-in", link: "#" },
            { icon: "fa-brands fa-instagram", link: "#" }
        ]
    },
    {
        image: "images/img/ben.webp",
        alt: "Photo of Ben Iwara",
        name: "Ben Iwara",
        role: "Destination Photographer",
        bio: "A visual storyteller capturing the soul of Nigeria through compelling imagery that celebrates people, culture, and everyday life.",
        social: [
            { icon: "fa-brands fa-linkedin-in", link: "#" },
            { icon: "fa-brands fa-instagram", link: "#" }
        ]
    },
    // {
    //     image: "images/team-member-3.webp",
    //     alt: "Photo of Emeka Nnamdi",
    //     name: "Emeka Nnamdi",
    //     role: "Destination Photographer",
    //     bio: "Responsible for capturing the stunning visuals that bring our travel guides to life. Emeka is based in Abuja.",
    //     social: [
    //         { icon: "fa-brands fa-instagram", link: "#" },
    //         { icon: "fa-brands fa-github", link: "#" }
    //     ]
    // },
    {
        image: "images/img/niyi.webp",
        alt: "photo of Niyi Fagbemi",
        name: "Niyi Fagbemi",
        role: "Photographer & Visual Storyteller",
        bio: "A creative visual artist capturing the vibrance of Nigerian culture and the essence of human emotion through photography.",
        social: [
            { icon: "fa-brands fa-linkedin-in", link: "#" },
            { icon: "fa-brands fa-twitter", link: "#" }
        ]
    }
];

/**
 * Generates the HTML for the social icons in a team member card.
 * @param {Array<Object>} socialArray - Array of social link objects.
 * @returns {string} HTML string of social links.
 */
function createSocialLinks(socialArray) {
    return socialArray.map(social => 
        `<a href="${social.link}"><i class="${social.icon}"></i></a>`
    ).join('');
}

/**
 * Generates the HTML string for a single team member card.
 * @param {object} member - The data object for a single team member.
 * @returns {string} The HTML string for the article element.
 */
function createTeamCard(member) {
    const socialLinks = createSocialLinks(member.social);
    
    return `
        <article class="team-member-card">
            <img src="${member.image}" alt="${member.alt}" loading="lazy">
            <div class="card-info">
                <h3>${member.name}</h3>
                <h4>${member.role}</h4>
                <p>${member.bio}</p>
                <div class="member-social">
                    ${socialLinks}
                </div>
            </div>
        </article>
    `;
}

/**
 * Finds the team grid container and populates it with all team member cards.
 */
function loadTeamMembers() {
    const gridContainer = document.querySelector('.team-grid');

    if (gridContainer) {
        // Generate HTML for each member and join them into a single string
        const cardsHTML = teamData.map(createTeamCard).join('');
        
        // Insert all cards into the container
        gridContainer.innerHTML = cardsHTML;
    }
}

// Run the function when the script loads
document.addEventListener('DOMContentLoaded', loadTeamMembers);