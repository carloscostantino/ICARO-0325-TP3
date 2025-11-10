import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Recipes from "./pages/Recipes";
import Contact from './pages/Contact';
import './styles/main.css';

function App() {
  return (
    <Router>
      <header>
        <h1>ICARO-0325-TP3</h1>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/about">Sobre mí</Link></li>
            <li><Link to="/recipes">Recetas API</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer>
        <p>© 2025 ICARO-0325-TP3</p>
      </footer>
    </Router>
  );
}

export default App;
