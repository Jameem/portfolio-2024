import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const apiKey = import.meta.env.VITE_APP_FIREBASE_API_KEY;
const authDomain = import.meta.env.VITE_APP_FIREBASE_DOMAIN;
const databaseURL = import.meta.env.VITE_APP_FIREBASE_DATABASE;
const projectId = import.meta.env.VITE_APP_FIREBASE_PROJECT;
const storageBucket = import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET;
const messagingSenderId = import.meta.env.VITE_APP_FIREBASE_MESSAGE_SENDER;
const appId = import.meta.env.VITE_APP_FIREBASE_APP_ID;
const measurementId = import.meta.env.VITE_APP_FIREBASE_MEASUREMENT;

const firebaseConfig = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { auth, db };
