// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaBAnY0w7dt9WVHCgR2iJwEElTHDN8FoU",
  authDomain: "equipment-reservation-backend.firebaseapp.com",
  projectId: "equipment-reservation-backend",
  storageBucket: "equipment-reservation-backend.firebasestorage.app",
  messagingSenderId: "626026875338",
  appId: "1:626026875338:web:b15c2b6a24528cee932733",
  measurementId: "G-RV25BE55GC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



