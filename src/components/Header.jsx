import { useState } from 'react';

export default function Header() {
  const [search, setSearch] = useState('');

  function handleSearch(e) {
    const value = e.target.value;

    setSearch(value);
  }

  // console.log(search);
  return (
    <header>
      <div className="container">
        <nav>
          <div className="serchbar">
            <input onChange={handleSearch} type="text" id="search" name="search" value={search} />
            <button className="btn search">Cerca</button>
          </div>
        </nav>
      </div>
    </header>
  );
}
