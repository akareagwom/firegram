// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-05BZLc0TrY5z0QGnsE5Lok9AaRzq2VM",
  authDomain: "firegram-c0fc4.firebaseapp.com",
  projectId: "firegram-c0fc4",
  storageBucket: "firegram-c0fc4.appspot.com",
  messagingSenderId: "1021554210007",
  appId: "1:1021554210007:web:f65cfdcc23004770852c92",
  measurementId: "G-LRZTWB8L9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
