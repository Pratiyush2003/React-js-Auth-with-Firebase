// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOcXpvlzJqYCIV4r4VgrGFGeBsoXGKPH8",
  authDomain: "react-firebase-authentic-d7678.firebaseapp.com",
  projectId: "react-firebase-authentic-d7678",
  storageBucket: "react-firebase-authentic-d7678.appspot.com",
  messagingSenderId: "1087988258369",
  appId: "1:1087988258369:web:092b56068934771669d8c0",
  measurementId: "G-DRB62N40XN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
