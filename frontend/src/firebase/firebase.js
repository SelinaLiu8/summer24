// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxJfcblqFiVc_ExmVOo1awgMQptHjoJGU",
  authDomain: "summer-24-5b4da.firebaseapp.com",
  projectId: "summer-24-5b4da",
  storageBucket: "summer-24-5b4da.appspot.com",
  messagingSenderId: "749397049667",
  appId: "1:749397049667:web:b37a0fd882a8cb8340aff6",
  measurementId: "G-75JDGKNH5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, firestore, auth };