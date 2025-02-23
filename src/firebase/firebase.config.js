// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjbkV9E4pDrad9u5w-7BacPGkF4O-lOW0",
  authDomain: "task-pulse-77fb0.firebaseapp.com",
  projectId: "task-pulse-77fb0",
  storageBucket: "task-pulse-77fb0.firebasestorage.app",
  messagingSenderId: "810431244094",
  appId: "1:810431244094:web:582eccdf7a2bb0d7dcae6f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
