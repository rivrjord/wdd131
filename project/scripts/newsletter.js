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
    successMessage.style.backgroundColor = 'var(--accent-light, #fff)'; 
    successMessage.style.borderRadius = 'var(--radius, 8px)';
    successMessage.style.marginTop = '1.5rem';
    
    // Set the overall text color for the success message to true black (#000)
    successMessage.style.color = '#000'; // Changed from #333 to #000

    // Use the submitted email in the message
    const submittedEmail = emailInput.value.trim();

    successMessage.innerHTML = `
        <i class="fa-solid fa-circle-check fa-3x" style="color: var(--accent, #008000);"></i>
        <h3>Subscription Successful!</h3>
        <p>Thank you for joining the Dream Nigeria community! A confirmation email has been sent to <strong>${submittedEmail}</strong>.</p>
        <p>Get ready for exclusive travel tips and updates!</p>
    `;
    
    // Insert the success message right after the introductory paragraph
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