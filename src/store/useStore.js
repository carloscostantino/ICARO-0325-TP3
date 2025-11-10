import { create } from "zustand";

const useStore = create((set) => ({
  recipes: [], // lista de recetas

  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  removeRecipe: (id) =>
    set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),

  clearRecipes: () => set({ recipes: [] }),
}));

export default useStore;
