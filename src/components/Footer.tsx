import { useEffect, useState } from 'react';
import {
  getVisitorCount,
  hasVisitorSession,
  setVisitorCount,
  signIn,
} from '../utils/visitor-count';

export function Footer() {
  const [visitCount, setVisitCount] = useState(0);
  const firebaseUserEmail = import.meta.env.VITE_APP_FIREBASE_USER_EMAIL;
  const firebaseUserPassword = import.meta.env.VITE_APP_FIREBASE_USER_PASSWORD;

  useEffect(() => {
    async function visitor() {
      await signIn();

      const count = await getVisitorCount();
      if (count) {
        setVisitCount(+count);
      }

      if (!hasVisitorSession() && count) {
        await setVisitorCount(+count);
      }
    }

    visitor();
  }, [firebaseUserEmail, firebaseUserPassword]);

  return (
    <div
      className={`px-6 w-full flex  justify-between py-3 bottom-0  z-20 bg-black-100`}
    >
      <small>Copyright &#169; {new Date().getFullYear()} Jameem Mohammed</small>
      <small>
        Visitors: <b className='pink-text-gradient'>{visitCount}</b>
      </small>
    </div>
  );
}
