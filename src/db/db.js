// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1gdVpjxRvRuSWPUbAMqOQ1D7eSKKzZfs",
  authDomain: "maister-melody.firebaseapp.com",
  projectId: "maister-melody",
  storageBucket: "maister-melody.appspot.com",
  messagingSenderId: "402953869287",
  appId: "1:402953869287:web:dc6b82e83d8dd8f9a58f42"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;