import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebase';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';

export async function signIn() {
  const firebaseUserEmail = import.meta.env.VITE_APP_FIREBASE_USER_EMAIL;
  const firebaseUserPassword = import.meta.env.VITE_APP_FIREBASE_USER_PASSWORD;

  await signInWithEmailAndPassword(
    auth,
    firebaseUserEmail,
    firebaseUserPassword
  );
}

export async function getVisitorCount() {
  const portfolioVisitCollection = collection(db, 'portfolio_visits');

  const data = await getDocs(portfolioVisitCollection);
  const visits = data.docs.find((doc) => doc.id === 'visits');

  return visits?.get('count');
}

export async function setVisitorCount(count: number) {
  const portfolioVisitCollection = collection(db, 'portfolio_visits');
  await setDoc(doc(portfolioVisitCollection, 'visits'), {
    count: +count + 1,
  });
}

export function hasVisitorSession() {
  if (sessionStorage.getItem('visit') !== null) {
    return true;
  }
  sessionStorage.setItem('visit', '');
  return false;
}
