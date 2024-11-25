const carouselList = document.querySelector('.carousel .list');
const dots = document.querySelectorAll('.dots .dot');
const totalSlides = dots.length;

let currentSlide = 0;
const autoSlideInterval = 5000;

// Update the active dot and transform slider
function updateSlider(index) {
	carouselList.style.transform = `translateX(${index * 100}%)`;
	dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
}

// Dot navigation
dots.forEach((dot, index) => {
	dot.addEventListener('click', () => {
		currentSlide = index;
		updateSlider(currentSlide);
	});
});

// Auto slide
function autoSlide() {
	setInterval(() => {
		currentSlide = (currentSlide + 1) % totalSlides;
		updateSlider(currentSlide);
	}, autoSlideInterval);
}

// Initialize auto slide
autoSlide();
