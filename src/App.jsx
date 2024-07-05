import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContaine from './components/itemDetailContainer/itemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Error from './components/Error.jsx'
import Formulario from './components/formulario/Formulario.jsx';
 
function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path = "/" element = {<ItemListContainer />} />
        <Route path = "/categoria/:idCategoria" element = {<ItemListContainer />}/>

        <Route path = "/categoria/:formulario" element = {<Formulario />}/>

        <Route path = "/detalle/:idProducto" element = {<ItemDetailContaine />}/>
        <Route path = "/detalle/:idProducto" element = {<Error />}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;