const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const newQuoteBtn = document.getElementById('new-story');
const loader = document.getElementById('loader')

let apiQuotes = [];

function loading() {
    loader.hidden
}

function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    if (quote.text.length > 50) {
        quoteText .classList.add('long-quote');
    } else {
        quoteText .classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
}

// get quotes from api
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {

    }
}

getQuotes();

//event listeners
newQuoteBtn.addEventListener('click', newQuote);

// Below for local json

// function newQuote() {
//     const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
//     console.log(quote)
// }

// newQuote();
