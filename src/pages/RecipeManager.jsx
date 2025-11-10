import GestorRecetas from "../components/GestorRecetas";

function RecipeManager() {
  return (
    <main className="main-container">
      <h1>Gestor de Recetas</h1>
      <p>Agregá, editá, eliminá y organizá tus recetas personales.</p>
      <GestorRecetas />
    </main>
  );
}

export default RecipeManager;
