document.addEventListener("DOMContentLoaded", () => {
    const backToTopBtn = document.getElementById("backToTop");
    const quoteBox = document.getElementById("quote-box");
    const quotes = [
      "“When we do right, nobody remembers. When we do wrong, nobody forgets.”",
      "“We’re not a gang, we’re a club. But don’t mess with us.”",
      "“The freedom of the road is all the law we need.”",
      "“The 60s weren’t about peace for everyone.”"
    ];
  
// Back to Top Button functionality
const backToTopButton = document.getElementById('backToTop');

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
  

    let i = 1;
    setInterval(() => {
      quoteBox.textContent = quotes[i % quotes.length];
      i++;
    }, 5000);
  
  });
  