// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCj7kvYr72sxAxQFuS3JAY7EZucgu0ia2w",
    authDomain: "sivantest-e894a.firebaseapp.com",
    databaseURL: "https://sivantest-e894a-default-rtdb.firebaseio.com",
    projectId: "sivantest-e894a",
    storageBucket: "sivantest-e894a.appspot.com",
    messagingSenderId: "396507723807",
    appId: "1:396507723807:web:39352fffd4eef59c57fd2a",
    measurementId: "G-G7PTZLNH24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
