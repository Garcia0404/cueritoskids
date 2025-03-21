interface ProductImage {
  src: string;
  format?: string;
  width?: number;
  height?: number;
}
interface Product {
  id: string;
  nombre: string;
  descripción: string;
  colores: string[];
  imagen: ProductImage[];
  tallas: string[];
  precios: number[];
  stock: number;
}
interface ItemCart extends Product {
  cantidad: number;
}
