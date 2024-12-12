import { useContext } from 'react';
import { GlobalContext } from '../globalContext';

export default function MainContent() {
  const { fetchFilms, films } = useContext(GlobalContext);
  // useEffect(fetchFilms, []);
  return (
    <main>
      <div className="container">
        <div className="row">
          {films.map((film) => (
            <div key={film.id} className="col">
              <ul>
                <li className="title">Titolo: {film.title}</li>
                <li className="original-title">Titolo originale: {film.original_title}</li>
                <li className="language">Lingua: {film.original_language}</li>
                <li className="ratings">Voto {film.vote_average}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
