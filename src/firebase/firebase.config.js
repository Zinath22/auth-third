// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDr2lNRMjaSJKEodZGWQo2Y_Dz9osK5d8A",
  authDomain: "auth-third-36577.firebaseapp.com",
  projectId: "auth-third-36577",
  storageBucket: "auth-third-36577.appspot.com",
  messagingSenderId: "787518907163",
  appId: "1:787518907163:web:32a7052795f793dc2de9be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;