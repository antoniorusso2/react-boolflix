/* eslint-disable react/prop-types */
import flags from '../utilities/flags';

export default function MediaList({ items }) {
  return (
    <ul>
      {items &&
        items.map((item) => (
          <li key={item.id} className="col">
            <h3>{item.title}</h3>
            <p className="title">Titolo: {item.title}</p>
            <p className="original-title">Titolo originale: {item.original_title}</p>
            <div className="language">
              <span>Lingua:</span> <img className="flag" src={flags[item.original_language]} alt="" />
            </div>
            <p className="ratings">Voto {item.vote_average}</p>
          </li>
        ))}
    </ul>
  );
}
