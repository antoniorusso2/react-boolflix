import axios from 'axios';
import { useEffect, useState } from 'react';
import { GlobalContext } from './globalContext';

import Header from './components/Header';
import MainContent from './components/MainContent';

import './App.css';

//axios headers con autenticazione tramite token bearer
const defaultOptions = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/search/movie',
  params: { include_adult: 'false', language: 'it-IT', page: '1', query: 'futuro' },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDllZDIwNzhiNGI0NzUxMjI0YzU4OWI2YjE5NzAzOSIsIm5iZiI6MTczMzk5ODg0OC4wODA5OTk5LCJzdWIiOiI2NzVhYjkwMDg5NjUzMGYyMGI5ZjNhMGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.tYEchyGbfeNL6g9FfKAsa5KLyxjnkZa_ogG_2_IZUJk',
  },
};

function App() {
  //options dinamiche in base ai parametri di ricerca
  const [options, setOptions] = useState(defaultOptions);

  //array di film risultato della ricerca
  const [films, setFilms] = useState([]);

  function fetchFilms() {
    axios
      .request(options)
      .then((res) => {
        console.log(res.data);
        setFilms(res.data.results);
      })
      .catch((err) => console.error(err));
  }

  useEffect(fetchFilms, []);

  console.log(films);
  return (
    <GlobalContext.Provider value={{ fetchFilms, films }}>
      <Header />
      <MainContent />
    </GlobalContext.Provider>
  );
}

export default App;
