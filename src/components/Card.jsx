/* eslint-disable react/prop-types */
import flags from '../utilities/flags';

const BASE_IMG_URI = 'https://image.tmdb.org/t/p/';

export default function Card({ item }) {
  const { title, original_title, original_language, vote_average, backdrop_path } = item;
  return (
    <div className="card">
      <div className="card-thumb">
        <img src={`${BASE_IMG_URI}w342${backdrop_path}`} alt="" />
        poster film
      </div>

      <div className="overlay details">
        <h3>{title}</h3>
        <p className="title">Titolo: {title}</p>
        <p className="original-title">Titolo originale: {original_title}</p>
        <div className="language">
          <span>Lingua:</span> <img className="flag" src={flags[original_language]} alt="" />
        </div>
        <p className="ratings">Voto {vote_average}</p>
      </div>
    </div>
  );
}
