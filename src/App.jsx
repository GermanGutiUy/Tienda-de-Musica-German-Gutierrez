import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Error from './components/Error.jsx'
import Formulario from './components/formulario/Formulario.jsx';
import Contact from './components/footer/Contact.jsx';
import NewsLetter from './components/footer/NewsLetter.jsx';
import { CartProvider } from './context/CartContext.jsx';
import Carrito from './components/carrito/Carrito.jsx'
import Checkout from "./components/checkout/Checkout.jsx"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      <NavBar />
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark"/>
      <Routes>
        <Route path = "/" element = {<ItemListContainer />} />
        <Route path = "/categoria/:idCategoria" element = {<ItemListContainer />}/>
        <Route path = "/categoria/:formulario" element = {<Formulario />}/>
        <Route path = "/detalle/:idProducto" element = {<ItemDetailContainer />}/>
        <Route path = "/detalle/:idProducto" element = {<Error />}/>
        <Route path = "/carrito" element = {<Carrito />}/>
        <Route path = "/checkout" element = {<Checkout />}/>
      </Routes>
      </CartProvider>
      <NewsLetter/>
      <Contact />
    </BrowserRouter>
  );
}

export default App;