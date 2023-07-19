// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAjEaeago43MD9K5SDCQOlhMGbO3tid98s",
  authDomain: "astrashop-521d9.firebaseapp.com",
  projectId: "astrashop-521d9",
  storageBucket: "astrashop-521d9.appspot.com",
  messagingSenderId: "183503655574",
  appId: "1:183503655574:web:c83f6fa9e1548b2ec3a8b7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)