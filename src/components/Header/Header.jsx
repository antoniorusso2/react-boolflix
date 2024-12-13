import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../globalContext';
import axios from 'axios';

//import utilities
import formatTvData from '../../utilities/format-tv-response';
import { defaultFilmOptions, defaultTvSeriesOptions } from '../../utilities/default-request-options';

export default function Header() {
  const [filmOptions, setFilmOptions] = useState(defaultFilmOptions);
  const [tvSeriesOptions, setTvSeriesOptions] = useState(defaultTvSeriesOptions);

  const { setFilms, setTvSeries } = useContext(GlobalContext);

  //axios fetch
  function fetchMedia() {
    axios
      .request(filmOptions)
      .then((res) => {
        console.log(res.data);
        setFilms(res.data.results);
      })
      .catch((err) => console.error(err));

    axios
      .request(tvSeriesOptions)
      .then((res) => {
        const formattedData = formatTvData(res.data.results);
        setTvSeries(formattedData);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  }

  function handleSearch(e) {
    const value = e.target.value;
    setSearch(value);
  }

  //al click imposta i valori delle variabili di stato
  function onSearch() {
    setFilmOptions({
      ...filmOptions,
      params: {
        ...filmOptions.params,
        query: search,
      },
    });

    setTvSeriesOptions({
      ...tvSeriesOptions,
      params: {
        ...tvSeriesOptions.params,
        query: search,
      },
    });
  }

  //searchbar
  const [search, setSearch] = useState('');

  useEffect(fetchMedia, [setFilms, setTvSeries, filmOptions, tvSeriesOptions]);

  return (
    <header>
      <div className="container">
        <nav>
          <div className="serchbar">
            <input onChange={handleSearch} type="text" id="search" name="search" value={search} />
            <button onClick={onSearch} className="btn search">
              Cerca
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
