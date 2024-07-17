// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

import Constants from 'expo-constants';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6EGMWW6OUcX0AX4Vt9TNY_TsVNjKPFpw",
  authDomain: "chatapp-da7c7.firebaseapp.com",
  projectId: "chatapp-da7c7",
  storageBucket: "chatapp-da7c7.appspot.com",
  messagingSenderId: "938317033203",
  appId: "1:938317033203:web:a74c29062abe82f6895186"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);
