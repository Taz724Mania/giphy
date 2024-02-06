import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import './App.css';

function App() {

  const [gifUrl, setGifUrl] = useState({})
  const apiKey = 'qdSrrSmW0BDHE4IuxiZiKBMXjYos76e6'
  const getGiph = async () => {
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`

      //get the data

      const response = await fetch(url)
      const data = await response.json()
      setGifUrl(data.data.images.original)
  }


  return (
    <div className="App">
      <Header/>
      <Main randoGif={getGiph}/>
      <Footer/>
    </div>
  );
}

export default App;
