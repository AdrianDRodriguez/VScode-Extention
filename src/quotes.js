const quotes = [
  "Code is like humor. When you have to explain it, it’s bad. – Cory House",
  "Simplicity is the soul of efficiency. – Austin Freeman",
  "The best way to predict the future is to create it. – Alan Kay",
  "Talk is cheap. Show me the code. – Linus Torvalds"
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

module.exports = { getRandomQuote };