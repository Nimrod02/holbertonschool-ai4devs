const initialProducts = [
  { id: 1, name: 'Notebook', price: 8.99 },
  { id: 2, name: 'Pen Set', price: 4.5 },
  { id: 3, name: 'Desk Lamp', price: 29.99 },
];

let products = [...initialProducts];
let nextId = Math.max(...initialProducts.map((p) => p.id)) + 1;

function resetProducts() {
  products = [...initialProducts];
  nextId = Math.max(...initialProducts.map((p) => p.id)) + 1;
}

function listProducts() {
  return products;
}

function findProduct(id) {
  return products.find((p) => p.id === id);
}

function addProduct({ name, price }) {
  const newProduct = { id: nextId++, name, price };
  products.push(newProduct);
  return newProduct;
}

function updateProduct(id, data) {
  const product = findProduct(id);
  if (!product) {
    return null;
  }
  if (data.name !== undefined) product.name = data.name;
  if (data.price !== undefined) product.price = data.price;
  return product;
}

function deleteProduct(id) {
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) {
    return null;
  }
  const [removed] = products.splice(index, 1);
  return removed;
}

module.exports = {
  listProducts,
  findProduct,
  addProduct,
  updateProduct,
  deleteProduct,
  resetProducts,
};

