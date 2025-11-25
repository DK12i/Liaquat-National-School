document.addEventListener('DOMContentLoaded', () => {

    // =================================================================
    // 1. ACTIVE TAB HIGHLIGHTING LOGIC
    // =================================================================
    const currentPage = window.location.pathname.split('/').pop();

    // Determine the current page name without the extension, default to 'index'
    let finalPageName;
    if (currentPage === '' || currentPage === 'index.html') {
        finalPageName = 'index';
    } else {
        // e.g., 'about.html' becomes 'about'
        finalPageName = currentPage.replace('.html', ''); 
    }

    const tabLinks = document.querySelectorAll('nav .tab-link');

    tabLinks.forEach(link => {
        // Use the custom data attribute 'data-page' for matching
        if (link.dataset.page === finalPageName) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // =================================================================
    // 2. CONTACT FORM SUBMISSION HANDLING (Simulated)
    // =================================================================
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const formData = new FormData(this);
            const name = formData.get('name');
            
            // Apply professional styling for the success message
            formMessage.style.display = 'block';
            formMessage.style.color = '#1a237e'; // Deep Blue Primary Color
            formMessage.style.backgroundColor = '#e6f4e6'; // Light Green Success Background
            formMessage.style.padding = '10px';
            formMessage.style.borderRadius = '5px';
            formMessage.style.fontWeight = '600';
            formMessage.textContent = `Thank you, ${name}! Your message has been received. We will contact you soon.`;

            // Reset the form and hide the message
            setTimeout(() => {
                this.reset();
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 2000);
            }, 3000);
        });
    }

    // =================================================================
    // 3. MODERN SCROLL ANIMATION (Fade-Up and Slight Scale Effect)
    // =================================================================
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.15 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        if (!section.classList.contains('hero')) {
            // Apply staggered delay for a smoother, professional look
            const index = Array.from(sections).indexOf(section);
            section.style.transitionDelay = `${(index - 1) * 0.1}s`; 
            observer.observe(section);
        } else {
             // Ensure hero is visible immediately and apply base styling
             section.classList.add('visible'); 
        }
    });

});