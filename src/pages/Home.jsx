import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container-fluid text-center py-5 bg-light">
      <div className="p-5">
        <h1 className="display-4 fw-bold mb-4">Gestor de Recetas</h1>
        <p className="lead mb-4">
          Bienvenido a <strong>Recetario JAM</strong>, tu aplicación para buscar, agregar y organizar recetas de cocina.
          Aquí podrás explorar recetas deliciosas, ver sus ingredientes y pasos, 
          y crear tu propio recetario personalizado.
        </p>

        <div className="d-flex justify-content-center gap-3">
          <Link to="/recipes" className="btn btn-primary btn-lg">
            Ver Recetas externas
          </Link>
          <Link to="/about" className="btn btn-outline-secondary btn-lg">
            Gestionar recetas propias
          </Link>
        </div>

        <img
          src="https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_960_720.jpg"
          alt="Recetas"
          className="img-fluid mt-5 rounded shadow"
          style={{ maxWidth: "700px" }}
        />
      </div>
    </div>
  );
}

export default Home;
