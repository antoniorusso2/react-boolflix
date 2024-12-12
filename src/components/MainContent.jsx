import { useContext } from 'react';
import { GlobalContext } from '../globalContext';

export default function MainContent() {
  const { films } = useContext(GlobalContext);

  const flags = {
    it: 'src/assets/flags/italy.png',
    en: 'src/assets/flags/england.jpg',
    de: 'src/assets/flags/germany.png',
    es: 'src/assets/flags/spain.png',
    kr: 'src/assets/flags/korea.png',
    cn: 'src/assets/flags/korea.jpg',
  };

  return (
    <main>
      <div className="container">
        <div className="row">
          <ul>
            <h2>Films</h2>
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
          </ul>
        </div>
      </div>
    </main>
  );
}
