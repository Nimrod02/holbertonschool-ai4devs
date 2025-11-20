const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../docs/swaggerSpec');
const {
  listProducts,
  findProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} = require('./productStore');

const app = express();
app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));

// List all products (READ)
/**
 * @openapi
 * /products:
 *   get:
 *     summary: List all products
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: Array of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 products:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Product'
 */
app.get('/products', (req, res) => {
  res.json({ products: listProducts() });
});

// Retrieve a single product (READ)
/**
 * @openapi
 * /products/{id}:
 *   get:
 *     summary: Retrieve a single product by id.
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Product found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.get('/products/:id', (req, res) => {
  const product = findProduct(Number(req.params.id));
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
});

// Create a product (CREATE)
/**
 * @openapi
 * /products:
 *   post:
 *     summary: Create a new product.
 *     tags:
 *       - Products
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductInput'
 *     responses:
 *       201:
 *         description: Product created.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Invalid payload.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.post('/products', (req, res) => {
  const { name, price } = req.body;
  if (!name || typeof price !== 'number') {
    return res.status(400).json({ error: 'Invalid payload' });
  }
  const newProduct = addProduct({ name, price });
  res.status(201).json(newProduct);
});

// Update a product (UPDATE)
/**
 * @openapi
 * /products/{id}:
 *   put:
 *     summary: Replace a product.
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductInput'
 *     responses:
 *       200:
 *         description: Updated product.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.put('/products/:id', (req, res) => {
  const product = updateProduct(Number(req.params.id), req.body);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
});

// Delete a product (DELETE)
/**
 * @openapi
 * /products/{id}:
 *   delete:
 *     summary: Delete a product.
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Deleted product.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.delete('/products/:id', (req, res) => {
  const removed = deleteProduct(Number(req.params.id));
  if (!removed) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(removed);
});

// Partial update (UPDATE)
/**
 * @openapi
 * /products/{id}/price:
 *   patch:
 *     summary: Update only the price of a product.
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               price:
 *                 type: number
 *                 format: float
 *     responses:
 *       200:
 *         description: Updated product.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Invalid payload.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       404:
 *         description: Product not found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
app.patch('/products/:id/price', (req, res) => {
  if (typeof req.body.price !== 'number') {
    return res.status(400).json({ error: 'Invalid price' });
  }
  const product = updateProduct(Number(req.params.id), { price: req.body.price });
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`API running on port ${port}`));
}

module.exports = app;
