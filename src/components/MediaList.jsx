/* eslint-disable react/prop-types */
import flags from '../utilities/flags';

export default function MediaList({ item }) {
  return (
    <ul>
      {item &&
        item.map((film) => (
          <div key={film.id} className="col">
            <h3>{film.title}</h3>
            <li className="title">Titolo: {film.title}</li>
            <li className="original-title">Titolo originale: {film.original_title}</li>
            <li className="language">
              <span>Lingua:</span> <img className="flag" src={flags[film.original_language]} alt="" />
            </li>
            <li className="ratings">Voto {film.vote_average}</li>
          </div>
        ))}
    </ul>
  );
}
