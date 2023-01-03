import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

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

  const handleClick = ()=>{
    
  }

  console.log(quotes)

  return (
    <>
    <div id="quote-box" className='container bg-white mt-5 p-5 rounded'>
      <div className="row">
        <div id="text" className='col col-sm-12 pb-3'>{
          randomQuote ? (
            <h3 className='text-center'><FontAwesomeIcon icon={faQuoteLeft} /> {randomQuote.text}</h3>
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </div> 
      <div className="row">
        <div className="col"></div>
        <div id="author" className='col col-md-3'>
          {randomQuote ? (
            <p>{`-${randomQuote.author}`}</p>
          ) : (
            <h3>...</h3>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <a href="twitter.com/intent/tweet" id="tweet-quote"><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
        <div className="col-md-3 text-left">
          <button id="new-quote" className='' onClick={handleClick}>New quote</button>
        </div>
      </div>
    </div> <p className='text-center mt-4'>by Agnivesh</p>
    </>
  )
}
