// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDNk45Ca6UqCQA7qw6soIvv-Oj60MjPRZQ",
    authDomain: "v-team-91fd2.firebaseapp.com",
    projectId: "v-team-91fd2",
    storageBucket: "v-team-91fd2.appspot.com",
    messagingSenderId: "177445219539",
    appId: "1:177445219539:web:c9799a9d4508486f4eb826",
    measurementId: "G-2G3LQJL1YG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);