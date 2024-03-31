// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2Upk-6Q8xTB2P5jStWnyeuoO5wH9IF7Y",
  authDomain: "simple-firebase-c7624.firebaseapp.com",
  projectId: "simple-firebase-c7624",
  storageBucket: "simple-firebase-c7624.appspot.com",
  messagingSenderId: "773161229246",
  appId: "1:773161229246:web:d62fd5da06906bf60737ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app