import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import RecipeManager from './pages/RecipeManager';
import Recipes from "./pages/Recipes";
import Contact from './pages/Contact';
import './styles/main.css';

function App() {
  return (
    <Router>
      <header>
        <h1>Recetas JAM</h1>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/recipe-manager">Gestor de Recetas</Link></li>
            <li><Link to="/recipes">Recetas Externas</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </nav>
      </header>

      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe-manager" element={<RecipeManager />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer class="container-fluid">
        <p>© 2025 ICARO-0325-TP3</p>
      </footer>
    </Router>
  );
}

export default App;
