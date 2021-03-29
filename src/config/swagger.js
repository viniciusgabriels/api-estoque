require('dotenv').config();

const host = process.env.API_URL;
const category = require('../app/documentation/category');
const product = require('../app/documentation/product');
const returnReason = require('../app/documentation/returnReason');
const customer = require('../app/documentation/customer');

module.exports = {
  info: {
    version: '1.0.0',
    title: 'Documentação da API de controle de estoque',
    description: 'API para controle de estoque desenvolvida em JavaScript',
  },
  host,
  basePath: '/',
  schemes: ['http'],
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
    category,
    product,
    returnReason,
    customer,
  },
};
