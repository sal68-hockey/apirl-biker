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
