/* eslint-disable react/prop-types */
//fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as filledStar } from '@fortawesome/free-solid-svg-icons';

import flags from '../../utilities/flags';
import placeholder from '../../assets/placeholder.jpg';

import style from './Card.module.css';

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
    <>
      <h3 className={style.title}>{title}</h3>
      <div className={style.card}>
        <div className={style.thumb}>
          <img className={style.img} src={backdrop_path ? imgPath : placeholder} alt="" />
        </div>

        <div className={style.overlay}>
          <p className={style.media_title}>Titolo: {title}</p>
          <p className={style.original_title}>Titolo originale: {original_title}</p>
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
    </>
  );
}
