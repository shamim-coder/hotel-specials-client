// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4vWtk0McaDbNUHokFNz2h1kxfmz0IfyU",
    authDomain: "hotel-booking-sk.firebaseapp.com",
    projectId: "hotel-booking-sk",
    storageBucket: "hotel-booking-sk.appspot.com",
    messagingSenderId: "598970587804",
    appId: "1:598970587804:web:5b87279601c0345de52b59",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
