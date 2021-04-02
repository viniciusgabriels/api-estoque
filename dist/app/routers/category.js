"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _CategoryController = require('../controllers/CategoryController'); var _CategoryController2 = _interopRequireDefault(_CategoryController);






var _category = require('../middlewares/category');

const routes = new (0, _express.Router)();

routes.get(
  '/categories',
  _CategoryController2.default.index
  // #swagger.tags = ['Categories']
  // #swagger.description = 'Endpoint para buscar todas as categorias'
  /*
  #swagger.parameters['name'] = {
    in: 'query',
    description: 'Nome da categoria',
    required: false,
    type: 'string'
  } */
  /* 
  #swagger.response[200] = {
    description: 'Categories list',
    schema: {
      minimum: 1
      $ref: "#/definitions/categories"
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
  '/categories/:id',
  [_category.validateId, _category.validateCategoryExist],
  _CategoryController2.default.show
  // #swagger.tags = ['Categories']
  // #swagger.description = 'Endpoint para buscar uma categotia'
  /*  #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID da categoria',
    required: true,
    type: 'integer',
  } 
  */
);
routes.post(
  '/categories',
  _category.validateData,
  _CategoryController2.default.store
  // #swagger.tags = ['Categories']
  // #swagger.description = 'Endpoint para cadastrar uma categotia'
  // #swagger.security = [{Bearer: []}]
  /*
  #swagger.parameters['name'] = {
    in: 'body',
    description: 'Nome da categoria',
    required: true,
    type: 'string'
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
  '/categories/:id',
  [_category.validateData, _category.validateId, _category.validateCategoryExist],
  _CategoryController2.default.update
  // #swagger.tags = ['Categories']
  // #swagger.description = 'Endpoint para atualizar uma categotia'
  // #swagger.security = [{Bearer: []}]
  /* #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID da categoria',
    required: true,
    type: 'integer',
  } */
  /* #swagger.parameters['name'] = {
    in: 'body',
    description: 'Nome da categoria',
    required: true,
    type: 'string'
  } */
  /* #swagger.response[200] = {
    description: 'Categoria atualizada com sucesso',
    schema: {
      $ref: "#/definitions/category"
    }
  }
  */
);
routes.delete(
  '/categories/:id',
  [_category.validateId, _category.validateCategoryExist, _category.categoryExistInProducts],
  _CategoryController2.default.delete
  // #swagger.tags = ['Categories']
  // #swagger.description = 'Endpoint para deletar uma categotia'
  // #swagger.security = [{Bearer: []}]
  /*  #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID da categoria',
    required: true,
    type: 'integer',
  } 
  */
  /*
  #swagger.response[204] = {
    description: 'Categoria deletada com sucesso',
    schema: {
      $ref: "#/definitions/category"
    }
  }
  */
);

exports. default = routes;
