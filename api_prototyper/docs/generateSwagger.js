const fs = require('node:fs');
const path = require('node:path');

const swaggerSpec = require('./swaggerSpec');

const outputPath = path.join(__dirname, 'openapi.json');

fs.writeFileSync(outputPath, JSON.stringify(swaggerSpec, null, 2));
console.log(`Swagger spec written to ${outputPath}`);

