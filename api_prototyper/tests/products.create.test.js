const { test, beforeEach } = require('node:test');
const assert = require('node:assert');
const request = require('supertest');

const app = require('../src/index');
const { resetProducts } = require('../src/productStore');

beforeEach(() => resetProducts());

test('POST /products creates a product with valid payload', async () => {
  const response = await request(app)
    .post('/products')
    .send({ name: 'Mouse', price: 19.99 });

  assert.equal(response.statusCode, 201);
  assert.equal(response.body.name, 'Mouse');
  assert.equal(typeof response.body.id, 'number');
});

test('POST /products rejects invalid payloads', async () => {
  const response = await request(app)
    .post('/products')
    .send({ name: 'Bad Item' });

  assert.equal(response.statusCode, 400);
});

