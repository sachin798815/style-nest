// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcY7NV-5mgGTkJjMwKzyeYSJioVGcUMe4",
  authDomain: "style-nest-99769.firebaseapp.com",
  projectId: "style-nest-99769",
  storageBucket: "style-nest-99769.firebasestorage.app",
  messagingSenderId: "1025404412270",
  appId: "1:1025404412270:web:77dbf2945f675f195a217f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
