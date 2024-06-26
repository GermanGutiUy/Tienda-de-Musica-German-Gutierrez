import './App.css';
import NavBar from './components/NavBar/NavBar';
import Portada from './components/pages/portada/Portada';
import Contact from './components/pages/portada/Contact';
import NewsLetter from './components/pages/portada/NewsLetter';

function App() {
  return (
    <div className='app-container'>
      <NavBar />
      <Portada />
      <NewsLetter />
      <Contact />
    </div>
  );
}

export default App;