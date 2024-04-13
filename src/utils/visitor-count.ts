import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebase';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';

interface Visitor {
  city: string;
  country: string;
  country_name: string;
  latitude: string;
  longitude: string;
  region: string;
  ip: string;
  date: Date;
}

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

export async function setVisitorInfo(visitor: Visitor) {
  await setDoc(doc(db, 'vistors', visitor.ip), { visitor });
}

export function hasVisitorSession() {
  if (sessionStorage.getItem('visit') !== null) {
    return true;
  }
  sessionStorage.setItem('visit', '');
  return false;
}

export async function isItMyIPAddress() {
  const ipAddress = await fetch(' https://api.ipify.org/?format=json');
  const ip = await ipAddress.json();

  if (ip?.ip === import.meta.env.VITE_APP_MY_IP) {
    return true;
  }

  return false;
}

export async function getVisitorDetails(): Promise<Visitor> {
  const response = await fetch('https://ipapi.co/json/');
  const visitor = await response.json();
  const { city, country, country_name, latitude, longitude, region, ip } =
    visitor;

  return {
    city,
    country,
    country_name,
    latitude,
    longitude,
    region,
    ip,
    date: new Date(),
  };
}
