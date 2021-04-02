"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ProductController = require('../controllers/ProductController'); var _ProductController2 = _interopRequireDefault(_ProductController);






var _product = require('../middlewares/product');

const routes = new (0, _express.Router)();

routes.get(
  '/products',
  _ProductController2.default.index
  // #swagger.tags = ['Products']
  // #swagger.description = 'Endpoint para buscar todos os produtos'
  /*
  #swagger.parameters['name'] = {
    in: 'query',
    description: 'Nome do produto',
    required: false,
    type: 'string'
  } */
  /*
  #swagger.parameters['categoryId'] = {
    in: 'query',
    description: 'ID da categoria',
    required: false,
    type: 'string'
  } */
  /* 
  #swagger.response[200] = {
    description: 'Products list',
    schema: {
      minimum: 1
      $ref: "#/definitions/products"
    }
    responses: {
      '200': {
        description: "OK"
      }
    }
  }
  */
);
routes.get(
  '/products/:id',
  [_product.validateId, _product.validateProductExist],
  _ProductController2.default.show
  // #swagger.tags = ['Products']
  // #swagger.description = 'Endpoint para listar um produto'
  /*  #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID do produto',
    required: true,
    type: 'integer',
  } 
  */
  /* 
  #swagger.response[200] = {
    description: 'List one product',
    schema: {
      $ref: "#/definitions/products"
    }
    responses: {
      '200': {
        description: "OK"
      }
    }
  }
  */
);
routes.post(
  '/products',
  _product.validateData,
  _ProductController2.default.store
  // #swagger.tags = ['Products']
  // #swagger.description = 'Endpoint para cadastrar um novo produto'
  // #swagger.security = [{Bearer: []}]
  /*
  #swagger.parameters['name'] = {
    in: 'body',
    description: 'Nome do produto',
    required: true,
    type: 'string'
  } */
  /* #swagger.parameters['description'] = {
    in: 'body',
    description: 'Descrição do produto',
    required: false,
    type: 'string'
  } */
  /* #swagger.parameters['price'] = {
    in: 'body',
    description: 'Valor do produto',
    required: true,
    type: 'number'
  } */
  /* #swagger.parameters['status'] = {
    in: 'body',
    description: 'Status do produto, ativo? true ou false',
    required: true,
    type: 'boolean'
  } */
  /* #swagger.parameters['categoryId'] = {
    in: 'body',
    description: 'ID da categoria do produto',
    required: true,
    type: 'integer'
  } */
  /* #swagger.response[200] = {
    description: 'Categoria cadastrada com sucesso',
    schema: {
      $ref: "#/definitions/category"
    }
  }
  */
);
routes.put(
  '/products/:id',
  [_product.validateData, _product.validateId, _product.validateProductExist],
  _ProductController2.default.update
  // #swagger.tags = ['Products']
  // #swagger.description = 'Endpoint para atualizar um produto'
  // #swagger.security = [{Bearer: []}]
  /* #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID da categoria',
    required: true,
    type: 'integer',
  } */
  /* #swagger.parameters['name'] = {
    in: 'body',
    description: 'Nome do produto',
    required: true,
    type: 'string'
  } */
  /* #swagger.parameters['description'] = {
    in: 'body',
    description: 'Descrição do produto',
    required: false,
    type: 'string'
  } */
  /* #swagger.parameters['price'] = {
    in: 'body',
    description: 'Valor do produto',
    required: true,
    type: 'number'
  } */
  /* #swagger.parameters['status'] = {
    in: 'body',
    description: 'Status do produto, ativo? true ou false',
    required: true,
    type: 'boolean'
  } */
  /*
  #swagger.parameters['categoryId'] = {
    in: 'body',
    description: 'ID da categoria do produto',
    required: true,
    type: 'integer'
  } */
  /* #swagger.response[200] = {
    description: 'Produto atualizado com sucesso',
    schema: {
      $ref: "#/definitions/products"
    }
  } */
);
routes.delete(
  '/products/:id',
  [_product.validateId, _product.validateProductExist, _product.productExistInProductStock],
  _ProductController2.default.delete
  // #swagger.tags = ['Products']
  // #swagger.description = 'Endpoint para deletar um produto'
  // #swagger.security = [{Bearer: []}]
  /*  #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID do produto',
    required: true,
    type: 'integer',
  } 
  */
  /*
  #swagger.response[204] = {
    description: 'Produto deletado com sucesso',
    schema: {
      $ref: "#/definitions/products"
    }
  }
  */
);

exports. default = routes;
