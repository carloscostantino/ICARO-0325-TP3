import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand bg-primary p-3">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-white fw-bold">Mi Sitio</Link>
        <div>
          <Link to="/" className="text-white me-3">Inicio</Link>
          <Link to="/recipeManager" className="text-white me-3">Gestor de Recetas</Link>
          <Link to="/recipes" className="text-white">Recetas Externas</Link>
          <Link to="/contact" className="text-white me-3">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}
