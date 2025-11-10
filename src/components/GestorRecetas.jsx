import { useState } from "react";
import useRecetasStore from "../store/useRecetasStore";
import "./GestorRecetas.css"; // 👈 agregamos el CSS

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
    <section className="gestor-recetas">
      <h2>{editando ? "Editar Receta" : "Agregar Nueva Receta"}</h2>

      <form onSubmit={handleSubmit} className="receta-form">
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
        <button type="submit" className="btn-primary">
          {editando ? "Guardar Cambios" : "Agregar Receta"}
        </button>
      </form>

      <h2>Mis Recetas</h2>
      {recetas.length === 0 ? (
        <p className="no-recetas">No hay recetas agregadas aún.</p>
      ) : (
        <div className="lista-recetas">
          {recetas.map((r) => (
            <div key={r.id} className="tarjeta-receta">
              <h3>{r.titulo}</h3>
              <p><strong>Ingredientes:</strong> {r.ingredientes}</p>
              <p><strong>Pasos:</strong> {r.pasos}</p>
              <div className="acciones">
                <button onClick={() => handleEdit(r)} className="btn-edit">Editar</button>
                <button onClick={() => eliminarReceta(r.id)} className="btn-delete">Eliminar</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default GestorRecetas;
