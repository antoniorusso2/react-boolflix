import { useContext } from 'react';
import { GlobalContext } from '../../globalContext';
import style from './MainContent.module.css';

import MediaList from '../MediaList/MediaList';

export default function MainContent() {
  const { films, tvSeries } = useContext(GlobalContext);

  return (
    <main>
      <section className="film-list">
        <div className="container">
          <div className="row">
            <h2 className={style.section_title}>Film</h2>
            <MediaList items={films} />
          </div>
          {/* lista dei films */}
        </div>
      </section>

      {/* lista serie tv */}
      <section className="tv-series-list">
        <div className="container">
          <div className="row">
            <h2 className={style.section_title}>Serie Tv</h2>
            <MediaList items={tvSeries} />
          </div>
        </div>
      </section>
    </main>
  );
}
