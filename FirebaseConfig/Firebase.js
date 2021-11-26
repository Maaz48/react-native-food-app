import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  addDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCdQ3R1-4ytzhAQAPLf1zh0agyp_pwkvfM",
  authDomain: "foodapp-98.firebaseapp.com",
  projectId: "foodapp-98",
  storageBucket: "foodapp-98.appspot.com",
  messagingSenderId: "715613627260",
  appId: "1:715613627260:web:58b51f7ab6cc89dfcabaf9",
  // measurementId: "G-ZR6W70L1ET",
});

const auth = getAuth();
const db = getFirestore();

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  db,
  doc,
  setDoc,
  getDoc,
  addDoc,
  collection,
  getDocs,
  query,
  where,
};
