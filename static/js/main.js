// Hero Section Image Carousel
const heroImages = [
    'https://images.unsplash.com/photo-1605781231474-f60dea478e8a',
    'https://images.unsplash.com/photo-1519494080410-f9aa76cb4283',
    'https://images.unsplash.com/photo-1514416432279-50fac261c7dd'
];

let currentImageIndex = 0;
const heroCarousel = document.getElementById('heroCarousel');

// Initialize hero carousel
function initHeroCarousel() {
    heroImages.forEach((imageUrl, index) => {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.classList.add('absolute', 'inset-0', 'w-full', 'h-full', 'object-cover', 'transition-opacity', 'duration-500');
        img.style.opacity = index === 0 ? '1' : '0';
        heroCarousel.appendChild(img);
    });
}

// Rotate hero images
function rotateHeroImages() {
    const images = heroCarousel.getElementsByTagName('img');
    images[currentImageIndex].style.opacity = '0';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.opacity = '1';
}

// Countries data
const countriesData = [
    {
        name: 'Russia',
        image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&auto=format&fit=crop&q=80',
        description: 'World-renowned medical universities with modern facilities.'
    },
    {
        name: 'Uzbekistan',
        image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&auto=format&fit=crop&q=80',
        description: 'Quality education with affordable living costs.'
    },
    {
        name: 'Kazakhstan',
        image: 'https://images.unsplash.com/photo-1504615755583-2916b52192a3?w=800&auto=format&fit=crop&q=80',
        description: 'Advanced medical programs with international recognition.'
    },
    {
        name: 'Philippines',
        image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&auto=format&fit=crop&q=80',
        description: 'English-medium instruction with clinical exposure.'
    },
    {
        name: 'Georgia',
        image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&auto=format&fit=crop&q=80',
        description: 'European standard education at competitive rates.'
    },
    {
        name: 'Kyrgyzstan',
        image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=80',
        description: 'Renowned medical universities with global recognition.'
    },
    {
        name: 'Egypt',
        image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800&auto=format&fit=crop&q=80',
        description: 'Historic excellence in medical education.'
    }
];

// Initialize countries section
function initCountriesSection() {
    const countriesContainer = document.querySelector('#countries .grid');

    // Create and append cards with lazy loading
    countriesData.forEach(country => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300';
        card.innerHTML = `
            <img src="${country.image}" 
                 alt="${country.name}" 
                 class="w-full h-48 object-cover"
                 loading="lazy" 
                 decoding="async"
                 onerror="this.onerror=null; this.src='https://via.placeholder.com/800x600?text=${country.name}'">
            <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">${country.name}</h3>
                <p class="text-gray-600">${country.description}</p>
            </div>
        `;
        countriesContainer.appendChild(card);
    });
}

// Process steps data
const processSteps = [
    {
        title: 'Document Preparation',
        description: 'Gather all required academic and personal documents.'
    },
    {
        title: 'University Selection',
        description: 'Choose from our partner universities based on your preferences.'
    },
    {
        title: 'Application Submission',
        description: 'Submit your application with our guidance and support.'
    },
    {
        title: 'Visa Processing',
        description: 'Complete visa formalities with expert assistance.'
    },
    {
        title: 'Pre-Departure Briefing',
        description: 'Get prepared for your journey with our orientation program.'
    }
];

// Initialize process timeline
function initProcessTimeline() {
    const timelineContainer = document.querySelector('.process-timeline');
    processSteps.forEach((step, index) => {
        const stepElement = document.createElement('div');
        stepElement.className = 'flex items-start mb-8';
        stepElement.innerHTML = `
            <div class="flex items-center justify-center bg-blue-600 rounded-full h-8 w-8 text-white font-bold">
                ${index + 1}
            </div>
            <div class="ml-4">
                <h4 class="text-lg font-semibold mb-2">${step.title}</h4>
                <p class="text-gray-600">${step.description}</p>
            </div>
        `;
        timelineContainer.appendChild(stepElement);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initHeroCarousel();
    setInterval(rotateHeroImages, 5000);
    initCountriesSection();
    initProcessTimeline();
});