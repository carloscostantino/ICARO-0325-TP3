import { useState, useEffect } from "react";

function ApiRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("chicken");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        );
        if (!res.ok) throw new Error("Error al obtener los datos");
        const data = await res.json();
        setRecipes(data.meals || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [search]);

  return (
    <div>
      <h3>Buscar recetas en la API</h3>
      <input
        type="text"
        placeholder="Ej: pasta"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p>🔄 Cargando recetas...</p>}
      {error && <p style={{ color: "red" }}>⚠️ {error}</p>}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {recipes.map((r) => (
          <div
            key={r.idMeal}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              width: "200px",
              textAlign: "center",
            }}
          >
            <img
              src={r.strMealThumb}
              alt={r.strMeal}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h4>{r.strMeal}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ApiRecipes;
