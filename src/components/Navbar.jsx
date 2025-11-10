import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand bg-primary p-3">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-white fw-bold">Mi Sitio</Link>
        <div>
          <Link to="/" className="text-white me-3">Inicio</Link>
          <Link to="/about" className="text-white me-3">Sobre mí</Link>
          <Link to="/recipes" className="text-white">Recetas API</Link>
          <Link to="/contact" className="text-white me-3">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}
