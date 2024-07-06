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

const productos = [
  {
    id: "123",
    categoria: "cuerda",
    nombre: "Bajo 1",
    descripcion: "Descripcion",
    stock: "10",
    precio: "300",
    imagen: bajo1 // Usar la imagen importada
  },  
  {
    id: "45623",
    categoria: "cuerda",
    nombre: "Bajo 2",
    descripcion: "Descripcion",
    stock: "10",
    precio: "300",
    imagen: bajo2 // Usar la imagen importada
  },
  {
    id: "5448",
    categoria: "cuerda",
    nombre: "Guitarra 1",
    descripcion: "Descripcion",
    stock: "10",
    precio: "300",
    imagen: guitarra1 // Usar la imagen importada
  },
  {
    id: "9556",
    categoria: "cuerda",
    nombre: "Guitarra 2",
    descripcion: "Descripcion",
    stock: "10",
    precio: "300",
    imagen: guitarra2 // Usar la imagen importada
  },
  {
    id: "3656",
    categoria: "cuerda",
    nombre: "Guitarra 3",
    descripcion: "Descripcion",
    stock: "10",
    precio: "300",
    imagen: guitarra3 // Usar la imagen importada
  },
  {
    id: "96565",
    categoria: "cuerda",
    nombre: "Guitarra Eléctrica 1",
    descripcion: "Descripcion",
    stock: "10",
    precio: "300",
    imagen: guitarraelectrica1 // Usar la imagen importada
  },
  {
    id: "3268",
    categoria: "cuerda",
    nombre: "Guitarra Eléctrica 2",
    descripcion: "Descripcion",
    stock: "10",
    precio: "300",
    imagen: guitarraelectrica2 // Usar la imagen importada
  },
  {
    id: "95456",
    categoria: "cuerda",
    nombre: "Violín 1",
    descripcion: "Descripcion",
    stock: "10",
    precio: "300",
    imagen: violin1 // Usar la imagen importada
  },
  {
    id: "2154",
    categoria: "cuerda",
    nombre: "Violín 2",
    descripcion: "Descripcion",
    stock: "10",
    precio: "300",
    imagen: violin2 // Usar la imagen importada
  },
  {
    id: "63262",
    categoria: "cuerda",
    nombre: "Violín 2",
    descripcion: "Descripcion",
    stock: "10",
    precio: "300",
    imagen: violin2 // Usar la imagen importada
  },
  {
    id: "75454",
    categoria: "percusion",
    nombre: "Batería 1",
    descripcion: "Descripcion",
    stock: "10",
    precio: "300",
    imagen: bateria1 // Usar la imagen importada
  },
  {
    id: "9563264",
    categoria: "percusion",
    nombre: "Batería 2",
    descripcion: "Descripcion",
    stock: "10",
    precio: "300",
    imagen: bateria2 // Usar la imagen importada
  },
  {
    id: "521445",
    categoria: "percusion",
    nombre: "Batería Eléctrica",
    descripcion: "Descripcion",
    stock: "10",
    precio: "300",
    imagen: bateriaelectrica // Usar la imagen importada
  },
  {
    id: "311151",
    categoria: "percusion",
    nombre: "Cajón Peruano",
    descripcion: "Descripcion",
    stock: "10",
    precio: "300",
    imagen: cajonperuano // Usar la imagen importada
  },
  {
    id: "9569653",
    categoria: "viento",
    nombre: "Armonica",
    descripcion: "Descripcion",
    stock: "10",
    precio: "300",
    imagen: armonica // Usar la imagen importada
  },
  {
    id: "365652",
    categoria: "viento",
    nombre: "Trompeta",
    descripcion: "Descripcion",
    stock: "10",
    precio: "300",
    imagen: trompeta // Usar la imagen importada
  },
  {
    id: "224525",
    categoria: "viento",
    nombre: "Saxo",
    descripcion: "Descripcion",
    stock: "10",
    precio: "300",
    imagen: saxo // Usar la imagen importada
  },
  {
    id: "9656324",
    categoria: "audiopro",
    nombre: "Auriculares",
    descripcion: "Descripcion",
    stock: "10",
    precio: "300",
    imagen: auriculares // Usar la imagen importada
  },
  {
    id: "75421",
    categoria: "audiopro",
    nombre: "Interfaz",
    descripcion: "Descripcion",
    stock: "10",
    precio: "300",
    imagen: interfaz // Usar la imagen importada
  },
  {
    id: "45686",
    categoria: "audiopro",
    nombre: "Mixer",
    descripcion: "Descripcion",
    stock: "10",
    precio: "300",
    imagen: mixer // Usar la imagen importada
  },
];

const obtenerProductos = () => {
  return new Promise((resolve, reject) => {
    // Simulamos un retraso de red de 3 segundos
    setTimeout(() => {
      resolve(productos);
    }, 1500);
  });
};

export { obtenerProductos };
