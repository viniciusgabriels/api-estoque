require('dotenv').config();

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
const productStock = require('../app/documentation/productStock');

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
    productStock,
  },
};
