const images = import.meta.glob("../assets/images/*.webp", { eager: true }) as Record<string, { default: string }>;
export const products = [
  {
    id: "10001",
    nombre: "Camiseta Minecraft",
    descripción:
      "Camiseta con el icónico diseño de Minecraft, perfecta para los fans del juego.",
    colores: ["#f2f2f2", "#3B383B", "#F12722", "#000"],
    imagen: [images["../assets/images/1.webp"].default],
    tallas: ["4", "8", "12", "14", "16"],
    precios: [30.00, 30.00, 30.00, 35.00, 35.00],
    stock: 15,
  },
  {
    id: "10002",
    nombre: "Camiseta Spiderman",
    descripción:
      "Camiseta con el diseño del héroe arácnido, ideal para los amantes de los cómics.",
    colores: ["#f2f2f2", "#3B383B", "#F12722", "#000"],
    imagen: [images["../assets/images/2.webp"].default],
    tallas: ["4", "8", "12", "14", "16"],
    precios: [30.00, 30.00, 30.00, 35.00, 35.00],
    stock: 18,
  },
  {
    id: "10003",
    nombre: "Camiseta Mickey Mouse",
    descripción:
      "Camiseta con el clásico diseño de Mickey Mouse, perfecta para los fans de Disney.",
    colores: ["#f2f2f2", "#3B383B", "#F12722", "#000"],
    imagen: [images["../assets/images/3.webp"].default],
    tallas: ["4", "8", "12", "14", "16"],
    precios: [30.00, 30.00, 30.00, 35.00, 35.00],
    stock: 12,
  },
  {
    id: "10004",
    nombre: "Camiseta Avengers",
    descripción:
      "Camiseta con el diseño de los Vengadores, ideal para los fans del Universo Cinematográfico de Marvel.",
    colores: ["#f2f2f2", "#3B383B", "#F12722", "#000"],
    imagen: [images["../assets/images/4.webp"].default],
    tallas: ["4", "8", "12", "14", "16"],
    precios: [30.00, 30.00, 30.00, 35.00, 35.00],
    stock: 20,
  },
  {
    id: "10005",
    nombre: "Camiseta Sonic",
    descripción:
      "Camiseta con el diseño de Sonic, el erizo más rápido del mundo.",
    colores: ["#f2f2f2", "#3B383B", "#F12722", "#000"],
    imagen: [images["../assets/images/5.webp"].default],
    tallas: ["4", "8", "12", "14", "16"],
    precios: [30.00, 30.00, 30.00, 35.00, 35.00],
    stock: 14,
  },
  {
    id: "10006",
    nombre: "Camiseta Venom",
    descripción:
      "Camiseta con el diseño de Venom, perfecta para los fans del anti-héroe.",
    colores: ["#f2f2f2", "#3B383B", "#F12722", "#000"],
    imagen: [images["../assets/images/6.webp"].default],
    tallas: ["4", "8", "12", "14", "16"],
    precios: [30.00, 30.00, 30.00, 35.00, 35.00],
    stock: 16,
  },
  {
    id: "10007",
    nombre: "Camiseta Kimetsu no Yaiba",
    descripción:
      "Camiseta con el diseño de Kimetsu no Yaiba, ideal para los fans del anime.",
    colores: ["#f2f2f2", "#3B383B", "#F12722", "#000"],
    imagen: [images["../assets/images/7.webp"].default],
    tallas: ["4", "8", "12", "14", "16"],
    precios: [30.00, 30.00, 30.00, 35.00, 35.00],
    stock: 11,
  },
  {
    id: "10008",
    nombre: "Camiseta Power Girls",
    descripción:
      "Camiseta con el diseño de Power Girls, perfecta para los fans de los superhéroes.",
    colores: ["#f2f2f2", "#3B383B", "#F12722", "#000"],
    imagen: [images["../assets/images/8.webp"].default],
    tallas: ["4", "8", "12", "14", "16"],
    precios: [30.00, 30.00, 30.00, 35.00, 35.00],
    stock: 19,
  },
  {
    id: "10009",
    nombre: "Camiseta Bob Esponja",
    descripción:
      "Camiseta con el diseño de Bob Esponja, ideal para los fans de la serie animada.",
    colores: ["#f2f2f2", "#3B383B", "#F12722", "#000"],
    imagen: [images["../assets/images/9.webp"].default],
    tallas: ["4", "8", "12", "14", "16"],
    precios: [30.00, 30.00, 30.00, 35.00, 35.00],
    stock: 13,
  },
  {
    id: "10010",
    nombre: "Camiseta Kuromi",
    descripción:
      "Camiseta con el diseño de Kuromi, perfecta para los fans de Sanrio.",
    colores: ["#f2f2f2", "#3B383B", "#F12722", "#000"],
    imagen: [images["../assets/images/10.webp"].default],
    tallas: ["4", "8", "12", "14", "16"],
    precios: [30.00, 30.00, 30.00, 35.00, 35.00],
    stock: 17,
  },
  {
    id: "10011",
    nombre: "Camiseta Capibara",
    descripción:
      "Camiseta con el diseño de un capibara, ideal para los amantes de los animales.",
    colores: ["#f2f2f2", "#3B383B", "#F12722", "#000"],
    imagen: [images["../assets/images/11.webp"].default],
    tallas: ["4", "8", "12", "14", "16"],
    precios: [30.00, 30.00, 30.00, 35.00, 35.00],
    stock: 10,
  },
  {
    id: "10012",
    nombre: "Camiseta Miraculous",
    descripción:
      "Camiseta con el diseño de Miraculous, perfecta para los fans de la serie.",
    colores: ["#f2f2f2", "#3B383B", "#F12722", "#000"],
    imagen: [images["../assets/images/12.webp"].default],
    tallas: ["4", "8", "12", "14", "16"],
    precios: [30.00, 30.00, 30.00, 35.00, 35.00],
    stock: 20,
  },
  {
    id: "10013",
    nombre: "Camiseta Paw Patrol",
    descripción:
      "Camiseta con el diseño de Paw Patrol, ideal para los más pequeños.",
    colores: ["#f2f2f2", "#3B383B", "#F12722", "#000"],
    imagen: [images["../assets/images/13.webp"].default],
    tallas: ["4", "8", "12", "14", "16"],
    precios: [30.00, 30.00, 30.00, 35.00, 35.00],
    stock: 15,
  },
  {
    id: "10014",
    nombre: "Camiseta Hello Kitty",
    descripción:
      "Camiseta con el diseño de Hello Kitty, perfecta para los fans de Sanrio.",
    colores: ["#f2f2f2", "#3B383B", "#F12722", "#000"],
    imagen: [images["../assets/images/14.webp"].default],
    tallas: ["4", "8", "12", "14", "16"],
    precios: [30.00, 30.00, 30.00, 35.00, 35.00],
    stock: 18,
  },
];
export const getProducts = async () => {
  return products;
};
