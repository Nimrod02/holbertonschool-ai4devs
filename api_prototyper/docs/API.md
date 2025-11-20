## Product Catalog API Overview

The Product Catalog API exposes CRUD operations for managing a simple inventory
of products. It is implemented with Express and backed by an in-memory store
defined in `src/productStore.js`. Swagger UI is available at `/docs`, and the
OpenAPI specification can be generated via `npm run docs:build`, which writes
`docs/openapi.json`. This document provides a concise reference for the
available endpoints.

### Authentication

No authentication is required. All endpoints are open for prototyping purposes.

### Media Types

`application/json` for both request and response bodies.

---

### `GET /products`

- **Description:** Retrieve the full list of products.
- **Response 200:** `{ "products": [Product, ...] }`

### `GET /products/{id}`

- **Description:** Fetch a single product by numeric ID.
- **Response 200:** `Product`
- **Response 404:** `{ "error": "Product not found" }`

### `POST /products`

- **Description:** Create a new product.
- **Body:** `{ "name": string, "price": number }`
- **Response 201:** Newly created `Product`
- **Response 400:** `{ "error": "Invalid payload" }`

### `PUT /products/{id}`

- **Description:** Replace an existing product.
- **Body:** `{ "name": string, "price": number }`
- **Response 200:** Updated `Product`
- **Response 404:** `{ "error": "Product not found" }`

### `PATCH /products/{id}/price`

- **Description:** Update only the `price` field.
- **Body:** `{ "price": number }`
- **Response 200:** Updated `Product`
- **Response 400/404:** Error payloads described above.

### `DELETE /products/{id}`

- **Description:** Remove a product from the catalog.
- **Response 200:** Deleted `Product`
- **Response 404:** `{ "error": "Product not found" }`

---

### Testing & Tooling

- **Automated tests:** `npm test` (uses `node --test` and Supertest).
- **Swagger UI:** Visit `http://localhost:3000/docs` while the server is
  running.
- **Spec artifacts:** `api_specification.yaml`, `api_specification.json`, and
  auto-generated `docs/openapi.json`.

Use this document as a quick reference; defer to the OpenAPI spec for complete
request/response schemas.

