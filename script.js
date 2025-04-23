// Random Quotes for Hells Angels
const quotes = [
  '"When you go to the top, you realize that the road up there is paved with dead bodies." - Sonny Barger',
  '"I don\'t believe in God, but I believe in the Hells Angels." - Unknown',
  '"The Angels are the last of the true outlaws." - Rolling Stone Magazine',
  '"Freedom is not free. It is earned." - Unknown',
  '"We are not a gang. We are a brotherhood." - Anonymous'
];

// Function to change quote every 5 seconds
let currentQuoteIndex = 0;
const quoteElement = document.getElementById('quote');

setInterval(() => {
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
  quoteElement.textContent = quotes[currentQuoteIndex];
}, 5000);
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-btn.next');
const prevButton = document.querySelector('.carousel-btn.prev');

let currentIndex = 0;

function updateCarousel(index) {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${slideWidth * index}px)`;
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel(currentIndex);
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel(currentIndex);
});

// Optionally add auto-slide functionality for smoother experience
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel(currentIndex);
}, 3000);  