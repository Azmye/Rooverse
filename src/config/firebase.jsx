import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyARxPcjlLS7iCnSIZbqhYswiRc1vO5EsEM',
  authDomain: 'rooverse-4db3a.firebaseapp.com',
  projectId: 'rooverse-4db3a',
  storageBucket: 'rooverse-4db3a.appspot.com',
  messagingSenderId: '957708752611',
  appId: '1:957708752611:web:b8d018c71fc8c8e0ed17d6',
  measurementId: 'G-NH64KFKSG1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
