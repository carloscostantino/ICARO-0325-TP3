import { create } from "zustand";

const useRecetasStore = create((set) => ({
  recetas: [],

  agregarReceta: (receta) =>
    set((state) => ({
      recetas: [...state.recetas, receta],
    })),

  eliminarReceta: (id) =>
    set((state) => ({
      recetas: state.recetas.filter((r) => r.id !== id),
    })),

  editarReceta: (recetaEditada) =>
    set((state) => ({
      recetas: state.recetas.map((r) =>
        r.id === recetaEditada.id ? recetaEditada : r
      ),
    })),
}));

export default useRecetasStore;
