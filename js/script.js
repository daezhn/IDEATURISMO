// Main JavaScript for IDEA Tourism website

// Global variables
let currentLanguage = localStorage.getItem('language') || null;
let currentSlide = 0;
let filteredTours = [...toursData];

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    // Check if language is already set
    if (!currentLanguage) {
        showLanguageModal();
    } else {
        hideLanguageModal();
        updateLanguage(currentLanguage);
    }
    
    // Initialize components
    initNavigation();
    initHeroSlider();
    initTours();
    initCalendar();
    initFAQ();
    initContactForm();
    initLanguageSelector();
});

// Language Modal Functions
function showLanguageModal() {
    const modal = document.getElementById('languageModal');
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function hideLanguageModal() {
    const modal = document.getElementById('languageModal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    hideLanguageModal();
    updateLanguage(lang);
    
    // Update current language display
    const currentLangEl = document.getElementById('currentLang');
    if (currentLangEl) {
        currentLangEl.textContent = lang.toUpperCase();
    }
    
    // Reload tours with new language
    loadTours();
}

function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update placeholder texts
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
}

// Navigation Functions
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function initLanguageSelector() {
    const languageToggle = document.getElementById('languageToggle');
    const languageDropdown = document.getElementById('languageDropdown');
    
    if (languageToggle && languageDropdown) {
        languageToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            languageDropdown.classList.toggle('active');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function() {
            languageDropdown.classList.remove('active');
        });
    }
}

// Hero Slider Functions
function initHeroSlider() {
    // Auto-advance slides
    setInterval(() => {
        changeSlide(1);
    }, 5000);
}

