function toggleTimeline() {
  const extraItems = document.querySelectorAll('.extra');
  const btn = document.querySelector('.toggle-btn');

  extraItems.forEach(item => {
    item.style.display = (item.style.display === 'list-item') ? 'none' : 'list-item';
  });

  btn.innerText = (btn.innerText === "Show More") ? "Show Less" : "Show More";
}

const quotes = [
  "“When we do right, nobody remembers. When we do wrong, nobody forgets.”",
  "“We’re the one percent that don’t fit and don’t care.”",
  "“Ride fast, live free. That’s the code.”",
  "“It wasn’t about crime. It was about freedom.”",
  "“We didn’t start trouble. We finished it.”",
  "“Being a Hell’s Angel isn’t about just the ride. It’s about the lifestyle.”",
  "“Live to ride, ride to live.”",
  "“Freedom is the only thing that matters.”",
  "“We don’t follow the law; we make our own.”",
  "“The road is my home. My brothers are my family.”",
  "“We live our lives by our own rules, not by the system.”",
  "“No one tells us what to do. We do what we want, when we want.”",
  "“Our reputation is built on loyalty, brotherhood, and respect.”",
  "“The world can try to change us, but we’ll never change who we are.”",
  "“We are the true rebels. The outsiders. The ones who live free.”"
];

let currentQuote = 0;
const quoteBox = document.getElementById("quote-text");

setInterval(() => {
  currentQuote = (currentQuote + 1) % quotes.length;
  quoteBox.style.opacity = 0;
  setTimeout(() => {
    quoteBox.textContent = quotes[currentQuote];
    quoteBox.style.opacity = 1;
  }, 500);
}, 5000);

// Back to top functionality
const backToTopBtn = document.getElementById("backToTop");

window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

backToTopBtn.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

