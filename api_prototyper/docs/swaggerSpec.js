const path = require('node:path');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'Product Catalog API',
      version: '1.0.0',
      description:
        'Simple product catalog API used for prototyping CRUD flows and testing prompt-generated endpoints.',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Local development server',
      },
    ],
    components: {
      schemas: {
        Product: {
          type: 'object',
          required: ['id', 'name', 'price'],
          properties: {
            id: {
              type: 'integer',
              example: 1,
            },
            name: {
              type: 'string',
              example: 'Notebook',
            },
            price: {
              type: 'number',
              format: 'float',
              example: 8.99,
            },
          },
        },
        ProductInput: {
          type: 'object',
          required: ['name', 'price'],
          properties: {
            name: {
              type: 'string',
            },
            price: {
              type: 'number',
              format: 'float',
            },
          },
        },
        ErrorResponse: {
          type: 'object',
          properties: {
            error: {
              type: 'string',
            },
          },
        },
      },
    },
  },
  apis: [path.join(__dirname, '../src/index.js')],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;

