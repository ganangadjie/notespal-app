import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// import {GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDza0oYhYx2PHLRhQBq3j8H0IHpIqENuzc",
  authDomain: "notes-app-1a56b.firebaseapp.com",
  projectId: "notes-app-1a56b",
  storageBucket: "notes-app-1a56b.appspot.com",
  messagingSenderId: "733260807822",
  appId: "1:733260807822:web:62659589f738ecd479d3df",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// export const googleauth = GoogleAuthProvider(app);