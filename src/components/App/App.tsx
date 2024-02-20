import { useState, useEffect } from 'react';
import chuck from '../../assets/chuck.svg';
import Widget from '../Widget/Widget';
import './App.scss';
import axios from 'axios';
function App() {
  interface joke {
    icon_url: string;
    id: string;
    url: string;
    value: string;
  }
  interface IJokeList {
    jokes: joke[];
  }

  const [joke, setJoke] = useState<[] | IJokeList[]>([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        'https://api.chucknorris.io/jokes/random'
      );
      setTimeout(() => {
        setJoke(response.data);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };
  const handleNewJoke = () => {
    setLoading(true);
    setTimeout(() => {
      fetchJokes(); // Appel de fetchJoke à chaque clic sur le bouton
    }, 1000);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={chuck} className="App-logo" alt="logo" />
      </header>
      <Widget onClick={handleNewJoke} joke={joke} loading={loading} />
    </div>
  );
}

export default App;
