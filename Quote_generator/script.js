const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

// //show Loading
// function loading(){
//     loader.hidden = false;
//     quoteContainer.hidden = true;
// }
//hide loading
// function complete(){
//     quoteContainer.hidden = false;
//     loader.hidden = true;
// }

// Show new quote
function newQuote() {
    //loading();
    // pick a random quote from apiQuotes array
    // const quote = localQuotes[Math.floor(Math.random()*localQuotes.length)]; // from loca storage
    const quote = apiQuotes[Math.floor(Math.random()*localQuotes.length)];
    // authorText.textContent = quote.author;
    // quoteText.textContent = quote.text;
    //console.log(quote);

    if(!quote.author){
        authorText.textContent = 'Unknown';
    }
    else{
        authorText.textContent = quote.author;
    }

    //Check quote length to determine styling
    if(quote.text.length > 120){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
    //complete();
}


// .....................................
// Get quotes From Api
async function getQuotes(){
    //loading();
    const apiUrl = 'https://type.fit/api/quotes';
    try{
       const response = await fetch(apiUrl);
       apiQuotes = await response.json();
       //console.log(apiQuotes[22]);
       newQuote();
    }
    catch(err){
        console.log(err);
        // catch error here
    }
}

// Tweet Quotes
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=
    ${quoteText.textContent} - ${authorText.textContent}`;

    window.open(twitterUrl, '_blank');
}

// Event Listeners 
newQuoteBtn.addEventListener('click' , newQuote);
twitterBtn.addEventListener('click',tweetQuote);


// On Load
//loading();
getQuotes();

// newQuote();  // function call for fetching data from local storage.......