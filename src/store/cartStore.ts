import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem } from "@/types/cartItem";

interface CartState {
  cartItems: CartItem[];
  addToCart: (newItem: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  removeSingleItem: (itemId: string) => void;
  clearCart: () => void;
  getTotalAmount: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cartItems: [],

      addToCart: (newItem) => {
        set((state) => {
          const existingItemIndex = state.cartItems.findIndex(
            (item) => item.id === newItem.id
          );

          if (existingItemIndex !== -1) {
            // Товар вже є в кошику; збільшуємо його кількість
            const updatedCartItems = state.cartItems.map((item, index) =>
              index === existingItemIndex
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
            return { cartItems: updatedCartItems };
          } else {
            // Товару ще немає в кошику; додаємо його з кількістю 1
            return {
              cartItems: [...state.cartItems, { ...newItem, quantity: 1 }],
            };
          }
        });
      },

      removeFromCart: (itemId) => {
        set((state) => {
          const index = state.cartItems.findIndex((item) => item.id === itemId);
          if (index === -1) return state;

          return {
            cartItems: [
              ...state.cartItems.slice(0, index),
              ...state.cartItems.slice(index + 1),
            ],
          };
        });
      },

      removeSingleItem: (id) => {
        set({
          cartItems: get().cartItems.filter((cartItem) => cartItem.id !== id),
        });
      },

      clearCart: () => set({ cartItems: [] }),

      getTotalAmount: () => {
        const { cartItems } = get();
        return cartItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
      },
    }),
    {
      name: "bravo-cart-storage",
    }
  )
);
