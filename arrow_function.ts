// products.ts

const products = [
  {
    name: "Laptop",
    price: 50000,
    inStock: true,
  },
  {
    name: "Mouse",
    price: 700,
    inStock: false,
  },
  {
    name: "Keyboard",
    price: 1500,
    inStock: true,
  },
  {
    name: "Monitor",
    price: 12000,
    inStock: true,
  },
  {
    name: "Headphones",
    price: 2500,
    inStock: false,
  },
];

const Products1 = products.filter(product => product.inStock);

const result = Products1.map(
  product => `${product.name} - ₹${product.price}`
);

console.log(result);