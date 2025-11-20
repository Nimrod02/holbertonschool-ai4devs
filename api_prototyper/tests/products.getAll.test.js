const { test, beforeEach } = require('node:test');
const assert = require('node:assert');
const request = require('supertest');

const app = require('../src/index');
const { resetProducts } = require('../src/productStore');

beforeEach(() => resetProducts());

test('GET /products returns the seeded list', async () => {
  const response = await request(app).get('/products');
  assert.equal(response.statusCode, 200);
  assert.equal(response.body.products.length, 3);
});

test('GET /products/:id returns a single product', async () => {
  const response = await request(app).get('/products/2');
  assert.equal(response.statusCode, 200);
  assert.equal(response.body.name, 'Pen Set');
});

test('GET /products/:id gives 404 for unknown product', async () => {
  const response = await request(app).get('/products/999');
  assert.equal(response.statusCode, 404);
});

