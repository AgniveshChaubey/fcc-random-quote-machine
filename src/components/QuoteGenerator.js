import React, { useEffect, useState } from 'react'
export const QuoteGenerator = () => {

  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState('')

  useEffect(() => {
    async function fetchData() {
      const webResponse = await fetch("https://type.fit/api/quotes");
      const quotesList = await webResponse.json();

      setQuotes(randomQuote);
      let randomIndex = Math.floor(Math.random() * quotesList.length);
      setRandomQuote(quotesList[randomIndex]);
    }
    fetchData();
  }, [])
  console.log(quotes)

  return (
    <div id="quote-box" className='container bg-white mt-5'>
      <div className="row">
        <div id="text" className='col col-sm-12 pl-5 pr-5 pt-5 pb-2'>{
          randomQuote ? (
            <h3> <i className='fa-solid fa-quote-left'></i>{randomQuote.text}</h3>
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col"></div>
        <div id="author" className='col col-md-4'>
          {randomQuote ? (
            <h3>{`-${randomQuote.author}`}</h3>
          ) : (
            <h3>...</h3>
          )}
        </div>
      </div>
      <div className="row">
        <button id="new-quote" className=''>New quote</button>
        <a href="twitter.com/intent/tweet" id="tweet-quote"></a>
      </div>
    </div>
  )
}
