import { useState } from 'react';
import { GlobalContext } from './globalContext';

import Header from './components/Header/Header.jsx';
import MainContent from './components/MainContent/MainContent.jsx';

import './App.css';

//axios headers con autenticazione tramite token bearer

function App() {
  //array di film risultato della ricerca
  const [films, setFilms] = useState([]);
  const [tvSeries, setTvSeries] = useState([]);

  return (
    <GlobalContext.Provider value={{ films, setFilms, tvSeries, setTvSeries }}>
      <Header />
      <MainContent />
    </GlobalContext.Provider>
  );
}

export default App;
