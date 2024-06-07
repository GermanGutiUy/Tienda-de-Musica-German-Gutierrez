import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Contact from './components/Contact';
import NewsLetter from './components/NewsLetter';

function App() {
  return (
    <div className='app-container'>
      <NavBar />
      <ItemListContainer preentrega = "Esto es para la preentrega"/>
      <NewsLetter />
      <Contact />
    </div>
  );
}

export default App;
