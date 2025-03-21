import { create } from "zustand";

interface CartState {
  cart: ItemCart[];
  addToCart: (product: Product) => void;
  updateQuantity: (product: ItemCart, quantity: number) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
  getTotal: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  cart:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cart") || "[]")
      : [],
  addToCart: (product) =>
    set((state) => {
      const existingProduct = state.cart.find(
        (item) =>
          item.id === product.id &&
          item.tallas[0] === product.tallas[0] &&
          item.colores[0] == product.colores[0]
      );
      let updatedCart;

      if (existingProduct) {
        updatedCart = state.cart.map((item) =>
          item.id === product.id && item.tallas[0] === product.tallas[0]
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        updatedCart = [...state.cart, { ...product, cantidad: 1 }];
      }

      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }

      return { cart: updatedCart };
    }),

  updateQuantity: (product, quantity) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === product.id &&
        item.tallas[0] === product.tallas[0] &&
        item.colores[0] === product.colores[0]
          ? { ...item, cantidad: quantity }
          : item
      );

      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }

      return { cart: updatedCart };
    }),

  removeFromCart: (product) =>
    set((state) => {
      const updatedCart = state.cart.filter(
        (item) =>
          item.id !== product.id ||
          item.tallas[0] !== product.tallas[0] ||
          item.colores[0] !== product.colores[0]
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
      return { cart: updatedCart };
    }),

  clearCart: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
    }
    return { cart: [] };
  },

  getTotal: () => {
    const { cart } = get();
    return cart.reduce(
      (total, item) => total + item.precios[0] * item.cantidad,
      0
    );
  },
}));
