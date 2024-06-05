import './App.css';
import NavBar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';
import Contact from './components/Contact';
import NewsLetter from './components/NewsLetter';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer />
      <NewsLetter />
      <Contact />
    </div>
  );
}

export default App;
