import { useContext } from 'react';
import { GlobalContext } from '../globalContext';

import flags from '../utilities/flags';

export default function MainContent() {
  const { films, tvSeries } = useContext(GlobalContext);

  return (
    <main>
      <div className="container">
        <div className="row">
          {/* lista dei films */}
          <div className="film-list">
            <h2>Film</h2>

            {/* map array films */}
            {films &&
              films.map((film) => (
                <div key={film.id} className="col">
                  <ul>
                    <h3>{film.title}</h3>
                    <li className="title">Titolo: {film.title}</li>
                    <li className="original-title">Titolo originale: {film.original_title}</li>
                    <li className="language">
                      <span>Lingua:</span> <img className="flag" src={flags[film.original_language]} alt="" />{' '}
                    </li>
                    <li className="ratings">Voto {film.vote_average}</li>
                  </ul>
                </div>
              ))}
          </div>

          {/* lista serie tv */}
          <div className="tv-series-list">
            <h2>Serie Tv</h2>

            {/* map array films */}
            {tvSeries &&
              tvSeries.map((serie) => (
                <div key={serie.id} className="col">
                  <ul>
                    <h3>{serie.title}</h3>
                    <li className="title">Titolo: {serie.title}</li>
                    <li className="original-title">Titolo originale: {serie.original_title}</li>
                    <li className="language">
                      <span>Lingua:</span> <img className="flag" src={flags[serie.original_language]} alt="" />
                    </li>
                    <li className="ratings">Voto {serie.vote_average}</li>
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
