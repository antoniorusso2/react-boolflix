import { useContext } from 'react';
import { GlobalContext } from '../../globalContext';

import MediaList from '../MediaList/MediaList';

export default function MainContent() {
  const { films, tvSeries } = useContext(GlobalContext);

  return (
    <main>
      <section className="film-list">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Film</h2>
              <MediaList items={films} />
            </div>
          </div>
          {/* lista dei films */}
        </div>
      </section>

      {/* lista serie tv */}
      <section className="tv-series-list row">
        <div className="container">
          <h2>Serie Tv</h2>
          <MediaList items={tvSeries} />
        </div>
      </section>
    </main>
  );
}
