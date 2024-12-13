/* eslint-disable react/prop-types */
//fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as filledStar } from '@fortawesome/free-solid-svg-icons';
import flags from '../../utilities/flags';
import placeholder from '../../assets/placeholder.jpg';

const BASE_IMG_URI = 'https://image.tmdb.org/t/p/';

export default function Card({ item }) {
  const { title, original_title, original_language, vote_average, backdrop_path } = item;
  const imgPath = `${BASE_IMG_URI}w342${backdrop_path}`;

  const vote = Math.ceil(vote_average / 2);
  const maxVote = 5;

  const numOfStars = [];

  for (let i = 0; i < maxVote; i++) {
    i < vote ? numOfStars.push(<FontAwesomeIcon icon={filledStar} />) : numOfStars.push(<FontAwesomeIcon icon={emptyStar} />);
  }

  return (
    <div className="card">
      <div className="card-thumb">
        <h3>{title}</h3>
        <img src={imgPath || placeholder} alt="" />
      </div>

      <div className="overlay details">
        <p className="title">Titolo: {title}</p>
        <p className="original-title">Titolo originale: {original_title}</p>
        <div className="language">
          <span>Lingua:</span> <img className="flag" src={flags[original_language]} alt="" />
        </div>
        <div className="ratings">
          <p>Voto {vote}</p>
          {numOfStars.map((star, index) => (
            <span key={index}>{star}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
