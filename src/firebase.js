// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
import { getStorage } from "firebase/storage";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTgLHlZqkJOC9O_JMIIwxc7xGQYtAEni8",
  authDomain: "weather1-579da.firebaseapp.com",
  projectId: "weather1-579da",
  storageBucket: "weather1-579da.appspot.com",
  messagingSenderId: "234960326373",
  appId: "1:234960326373:web:62f9626837a76112c64e0c",
  measurementId: "G-B49WLV1MN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
const storage = getStorage(app)

export {auth, db, storage, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword}