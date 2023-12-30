// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-fc99f.firebaseapp.com",
  projectId: "mern-estate-fc99f",
  storageBucket: "mern-estate-fc99f.appspot.com",
  messagingSenderId: "1082525288122",
  appId: "1:1082525288122:web:e03e2857a5581b49d26483",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
