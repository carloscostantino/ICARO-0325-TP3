import { useState } from "react";

function GestorRecetas() {
  const [recetas, setRecetas] = useState([]);
  const [nombre, setNombre] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [pasos, setPasos] = useState("");

  const agregarReceta = (e) => {
    e.preventDefault();
    if (!nombre || !ingredientes || !pasos) return;

    const nuevaReceta = {
      id: Date.now(),
      nombre,
      ingredientes,
      pasos,
    };

    setRecetas([...recetas, nuevaReceta]);
    setNombre("");
    setIngredientes("");
    setPasos("");
  };

  const eliminarReceta = (id) => {
    setRecetas(recetas.filter((r) => r.id !== id));
  };

  return (
    <div className="gestor-recetas">
      <h2>Gestor de Recetas</h2>
      <p>Agregá, organizá y visualizá tus recetas favoritas.</p>

      <form onSubmit={agregarReceta} className="form-receta">
        <input
          type="text"
          placeholder="Nombre de la receta"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <textarea
          placeholder="Ingredientes"
          value={ingredientes}
          onChange={(e) => setIngredientes(e.target.value)}
        />
        <textarea
          placeholder="Pasos de preparación"
          value={pasos}
          onChange={(e) => setPasos(e.target.value)}
        />
        <button type="submit">Agregar Receta</button>
      </form>

      {recetas.length > 0 ? (
        <div className="lista-recetas">
          <h3>Mis Recetas</h3>
          <ul>
            {recetas.map((r) => (
              <li key={r.id}>
                <h4>{r.nombre}</h4>
                <p><strong>Ingredientes:</strong> {r.ingredientes}</p>
                <p><strong>Pasos:</strong> {r.pasos}</p>
                <button onClick={() => eliminarReceta(r.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No hay recetas agregadas todavía.</p>
      )}
    </div>
  );
}

export default GestorRecetas;
