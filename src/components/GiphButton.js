import { useState } from 'react';

function GiphButton() {

  const [gifUrl, setGifUrl] = useState(''); 

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(null);

  const fetchRandomGif = async () => {

    try {

      const apiKey = 'qdSrrSmW0BDHE4IuxiZiKBMXjYos76e6'; 

      const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`);

      const data = await response.json();

      setGifUrl(data.data.images.original.url);

    } catch (error) {

      console.error('Error fetching GIF:', error);

      setError('Failed to fetch GIF. Please try again.');

    } finally {

      setIsLoading(false);
      
    }
  };


  return (
    <div>
      <button onClick={fetchRandomGif} disabled={isLoading}>
        {isLoading ? 'Loading GIF...' : 'Get Random GIF'}
      </button>
      {gifUrl && <img src={gifUrl} alt="Random GIF" />}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default GiphButton;
