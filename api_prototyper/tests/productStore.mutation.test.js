const { test, beforeEach } = require('node:test');
const assert = require('node:assert');

const {
  addProduct,
  updateProduct,
  deleteProduct,
  resetProducts,
  listProducts,
} = require('../src/productStore');

beforeEach(() => resetProducts());

test('addProduct appends a new item with incremental id', () => {
  const newItem = addProduct({ name: 'Keyboard', price: 49.99 });
  assert.equal(newItem.id, 4);
  assert.equal(listProducts().length, 4);
});

test('updateProduct mutates matching product fields', () => {
  const updated = updateProduct(1, { price: 9.49 });
  assert.equal(updated.price, 9.49);
});

test('deleteProduct removes the item and returns it', () => {
  const removed = deleteProduct(2);
  assert.equal(removed.name, 'Pen Set');
  assert.equal(listProducts().length, 2);
});

test('updateProduct returns null for unknown id', () => {
  const result = updateProduct(999, { name: 'Ghost' });
  assert.equal(result, null);
});

test('deleteProduct returns null for unknown id', () => {
  const result = deleteProduct(999);
  assert.equal(result, null);
});

