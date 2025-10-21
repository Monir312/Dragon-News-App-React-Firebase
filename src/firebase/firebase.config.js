// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi8qJBemmYG4gcO-XS0Gb8dCBkQzffBg8",
  authDomain: "dragon-news-auth-2e3b8.firebaseapp.com",
  projectId: "dragon-news-auth-2e3b8",
  storageBucket: "dragon-news-auth-2e3b8.firebasestorage.app",
  messagingSenderId: "543833255873",
  appId: "1:543833255873:web:2ce3f6ae36df21a4938940"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;