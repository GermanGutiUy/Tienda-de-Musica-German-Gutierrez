// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import bajo1 from '../img/cuerda/bajo1.jpg';
import bajo2 from '../img/cuerda/bajo2.jpg';
import guitarra1 from '../img/cuerda/guitarra1.jpg';
import guitarra2 from '../img/cuerda/guitarra2.jpg';
import guitarra3 from '../img/cuerda/guitarra3.jpg';
import guitarraelectrica1 from '../img/cuerda/guitarraelectrica1.jpg';
import guitarraelectrica2 from '../img/cuerda/guitarraelectrica2.jpg';
import violin1 from '../img/cuerda/violin1.jpg';
import violin2 from '../img/cuerda/violin2.jpg';
import bateria1 from '../img/percusion/bateria1.jpg';
import bateria2 from '../img/percusion/bateria2.jpg';
import bateriaelectrica from '../img/percusion/bateriaelectrica.jpg';
import cajonperuano from '../img/percusion/cajonperuano.jpg';
import armonica from '../img/viento/armonica.jpg';
import trompeta from '../img/viento/trompeta.jpg';
import saxo from '../img/viento/saxo.jpg';
import auriculares from '../img/audiopro/auriculares.jpg';
import interfaz from '../img/audiopro/interfaz.jpg';
import mixer from '../img/audiopro/mixer.jpg';


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