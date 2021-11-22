import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyCyT8ywSEGQeBUlEdDNt6r0f66B20wle48",
  authDomain: "react-tecnologia.firebaseapp.com",
  projectId: "react-tecnologia",
  storageBucket: "react-tecnologia.appspot.com",
  messagingSenderId: "531684875112",
  appId: "1:531684875112:web:27402326a7315f861ed4dd"
};


initializeApp(firebaseConfig);

export const db = getFirestore();