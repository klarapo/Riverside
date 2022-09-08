import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPZ2SeKVUkEhZQuUm7pmSD4VgxlCsHa5w",
  authDomain: "contactpg-e7a9f.firebaseapp.com",
  projectId: "contactpg-e7a9f",
  storageBucket: "contactpg-e7a9f.appspot.com",
  messagingSenderId: "588807105021",
  appId: "1:588807105021:web:89d3bf8874f3845d6f9194"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);