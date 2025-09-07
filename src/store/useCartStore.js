import { create } from "zustand";

// Load cart only on the client side
const getInitialCart = () => {
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  }
  return []; // Return empty array during SSR
};

export const useCartStore = create((set) => ({
  cart: [], // Set empty initially

  // Function to safely initialize cart on mount (fixes hydration error)
  initializeCart: () => {
    const initialCart = getInitialCart();
    set({ cart: initialCart });
  },

  persistCart: (updatedCart) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  },

  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);
      let updatedCart;

      if (existingItem) {
        updatedCart = state.cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        updatedCart = [...state.cart, { ...product, quantity: 1 }];
      }

      useCartStore.getState().persistCart(updatedCart);
      return { cart: updatedCart };
    }),

  removeFromCart: (id) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== id);
      useCartStore.getState().persistCart(updatedCart);
      return { cart: updatedCart };
    }),

  updateQuantity: (id, quantity) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      );

      useCartStore.getState().persistCart(updatedCart);
      return { cart: updatedCart };
    }),

  clearCart: () =>
    set(() => {
      useCartStore.getState().persistCart([]);
      return { cart: [] };
    }),
}));
