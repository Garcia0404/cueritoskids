import { useEffect, useState } from 'react'
import { AddToCart } from './AddToCart'
import { Color } from './ui/Color'

export const ProductContent = ({ product }: { product: Product }) => {
  const [selectedSize, setSelectedSize] = useState("0")
  const [selectedColor, setSelectedColor] = useState(["#f2f2f2"])
  const [productSelected, setProductSelected] = useState<Product>({
    ...product,
    tallas: [product.tallas[0]],
    precios: [product.precios[0]],
    colores: selectedColor
  })
  useEffect(() => {
    setProductSelected((prev) => {
      return {
        ...prev,
        colores: selectedColor,
        tallas: [product.tallas[parseInt(selectedSize)]],
        precios: [product.precios[parseInt(selectedSize)]],
      }
    })
  }, [selectedSize, selectedColor])
  return (
    <>
      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold line-clamp-1">{product.nombre}</h3>
          <label className="text-sm text-white/50 flex gap-2 items-center pt-1">
            Talla:
            <select name="select" onChange={(e) => setSelectedSize(e.target.value)} value={selectedSize} className="bg-zinc-900 rounded-md px-1 outline-none h-full">
              <option value="0">4</option>
              <option value="1">8</option>
              <option value="2">12</option>
              <option value="3">14</option>
              <option value="4">16</option>
            </select>
          </label>
        </div>
        <AddToCart product={productSelected} />
      </div>
      <div className="mt-2 flex items-center justify-between">
        <span className="font-medium">S/ {product.precios[parseInt(selectedSize)]}</span>
        <div className="flex items-center gap-1 mt-1">
          <div>
            <form className="flex gap-1 justify-end">
              {product.colores.map((color) => (
                <label key={color} className="cursor-pointer">
                  <input
                    type="radio"
                    name="color"
                    value={color}
                    className="hidden"
                    onChange={(e) => setSelectedColor([e.target.value])}
                  />
                  <Color color={color} className={color === selectedColor[0] ? "border-blue-600 p-1" : "p-1"} />
                </label>
              ))}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
