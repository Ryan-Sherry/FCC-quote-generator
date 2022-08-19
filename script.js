window.onload = init;
function init() {
  newQuote();
}

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

const colorArray = [
  "rgb(55, 207, 245)",
  "rgb(253, 69, 37)",
  "rgba(90, 224, 49, 0.966)",
  "rgba(148, 56, 148, 0.87)",
  "rgb(245, 245, 0)",
  "rgb(245, 179, 58)",
  "rgb(51, 94, 151)",
  "rgb(207, 109, 191)"
];

function newQuote() {
  let randomIndex = Math.floor(Math.random() * quotesArray.length);
  let randomQuote = quotesArray[randomIndex];
  let quoteText = randomQuote.quote;
  let quoteAuthor = randomQuote.author;
  
  let originalTwitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&text=";
  let quoteInApi = quoteText.replace(/ /g, "%20");
  let authorInApi = quoteAuthor.replace(/ /g, "%20");

  let twitterLink = originalTwitterLink + '"' + quoteInApi + '" ' + "~ " + authorInApi;

  document.getElementById("tweet-quote").href = twitterLink;
  document.getElementById("text").innerText = `"${quoteText}"`;
  document.getElementById("author").innerText = `~ ${quoteAuthor}`;
  newColors();
}

function newColors() {
  let colorIndex = Math.floor(Math.random() * colorArray.length);
  let randomColor = colorArray[colorIndex];
  let colorsOne = document.getElementsByClassName("background-change");
  let colorsTwo = document.getElementsByClassName("color-change");
  
  for (let i=0; i<colorArray.length; i++) {
    colorsOne[i].style.backgroundColor = randomColor;
  }
  for (let i=0; i<colorArray.length; i++) {
    colorsTwo[i].style.color = randomColor;
  }
}