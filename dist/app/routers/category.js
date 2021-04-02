"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _CategoryController = require('../controllers/CategoryController'); var _CategoryController2 = _interopRequireDefault(_CategoryController);






var _category = require('../middlewares/category');

const routes = new (0, _express.Router)();

routes.get(
  '/categories',
  _CategoryController2.default.index
  // #swagger.tags = ['Categorias']
  // #swagger.description = 'Endpoint para buscar todas as categorias'
  // #swagger.security = [{JWT: []}]
  /* 
  #swagger.response[200] = {
    description: 'Lista de categorias',
    schema: {
      $ref: "#definitions/CategoryList"
    }
  }
  */
  /*
    #swagger.responses[404] = {
      schema: {
        message: 'NOT_FOUND'
      }
    }
  */
);
routes.get(
  '/categories/:id',
  [_category.validateId, _category.validateCategoryExist],
  _CategoryController2.default.show
  // #swagger.tags = ['Categorias']
  // #swagger.description = 'Endpoint para buscar uma categotia'
  // #swagger.security = [{JWT: []}]
  /*  #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID da categoria',
    required: true,
    type: 'integer',
    schema: {
      "$ref": "#definitions/CategoryList"
    },
  } 
  */
  /*
    #swagger.responses[404] = {
      schema: {
        message: 'NOT_FOUND'
      }
    }
  */
);
routes.post(
  '/categories',
  _category.validateData,
  _CategoryController2.default.store
  // #swagger.tags = ['Categorias']
  // #swagger.description = 'Endpoint para cadastrar uma categotia'
  // #swagger.security = [{Bearer: []}]
  /*
  #swagger.parameters['Categories'] = {
    in: 'body',
    description: 'Informar nome para cadastro da categoria',
    required: true,
    type: 'string',
    schema: {
      $ref: "#definitions/CategoryStore"
    }
  } */
  /*
    #swagger.responses[400] = {
      schema: {
        message: 'BAD_REQUEST'
      }
    }
  */
);
routes.put(
  '/categories/:id',
  [_category.validateData, _category.validateId, _category.validateCategoryExist],
  _CategoryController2.default.update
  // #swagger.tags = ['Categorias']
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
      $ref: "#definitions/CategoryUpdate"
    }
  }
  */
);
routes.delete(
  '/categories/:id',
  [_category.validateId, _category.validateCategoryExist, _category.categoryExistInProducts],
  _CategoryController2.default.delete
  // #swagger.tags = ['Categorias']
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