function changeSlide(direction) {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    
    if (slides.length === 0) return;
    
    // Remove active class from current slide
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    // Calculate new slide index
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    
    // Add active class to new slide
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function currentSlide(index) {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    
    if (slides.length === 0) return;
    
    // Remove active class from all
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    // Set new slide
    currentSlide = index;
    
    // Add active class
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Tours Functions
function initTours() {
    loadTours();
}

function loadTours() {
    const toursGrid = document.getElementById('toursGrid');
    if (!toursGrid) return;
    
    toursGrid.innerHTML = '';
    
    filteredTours.forEach(tour => {
        const tourCard = createTourCard(tour);
        toursGrid.appendChild(tourCard);
    });
}

function createTourCard(tour) {
    const lang = currentLanguage || 'es';
    const card = document.createElement('div');
    card.className = 'tour-card';
    card.onclick = () => openTourModal(tour.id);
    
    const durationHours = Math.floor(tour.duration / 60);
    const durationMins = tour.duration % 60;
    const durationText = durationHours > 0 
        ? `${durationHours}h ${durationMins > 0 ? durationMins + 'm' : ''}`
        : `${durationMins}m`;
    
    const priceText = tour.price === 0 
        ? (lang === 'es' ? 'Gratis' : 'Free')
        : `$${tour.price} MXN`;
    
    const categoryText = translations[lang][`filter-${tour.category}`] || tour.category;
    
    card.innerHTML = `
        <div class="tour-card-image" style="background-image: url('${tour.image}')">
            <div class="tour-category-badge">${categoryText}</div>
        </div>
        <div class="tour-card-content">
            <h3>${tour.title[lang]}</h3>
            <div class="tour-rating">
                ${'⭐'.repeat(Math.floor(tour.rating))} ${tour.rating} (${tour.reviews} ${lang === 'es' ? 'reseñas' : 'reviews'})
            </div>
            <p>${tour.description[lang]}</p>
            <div class="tour-details">
                <span class="tour-duration">🕐 ${durationText}</span>
                <span class="tour-price">${priceText}</span>
            </div>
        </div>
    `;
    
    return card;
}

function searchTours() {
    const searchInput = document.getElementById('tourSearch');
    const searchTerm = searchInput.value.toLowerCase();
    const lang = currentLanguage || 'es';
    
    filteredTours = toursData.filter(tour => {
        return tour.title[lang].toLowerCase().includes(searchTerm) ||
               tour.description[lang].toLowerCase().includes(searchTerm);
    });
    
    applyFilters();
}

function filterTours() {
    const categoryFilter = document.getElementById('categoryFilter').value;
    const durationFilter = document.getElementById('durationFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;
    
    filteredTours = toursData.filter(tour => {
        // Category filter
        if (categoryFilter !== 'all' && tour.category !== categoryFilter) {
            return false;
        }
        
        // Duration filter
        if (durationFilter !== 'all') {
            const duration = tour.duration;
            if (durationFilter === 'short' && duration >= 180) return false;
            if (durationFilter === 'medium' && (duration < 180 || duration > 360)) return false;
            if (durationFilter === 'long' && duration <= 360) return false;
        }
        
        // Price filter
        if (priceFilter !== 'all') {
            const price = tour.price;
            if (priceFilter === 'free' && price !== 0) return false;
            if (priceFilter === 'low' && (price === 0 || price > 200)) return false;
            if (priceFilter === 'medium' && (price < 200 || price > 500)) return false;
            if (priceFilter === 'high' && price <= 500) return false;
        }
        
        return true;
    });
    
    loadTours();
}

function applyFilters() {
    filterTours();
}

function openTourModal(tourId) {
    const tour = toursData.find(t => t.id === tourId);
    if (!tour) return;
    
    const lang = currentLanguage || 'es';
    const modal = document.getElementById('tourModal');
    const content = document.getElementById('tourDetailContent');
    
    if (!modal || !content) return;
    
    const durationHours = Math.floor(tour.duration / 60);
    const durationMins = tour.duration % 60;
    const durationText = durationHours > 0 
        ? `${durationHours} ${lang === 'es' ? 'horas' : 'hours'} ${durationMins > 0 ? durationMins + (lang === 'es' ? ' minutos' : ' minutes') : ''}`
        : `${durationMins} ${lang === 'es' ? 'minutos' : 'minutes'}`;
    
    const priceText = tour.price === 0 
        ? (lang === 'es' ? 'Gratis' : 'Free')
        : `$${tour.price} MXN`;
    
    const itineraryHTML = tour.itinerary[lang].map(item => 
        `<div class="itinerary-item">${item}</div>`
    ).join('');
    
    const includesHTML = tour.includes[lang].map(item => 
        `<div class="itinerary-item">${item}</div>`
    ).join('');
    
    const testimonialsHTML = tour.testimonials.map(testimonial => `
        <div class="testimonial">
            <div class="tour-rating">${'⭐'.repeat(testimonial.rating)}</div>
            <p>${testimonial.comment[lang]}</p>
            <p class="testimonial-author">- ${testimonial.name}</p>
        </div>
    `).join('');
    
    content.innerHTML = `
        <div class="tour-detail-header" style="background-image: url('${tour.image}')">
            <div class="tour-detail-overlay">
                <h1>${tour.title[lang]}</h1>
                <div class="tour-rating">
                    ${'⭐'.repeat(Math.floor(tour.rating))} ${tour.rating} (${tour.reviews} ${lang === 'es' ? 'reseñas' : 'reviews'})
                </div>
            </div>
        </div>
        <div class="tour-detail-body">
            <div class="tour-detail-section">
                <h3>${tour.description[lang]}</h3>
                <p><strong>${translations[lang]['duration']}:</strong> ${durationText}</p>
                <p><strong>${translations[lang]['price']}:</strong> ${priceText}</p>
                <p><strong>${lang === 'es' ? 'Horarios' : 'Schedule'}:</strong> ${tour.schedule[lang]}</p>
            </div>
            
            <div class="tour-detail-section">
                <h3>${translations[lang]['itinerary']}</h3>
                ${itineraryHTML}
            </div>
            
            <div class="tour-detail-section">
                <h3>${lang === 'es' ? 'Incluye' : 'Includes'}</h3>
                ${includesHTML}
            </div>
            
            <div class="tour-detail-section">
                <h3>${translations[lang]['map']}</h3>
                <div class="tour-map">
                    📍 ${lang === 'es' ? 'Mapa interactivo de ubicaciones' : 'Interactive location map'}
                </div>
            </div>
            
            <div class="tour-detail-section">
                <h3>${translations[lang]['testimonials']}</h3>
                ${testimonialsHTML}
            </div>
            
            <div class="tour-detail-section" style="text-align: center;">
                <button class="btn btn-primary" onclick="alert('${lang === 'es' ? 'Por favor contacta con nosotros para reservar este tour' : 'Please contact us to book this tour'}')">
                    ${translations[lang]['book-now']}
                </button>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

function closeTourModal() {
    const modal = document.getElementById('tourModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Calendar Functions
function initCalendar() {
    const calendarEl = document.getElementById('availabilityCalendar');
    if (!calendarEl) return;
    
    const lang = currentLanguage || 'es';
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    
    const monthNames = lang === 'es' 
        ? ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    calendarEl.innerHTML = `
        <h4 style="text-align: center; color: var(--primary-color);">
            ${monthNames[currentMonth]} ${currentYear}
        </h4>
        <p style="text-align: center; color: var(--text-light); margin-top: 1rem;">
            ${lang === 'es' ? 'Todos nuestros tours están disponibles. Contáctanos para reservar.' : 'All our tours are available. Contact us to book.'}
        </p>
        <div style="text-align: center; margin-top: 1rem;">
            <button class="btn btn-primary" onclick="alert('${lang === 'es' ? 'Por favor usa el formulario de contacto para verificar disponibilidad' : 'Please use the contact form to check availability'}')">
                ${lang === 'es' ? 'Verificar Disponibilidad' : 'Check Availability'}
            </button>
        </div>
    `;
}

// FAQ Functions
function initFAQ() {
    // FAQ toggle functionality is handled by toggleFAQ function
}

function toggleFAQ(button) {
    const faqItem = button.parentElement;
    const wasActive = faqItem.classList.contains('active');
    
    // Close all FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked FAQ if it wasn't active
    if (!wasActive) {
        faqItem.classList.add('active');
    }
}

// Contact Form Functions
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const lang = currentLanguage || 'es';
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // In a real application, this would send the data to a server
        console.log('Form submitted:', { name, email, subject, message });
        
        alert(translations[lang]['form-success']);
        contactForm.reset();
    });
}

// Window click event for closing modals
window.onclick = function(event) {
    const modal = document.getElementById('tourModal');
    if (event.target === modal) {
        closeTourModal();
    }
}
