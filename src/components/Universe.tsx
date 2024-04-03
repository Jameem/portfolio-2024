import { useState } from 'react';
import { Loader } from './UniverseLoader';

export function Universe() {
  const [loading, setLoading] = useState(true);
  return (
    <div className='universe z-200 bg-primary'>
      <div className={`${loading ? 'invisible' : 'visible'} universe z-200`}>
        <iframe
          src='https://universe-portfolio.netlify.app/'
          width={'100%'}
          height={'100%'}
          onLoad={() => setLoading(false)}
        />
      </div>
      {loading && <Loader />}
    </div>
  );
}
