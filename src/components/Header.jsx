import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../globalContext';

export default function Header() {
  // const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');

  const { fetchFilms, options, setOptions } = useContext(GlobalContext);
  //searchbar
  // const [search, setSearch] = useState('');

  useEffect(fetchFilms, [options]);

  function handleSearch(e) {
    const value = e.target.value;
    setSearch(value);
    // setSearch(filter);
    console.log('set filter');
  }

  function onSearch() {
    setOptions({
      ...options,
      params: {
        ...options.params,
        query: search,
      },
    });

    console.log('set search e options');
  }

  console.log(search);
  console.log(options);

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
