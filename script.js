const quotesArray = [
  {
    author: "Jake, Adventure Time",
    quote: "Dude, sucking at something is the first step towards being sort of good at something."
  },
  {
    author: "Ratchet, Ratchet & Clank",
    quote: "You don't have to do big things to be a hero, Quark; just the right things."
  },
  {
    author: "Riku, Kingdom Hearts",
    quote: "A good friend will see you for who you are, no matter what face you wear."
  },
  {
    author: "Winnie the Pooh",
    quote: " You're brave than you believe, stronger than you seem, and smarter than you think."
  },
  {
    author: "Jim, The Office",
    quote: "Bears. Beets. Battlestar Galactica."
  }
];

let quoteText = '';
let quoteAuthor = '';
let randomIndex = Math.floor(Math.random() * quotesArray.length);

function getRandomQuote () {
  console.log(quotesArray[randomIndex]);
  return quotesArray[randomIndex];
}

function newQuote() {
  let randomQuote = getRandomQuote();
  let quoteText = randomQuote.quote;
  let quoteAuthor = randomQuote.author;

  
}