document.addEventListener('DOMContentLoaded', () => {

    // Mobile nav toggle
    const navToggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector("nav");
    if (navToggle && nav) {
        navToggle.addEventListener("click", () => {
            nav.classList.toggle("open");
        });
    }

    // Update year in footer
    document.getElementById('y').textContent = new Date().getFullYear();

    // Pre-select service based on URL parameter
    const params = new URLSearchParams(window.location.search);
    const service = params.get('service');
    if (service) {
        const select = document.getElementById('service');
        for (const option of select.options) {
            // Compare lowercased and trimmed values for robustness
            if (option.value.replace(/\s+/g, '').toLowerCase() === service.replace(/\s+/g, '').toLowerCase()) {
                option.selected = true;
                break;
            }
        }
    }

    // Contact form submission
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    if (!form) return; // Exit if form is not present

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // disable the button to prevent double clicks
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";

        try {
            const formData = new FormData(form);
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                // redirect on success
                window.location.href = "thankyou.html";
            } else {
                alert("Oops! Something went wrong. Please try again.");
                submitBtn.disabled = false;
                submitBtn.textContent = "Send";
            }
        } catch {
            alert("Network error. Please try again later.");
            submitBtn.disabled = false;
            submitBtn.textContent = "Send";
        }
    });
});