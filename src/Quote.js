import React, { useState, useEffect } from 'react';

function Quote() {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    setLoading(true);
    fetch('https://api.kanye.rest')
      .then(response => response.json())
      .then(data => {
        setQuote(data.quote);
        setLoading(false);
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Kanye Once Really Said:</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="quote-container">
        <p>"{quote}"</p>
      <img src="./signature.png" className="flash" alt="Colorful signature with a vibrant design."/>
        <button onClick={fetchQuote}>Give Me More</button>
      </div>
    )}
  </div>
);
}

export default Quote;
