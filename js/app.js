// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    disable: 'mobile' // Optional: improves performance on slower mobile devices
});

// Mobile Menu Toggle
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

// Form Handlers
function handleSubmit() {
    const btn = document.querySelector('button[onclick="handleSubmit()"]');
    if (!btn) return;

    const originalContent = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin text-lg"></i>';
    btn.disabled = true;
    btn.style.opacity = '0.7';

    setTimeout(() => {
        const successMsg = document.getElementById('successMsg');
        const contactForm = document.getElementById('contactForm');

        if (successMsg) successMsg.classList.remove('hidden');
        if (contactForm) contactForm.reset();

        btn.innerHTML = originalContent;
        btn.disabled = false;
        btn.style.opacity = '1';

        setTimeout(() => {
            if (successMsg) successMsg.classList.add('hidden');
        }, 6000);
    }, 2000);
}

// Magnetic Button Effect
document.querySelectorAll('.btn-premium').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = `translate(0px, 0px)`;
    });
});

// Highlight active menu item based on current page
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = {
        'index.html': 'nav-home',
        'pgr.html': 'nav-pgr',
        'treinamentos.html': 'nav-treinamentos',
        'normas.html': 'nav-normas',
        'contato.html': 'nav-contato'
    };

    const activeId = navLinks[currentPage];
    if (activeId) {
        const activeLink = document.getElementById(activeId);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
});