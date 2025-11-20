const { test, beforeEach } = require('node:test');
const assert = require('node:assert');

const {
  listProducts,
  findProduct,
  resetProducts,
} = require('../src/productStore');

beforeEach(() => resetProducts());

test('listProducts returns initial inventory', () => {
  const items = listProducts();
  assert.equal(items.length, 3);
  assert.equal(items[0].name, 'Notebook');
});

test('findProduct returns matching product by id', () => {
  const product = findProduct(2);
  assert.ok(product);
  assert.equal(product.name, 'Pen Set');
});

test('findProduct returns undefined for unknown id', () => {
  const product = findProduct(999);
  assert.equal(product, undefined);
});

