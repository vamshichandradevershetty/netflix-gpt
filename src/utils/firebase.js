// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  authDomain: "netflixgpt-afd1c.firebaseapp.com",
  projectId: "netflixgpt-afd1c",
  storageBucket: "netflixgpt-afd1c.firebasestorage.app",
  messagingSenderId: "123855730079",
  appId: "1:123855730079:web:49e93a5e018d378bae79aa",
  measurementId: "G-T3S4WBCYN8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
