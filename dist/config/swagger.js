"use strict";require('dotenv').config();

const host = process.env.API_URL;
const {
  Category,
  CategoryStore,
  CategoryUpdate,
} = require('../app/documentation/category');
const product = require('../app/documentation/product');
const returnReason = require('../app/documentation/returnReason');
const customer = require('../app/documentation/customer');
const types = require('../app/documentation/types');
const stock = require('../app/documentation/stock');
const nearbyRegion = require('../app/documentation/nearbyRegion');
const region = require('../app/documentation/region');
const order = require('../app/documentation/order');
<<<<<<< HEAD
const productStock = require('../app/documentation/productStock');
=======
>>>>>>> 104417f600f24511be13e1f6293a5e1d440ad17f

module.exports = {
  info: {
    version: '1.0.0',
    title: 'Documentação da API de controle de estoque',
    description: 'API para controle de estoque desenvolvida em JavaScript',
  },
  host,
  basePath: '/',
  schemes: ['https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  defaultModelsExpandDepth: -1,
  securityDefinitions: {
    Bearer: {
      description: 'JWT Token',
      type: 'apiKey',
      in: 'header',
      name: 'Authorization',
    },
  },
  definitions: {
    CategoryList: [Category],
    CategoryStore,
    CategoryUpdate,
    product,
    returnReason,
    customer,
    types,
    stock,
    nearbyRegion,
    region,
    order,
<<<<<<< HEAD
    productStock,
=======
>>>>>>> 104417f600f24511be13e1f6293a5e1d440ad17f
  },
};
