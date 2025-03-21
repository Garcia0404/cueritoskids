import { AnimatePresence, motion } from "motion/react";
import { useCartStore } from "../utils/cart";
import { ItemCart } from "./ItemCart";

export const ItemsCart = () => {
  const { cart, removeFromCart, updateQuantity, getTotal } = useCartStore();
  const PHONE_NUMBER = 51904092399;

  const getColor = (color: string) => {
    switch (color) {
      case "#f2f2f2": return "Blanco";
      case "#3B383B": return "Gris";
      case "#F12722": return "Rojo";
      case "#000": return "Negro";
      default: return "Blanco";
    }
  };

  const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    `Hola, estoy interesado en los siguientes productos:\n` +
    cart.map(item => `- ${item.nombre} (Talla ${item.tallas[0]}, ${getColor(item.colores[0])}) x${item.cantidad}`).join("\n")
  )}`;

  return (
    <div>
      <AnimatePresence mode="wait">
        {cart.length > 0 ? (
          <motion.div
            key="cart-list"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            layoutId="cart-list"
          >
            <motion.ul className="flex flex-col gap-2 pb-4">
              <AnimatePresence mode="popLayout">
                {cart.map(item => (
                  <ItemCart 
                    key={`${item.id}-${item.tallas[0]}-${item.colores[0]}`} 
                    updateQuantity={updateQuantity} 
                    removeFromCart={removeFromCart} 
                    product={item} 
                  />
                ))}
              </AnimatePresence>
            </motion.ul>
            <motion.div className="h-[0.5px] w-full bg-white/20 block" />
            <motion.div layout className="flex justify-between my-4 mx-2 items-center">
              <span className="text-xl">Total:</span>
              <span className="text-lg">S/ {getTotal().toFixed(2)}</span>
            </motion.div>
            <a 
              href={url} 
              target="_BLANK" 
              className="bg-blue-600 hover:bg-blue-500 transition-colors py-2 rounded-md w-full flex justify-center font-medium cursor-pointer"
            >
              Comprar
            </a>
          </motion.div>
        ) : (
          <motion.p 
            key="empty-cart"
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -10 }} 
            layout
            className="text-center py-2 text-white/50"
          >
            El carrito está vacío.
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};
