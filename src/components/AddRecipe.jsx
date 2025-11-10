import { useState } from "react";
import useStore from "../store/useStore";

function AddRecipe() {
  const [name, setName] = useState("");
  const addRecipe = useStore((state) => state.addRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    addRecipe({ id: Date.now(), name });
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre de la receta"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default AddRecipe;
