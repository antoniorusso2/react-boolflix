/* eslint-disable react/prop-types */
import Card from '../Card/Card';

import style from './MediaList.module.css';

export default function MediaList({ items }) {
  return (
    <>
      <ul className={style.list}>
        {items &&
          items.map((item) => (
            <li key={item.id} className={style.card_wrap}>
              <Card item={item} />
            </li>
          ))}
      </ul>

      {/* <div className="pages">

      </div> */}
    </>
  );
}
