// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALIH4H2FYO0XvvRcZT_Sqvh57A7HyVpgM",
    authDomain: "fir-using-context-practis.firebaseapp.com",
    projectId: "fir-using-context-practis",
    storageBucket: "fir-using-context-practis.appspot.com",
    messagingSenderId: "355703825134",
    appId: "1:355703825134:web:c5ae929cd9dfd55528c9ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;