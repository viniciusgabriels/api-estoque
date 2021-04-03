"use strict";const swaggerAutogen = require('swagger-autogen')();
const swaggerConfig = require('./config/swagger');

const outputFile = './src/swagger-documention.json';
const endpoints = [
  './src/app/routers/product.js',
  './src/app/routers/category.js',
  './src/app/routers/returnReason.js',
  './src/app/routers/customer.js',
  './src/app/routers/type.js',
  './src/app/routers/stock.js',
  './src/app/routers/nearbyRegions.js',
  './src/app/routers/region.js',
  './src/app/routers/order.js',
  './src/app/routers/orderProduct.js',
<<<<<<< HEAD
  './src/app/routers/productStock.js',
=======
>>>>>>> 104417f600f24511be13e1f6293a5e1d440ad17f
];

swaggerAutogen(outputFile, endpoints, swaggerConfig);
