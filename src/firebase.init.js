// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBH_qMBUksgyExuzudWYO1pznBpKob8QCE",
    authDomain: "red-onion-ef76a.firebaseapp.com",
    projectId: "red-onion-ef76a",
    storageBucket: "red-onion-ef76a.appspot.com",
    messagingSenderId: "668641869147",
    appId: "1:668641869147:web:9422d6f7cfbecf87b72e7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;     