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
];

swaggerAutogen(outputFile, endpoints, swaggerConfig);
