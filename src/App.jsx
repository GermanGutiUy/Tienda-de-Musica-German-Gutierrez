import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContaine from './components/itemDetailContainer/itemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Error from './components/Error.jsx'
 
function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path = "/" element = {<ItemListContainer />} />
        <Route path = "/categoria/:idCategoria" element = {<ItemListContainer />}/>
        <Route path = "/detalle/:idProdcuto" element = {<ItemDetailContaine />}/>
        <Route path = "/detalle/:idProdcuto" element = {<Error />}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;