// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "portfolio-a0a31.firebaseapp.com",
  projectId: "portfolio-a0a31",
  storageBucket: "portfolio-a0a31.appspot.com",
  messagingSenderId: "183467333526",
  appId: "1:183467333526:web:9e55156149062627d26fb7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Database instance
const db = getFirestore(app);
export default db;

