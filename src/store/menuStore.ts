import { create } from "zustand";
import { Category } from "@/types/category";

interface MenuState {
  categories: Category[];
  setCategories: (categories: Category[]) => void;
}

export const useMenuStore = create<MenuState>((set) => ({
  categories: [],
  setCategories: (categories) => set({ categories }),
}));
