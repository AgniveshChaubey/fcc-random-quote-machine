import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import colors from './colors';

export const QuoteGenerator = () => {

  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState('')
  const [color, setColor] = useState('SandyBrown');

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

  const handleClick = () => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    // var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    // setColor(randomColor);
    let colorIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[colorIndex]);
    setRandomQuote(quotes[randomIndex]);
  }

  console.log(quotes)

  return (
    <>
      <div className='d-flex justify-content-center d-flex align-items-center' style={{ backgroundColor: color, minHeight: '100vh' }}>
        <div id="quote-box" className='container bg-white mt-5 p-5 rounded border border-5 border-dark' style={{ color: color }}>
          <div className="row">
            <div id="text" className='col col-sm-12 pb-3'>{
              randomQuote ? (
                <h3 className='text-center'><FontAwesomeIcon icon={faQuoteLeft} style={{ color: '' }} /> {randomQuote.text}</h3>
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
              <a className='btn' style={{ backgroundColor: color, color: 'white' }}
                // href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + encodeURIComponent(
                //   '"' + randomQuote.text + '" ' + randomQuote.author)}
                href='twitter.com/intent/tweet'
                id="tweet-quote"><FontAwesomeIcon icon={faTwitter} /></a>
            </div>
            <div className="col-md-3 text-left">
              <button id="new-quote" className='p-2 rounded' style={{ backgroundColor: color, color: 'white' }} onClick={handleClick}>New quote</button>
            </div>
          </div>
        </div>
      </div>
      <p className='text-center mt-4'>-by Agnivesh</p>
    </>

  )
}
