import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOQZzdD74Vh30ELLWMYR65-fZ9AMNjimI",
  authDomain: "hackathon-3062b.firebaseapp.com",
  projectId: "hackathon-3062b",
  storageBucket: "hackathon-3062b.appspot.com",
  messagingSenderId: "647332803986",
  appId: "1:647332803986:web:74b5ae5856467aeaaebd4b"
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore();