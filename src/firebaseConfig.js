// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY, // "AIzaSyAjEaeago43MD9K5SDCQOlhMGbO3tid98s"
  authDomain: import.meta.env.VITE_AUTHDOMAIN, // "astrashop-521d9.firebaseapp.com"
  projectId: import.meta.env.VITE_PROJECTID, // "astrashop-521d9"
  storageBucket: import.meta.env.VITE_STORAGEBUCKET, // "astrashop-521d9.appspot.com"
  messagingSenderId: import.meta.env.VITE_MESSAGING, // "183503655574"
  appId: import.meta.env.VITE_APPID // "1:183503655574:web:c83f6fa9e1548b2ec3a8b7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)