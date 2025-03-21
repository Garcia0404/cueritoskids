import { AnimatePresence, motion } from "motion/react"
import { useCartStore } from "../utils/cart"
import { ItemCart } from "./ItemCart"
export const ItemsCart = () => {
  const { cart, removeFromCart, updateQuantity, getTotal } = useCartStore()
  return (
    <AnimatePresence>
      {
        cart.length != 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} layoutId="cart-list">
            <motion.ul className="flex flex-col gap-2 border-b pb-4 border-white/20">
              <AnimatePresence>
                {
                  cart.map(item => (
                    <ItemCart key={`${item.id}-${item.tallas[0]}-${item.colores[0]}`} updateQuantity={updateQuantity} removeFromCart={removeFromCart} product={item} />
                  ))
                }
              </AnimatePresence>
            </motion.ul>
            <motion.div layout className="flex justify-between my-4 mx-2 items-center">
              <span className="text-xl">Total:</span>
              <span className="text-lg">S/ {getTotal().toFixed(2)}</span>
            </motion.div>
            <button className="bg-blue-600 py-2 rounded-md w-full text-center cursor-pointer">enviar</button>
          </motion.div>
        )}
      {
        cart.length == 0 && (
          <motion.p layout className="text-center py-2 text-white/50">El carrito está vacío.</motion.p>
        )
      }
    </AnimatePresence>
  )
}
