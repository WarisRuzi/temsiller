const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');




// Show loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// remove loading spinner
function compelte() {
    if (!loader.hidden) {
        quoteContainer.hidden = false;
        loader.hidden = true;
    }
}

// Hide Loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// Yengy Neqil Korunushi
function newQuote(){
    loading();
    // temsilni menbedin ixtiyari tallash (apiQuotes array)
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
   //authorText.textContent = quote.author;
    // Aptor ismi orni
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    }else {
        authorText.textContent = quote.author;
    }
    //temsil uzunluqini tekshuresh / Check Quote length to determine styling
    if (quote.text.left > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    // set quote, hide loader //hikimetler . loaderni yoshurush
    quoteText.textContent = quote.text;
    complete();

}
// Api Qubul Qilish Menbe
 async function getQuotes() {
    loading();
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
       // console.log(apiQuotes[12]);
        newQuote();
    }catch (error) {
        // Hataliq Uchuri  Bu yerde
    }
}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent
    }`;
    window.open(twitterUrl, '_blank');
}

// Tizimlik
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuotes();


