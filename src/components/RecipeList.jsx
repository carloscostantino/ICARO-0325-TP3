import useStore from "../store/useStore";

function RecipeList() {
  const { recipes, removeRecipe } = useStore();

  if (recipes.length === 0) {
    return <p>No hay recetas agregadas.</p>;
  }

  return (
    <ul>
      {recipes.map((r) => (
        <li key={r.id}>
          {r.name} <button onClick={() => removeRecipe(r.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}

export default RecipeList;
