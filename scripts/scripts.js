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
    const select = document.getElementById('service');
    if (service && select) {
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

    // The form carries novalidate (custom styling), so required fields are only enforced here.
    const pt = document.documentElement.lang.toLowerCase().startsWith('pt');
    const text = pt
        ? { sending: "Enviando...", send: "Enviar", error: "Ops! Algo deu errado. Tente novamente.", network: "Erro de rede. Tente novamente mais tarde." }
        : { sending: "Sending...", send: "Send", error: "Oops! Something went wrong. Please try again.", network: "Network error. Please try again later." };
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // disable the button to prevent double clicks
        submitBtn.disabled = true;
        submitBtn.textContent = text.sending;

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
                alert(text.error);
                submitBtn.disabled = false;
                submitBtn.textContent = text.send;
            }
        } catch {
            alert(text.network);
            submitBtn.disabled = false;
            submitBtn.textContent = text.send;
        }
    });
});