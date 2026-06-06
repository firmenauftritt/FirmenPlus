// ==========================================
// MOBILE NAVIGATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Handle smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close modal if open
                closeAllModals();
            }
        });
    });

    // ==========================================
    // MODAL HANDLING
    // ==========================================

    // Get all modal triggers and modals
    const modalTriggers = document.querySelectorAll('[data-modal]');
    const modals = document.querySelectorAll('.modal');

    // Open modal
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const modalId = trigger.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    function closeAllModals() {
        modals.forEach(modal => {
            modal.classList.remove('active');
        });
        document.body.style.overflow = 'auto';
    }

    // Close on X button
    document.querySelectorAll('.modal-close').forEach(closeBtn => {
        closeBtn.addEventListener('click', closeAllModals);
    });

    // Close on outside click
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeAllModals();
            }
        });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });

    // ==========================================
    // FAQ ACCORDION
    // ==========================================

    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isActive = faqItem.classList.contains('active');

            // Close all FAQs
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });

            // Open clicked FAQ if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });

    // ==========================================
    // FORM HANDLING
    // ==========================================

    const forms = document.querySelectorAll('.contact-form');

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form data
            const formData = new FormData(form);
            const data = {
                name: form.querySelector('input[type="text"]').value,
                email: form.querySelector('input[type="email"]').value,
                phone: form.querySelector('input[type="tel"]').value,
                company: form.querySelectorAll('input[type="text"]')[1]?.value || '',
                service: form.querySelector('select').value,
                message: form.querySelector('textarea')?.value || ''
            };

            // Validate form
            if (!data.name || !data.email) {
                showMessage('Bitte füllen Sie alle erforderlichen Felder aus.', 'error');
                return;
            }

            // Simulate form submission
            console.log('Form Data:', data);
            
            // Show success message
            showMessage('Vielen Dank! Wir werden uns in Kürze mit Ihnen in Verbindung setzen.', 'success');

            // Reset form
            form.reset();

            // Close modal if open
            const modal = form.closest('.modal');
            if (modal) {
                setTimeout(() => {
                    modal.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }, 2000);
            }
        });
    });

    // ==========================================
    // MESSAGE NOTIFICATIONS
    // ==========================================

    function showMessage(text, type) {
        // Remove existing messages
        const existingMessage = document.querySelector('.notification');
        if (existingMessage) {
            existingMessage.remove();
        }

        const message = document.createElement('div');
        message.className = `notification notification-${type}`;
        message.textContent = text;
        message.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : '#ef4444'};
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            z-index: 3000;
            animation: slideIn 0.3s ease-out;
            font-weight: 500;
        `;

        document.body.appendChild(message);

        // Remove after 4 seconds
        setTimeout(() => {
            message.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => message.remove(), 300);
        }, 4000);
    }

    // ==========================================
    // SCROLL ANIMATIONS
    // ==========================================

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe service cards and other elements
    document.querySelectorAll('.service-card, .benefit-item, .process-step').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // ==========================================
    // BUTTON SCROLL BEHAVIOR
    // ==========================================

    const scrollButtons = document.querySelectorAll('[data-scroll]');
    scrollButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-scroll');
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ==========================================
    // NAVBAR SHADOW ON SCROLL
    // ==========================================

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
});

// Add animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);
