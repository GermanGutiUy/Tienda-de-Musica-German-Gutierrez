import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Error from './components/Error.jsx'
import Formulario from './components/formulario/Formulario.jsx';
import Contact from './components/footer/Contact.jsx';
import NewsLetter from './components/footer/NewsLetter.jsx';
 
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path = "/" element = {<ItemListContainer />} />
        <Route path = "/categoria/:idCategoria" element = {<ItemListContainer />}/>
        <Route path = "/categoria/:formulario" element = {<Formulario />}/>
        <Route path = "/detalle/:idProducto" element = {<ItemDetailContainer />}/>
        <Route path = "/detalle/:idProducto" element = {<Error />}/>
      </Routes>
      <NewsLetter/>
      <Contact />
    </BrowserRouter>
  );
}

export default App;