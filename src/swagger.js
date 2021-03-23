const swaggerAutogen = require('swagger-autogen')();
const swaggerConfig = require('./config/swagger');

const outputFile = './src/swagger-documention.json';
const endpoints = [
  './src/app/routers/product.js',
  './src/app/routers/category.js',
];

swaggerAutogen(outputFile, endpoints, swaggerConfig);
