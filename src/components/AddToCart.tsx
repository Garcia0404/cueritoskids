import { useCartStore } from "../utils/cart"

export const AddToCart = ({ product }: { product: Product }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const handleAddToCart = () => {
    addToCart(product);
  };
  return (
    <button
      onClick={handleAddToCart}
      aria-label="agregar al carrito"
      className="cursor-pointer z-20 outline outline-white/30 hover:outline-white rounded-full p-1 active:scale-80 transition-transform h-min"
    >
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"></path>
      </svg>
    </button>
  )
}
