

//an array of objects the stores the data for my quotes//
const quotes = [
  {quote: "Learning never exhausts the mind.", source: "Leonardo da Vinci", citation: "Leonardo da Vinci Quotes.", year: "1510" },
  {quote: "It is far better to be alone, than to be in bad company.", source: "George Washington", year: "1780"},
  {quote: "Honesty is the first chapter in the book of wisdom.", source: "Francis of Assisi", year: "1220"},
  {quote: "There is only one corner of the universe you can be certain of improving, and that's your own self.", source: "Aldous Huxley", year: "1955"},
  {quote: "Problems are not stop signs, they are guidelines.", source: "Robert H. Schuller", year: "1966"},
];

// a function to make sure my quotes are returned randomly//
function getRandomQuote() {
  var randomQuote = quotes[Math.floor( Math.random() * quotes.length)];
  return randomQuote;
};

// a function where I concatenate the html, so I can print each quote to the screen//
function printQuote() {
  var random = getRandomQuote();
  var quoteHTML = ''
  quoteHTML += '<p class="quote">' + random.quote + '</p>';
  quoteHTML += '<p class="source">' + random.source;

  if (random.citation) {
    '<span class="citation">' + random.citation + '</span>'
  }
  if (random.year) {
    '<span class="year">' + random.year + '</span>'
  }
  quoteHTML += '</p>';
  var quoteBox = document.getElementById('quote-box');
  quoteBox.innerHTML = quoteHTML;
};




// this activates the show another quote button//

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
