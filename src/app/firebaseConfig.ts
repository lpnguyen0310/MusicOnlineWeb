// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbRF5_GfRW6W-S1iN2ZEsjlwbJ5Q8w6HI",
  authDomain: "project-5-eba0d.firebaseapp.com",
  databaseURL: "https://project-5-eba0d-default-rtdb.firebaseio.com",
  projectId: "project-5-eba0d",
  storageBucket: "project-5-eba0d.firebasestorage.app",
  messagingSenderId: "965530659760",
  appId: "1:965530659760:web:0c6b7de38c5a12aae94475"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dbFirebase = getDatabase(app);