// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWYFXAuDMfea_YLlnXrBdd7VQST6UaXSs",
  authDomain: "netflixgpt-d1f48.firebaseapp.com",
  projectId: "netflixgpt-d1f48",
  storageBucket: "netflixgpt-d1f48.appspot.com",
  messagingSenderId: "316801092997",
  appId: "1:316801092997:web:677a95e6aa7432aecd88ec",
  measurementId: "G-5JKHZXVXJT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export const auth = getAuth();
