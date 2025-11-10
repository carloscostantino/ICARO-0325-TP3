import { useState } from "react";
import useRecetasStore from "../store/useRecetasStore";

function GestorRecetas() {
  const { recetas, agregarReceta, eliminarReceta, editarReceta } = useRecetasStore();

  const [titulo, setTitulo] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [pasos, setPasos] = useState("");
  const [editando, setEditando] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!titulo.trim() || !ingredientes.trim() || !pasos.trim()) return;

    const nuevaReceta = {
      id: editando ? editando.id : Date.now(),
      titulo,
      ingredientes,
      pasos,
    };

    if (editando) {
      editarReceta(nuevaReceta);
      setEditando(null);
    } else {
      agregarReceta(nuevaReceta);
    }

    setTitulo("");
    setIngredientes("");
    setPasos("");
  };

  const handleEdit = (receta) => {
    setEditando(receta);
    setTitulo(receta.titulo);
    setIngredientes(receta.ingredientes);
    setPasos(receta.pasos);
  };

  return (
    <section>
      <h2>{editando ? "Editar Receta" : "Agregar Nueva Receta"}</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          placeholder="Título de la receta"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
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
        <button type="submit">{editando ? "Guardar Cambios" : "Agregar"}</button>
      </form>

      <h2>Mis Recetas</h2>
      {recetas.length === 0 ? (
        <p>No hay recetas agregadas aún.</p>
      ) : (
        <ul>
          {recetas.map((r) => (
            <li key={r.id}>
              <h3>{r.titulo}</h3>
              <p><strong>Ingredientes:</strong> {r.ingredientes}</p>
              <p><strong>Pasos:</strong> {r.pasos}</p>
              <button onClick={() => handleEdit(r)}>Editar</button>
              <button onClick={() => eliminarReceta(r.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default GestorRecetas;
