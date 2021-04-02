"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ReportCategoryController = require('../controllers/ReportCategoryController'); var _ReportCategoryController2 = _interopRequireDefault(_ReportCategoryController);

const routes = new (0, _express.Router)();

routes.get(
  '/report-categories',
  _ReportCategoryController2.default.index
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
  '/report-categories/:id',
  _ReportCategoryController2.default.show
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
exports. default = routes;
