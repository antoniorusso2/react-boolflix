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
            <h2 className="col-12">Film</h2>
            <MediaList items={films} />
          </div>
          {/* lista dei films */}
        </div>
      </section>

      {/* lista serie tv */}
      <section className="tv-series-list">
        <div className="container">
          <div className="row">
            <h2 className="col-12">Serie Tv</h2>
          </div>
          <MediaList items={tvSeries} />
        </div>
      </section>
    </main>
  );
}
