import GestorRecetas from "../components/GestorRecetas";

function RecipeManager() {
  return (
    <main className="main-container">
      <h1>Gestor de Recetas</h1>
      <p>
        En esta sección podés agregar, editar y eliminar tus propias recetas.
        Organizá tus preparaciones con sus ingredientes y pasos.
      </p>

      <GestorRecetas />
    </main>
  );
}

export default RecipeManager;
