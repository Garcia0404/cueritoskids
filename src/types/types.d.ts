interface Product {
  id: string;
  nombre: string;
  descripción: string;
  colores: string[];
  imagen: string[];
  tallas: string[];
  precios: number[];
  stock: number;
}
interface ItemCart extends Product {
  cantidad: number;
}
