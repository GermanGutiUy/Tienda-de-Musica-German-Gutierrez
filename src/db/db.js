import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1gdVpjxRvRuSWPUbAMqOQ1D7eSKKzZfs",
  authDomain: "maister-melody.firebaseapp.com",
  projectId: "maister-melody",
  storageBucket: "maister-melody.appspot.com",
  messagingSenderId: "402953869287",
  appId: "1:402953869287:web:dc6b82e83d8dd8f9a58f42"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

export default db;