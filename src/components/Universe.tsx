import { useState } from 'react';

export function Universe() {
  const [loading, setLoading] = useState(true);
  return (
    <div className='universe z-200'>
      <iframe
        src='https://universe-portfolio.netlify.app/'
        width={'100%'}
        height={'100%'}
        onLoad={() => setLoading(false)}
      />
      {loading && <div className='loading'>Loading...</div>}
    </div>
  );
}
