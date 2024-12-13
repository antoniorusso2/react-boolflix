/* eslint-disable react/prop-types */
import Card from '../Card/Card';

export default function MediaList({ items }) {
  return (
    <>
      <ul className="medias-cards">
        {items &&
          items.map((item) => (
            <li key={item.id} className="col">
              <Card item={item} />
            </li>
          ))}
      </ul>

      {/* <div className="pages">

      </div> */}
    </>
  );
}
