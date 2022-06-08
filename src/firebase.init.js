// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_APP_apiKey,
    authDomain: process.env.FIREBASE_APP_authDomain,
    projectId: process.env.FIREBASE_APP_projectId,
    storageBucket: process.env.FIREBASE_APP_storageBucket,
    messagingSenderId: process.env.FIREBASE_APP_messagingSenderId,
    appId: process.env.FIREBASE_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
