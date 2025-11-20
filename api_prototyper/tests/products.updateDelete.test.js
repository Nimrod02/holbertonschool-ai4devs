const { test, beforeEach } = require('node:test');
const assert = require('node:assert');
const request = require('supertest');

const app = require('../src/index');
const { resetProducts } = require('../src/productStore');

beforeEach(() => resetProducts());

test('PUT /products/:id updates name and price', async () => {
  const response = await request(app)
    .put('/products/1')
    .send({ name: 'Premium Notebook', price: 12.99 });

  assert.equal(response.statusCode, 200);
  assert.equal(response.body.name, 'Premium Notebook');
  assert.equal(response.body.price, 12.99);
});

test('PATCH /products/:id/price updates only the price', async () => {
  const response = await request(app)
    .patch('/products/2/price')
    .send({ price: 5.25 });

  assert.equal(response.statusCode, 200);
  assert.equal(response.body.price, 5.25);
});

test('DELETE /products/:id removes the product', async () => {
  const response = await request(app).delete('/products/3');
  assert.equal(response.statusCode, 200);
  assert.equal(response.body.id, 3);

  const followUp = await request(app).get('/products/3');
  assert.equal(followUp.statusCode, 404);
});

