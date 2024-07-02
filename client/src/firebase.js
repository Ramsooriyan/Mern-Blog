// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-blog-ff3df.firebaseapp.com",
  projectId: "mern-blog-ff3df",
  storageBucket: "mern-blog-ff3df.appspot.com",
  messagingSenderId: "583478990889",
  appId: "1:583478990889:web:396fb0c26311fa06f2e438"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);