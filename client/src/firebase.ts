// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT8HhptqfcxhbdVPv8zBXUv3lxt756J_Q",
  authDomain: "vandyhacks-x.firebaseapp.com",
  projectId: "vandyhacks-x",
  storageBucket: "vandyhacks-x.appspot.com",
  messagingSenderId: "484523314023",
  appId: "1:484523314023:web:754a29770d88d03845bdc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);