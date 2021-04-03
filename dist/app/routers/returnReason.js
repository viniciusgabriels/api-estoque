"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ReturnReasonController = require('../controllers/ReturnReasonController'); var _ReturnReasonController2 = _interopRequireDefault(_ReturnReasonController);






var _returnReason = require('../middlewares/returnReason');

const routes = new (0, _express.Router)();

routes.get(
  '/return-reason',
  _ReturnReasonController2.default.index
  // #swagger.tags = ['Motivo da devolução']
  // #swagger.description = 'Endpoint para buscar todas as categorias'
  /*
  #swagger.parameters['description'] = {
    in: 'query',
    description: 'Descrição do motivo da devolução',
    required: false,
    type: 'string'
  } */
  /* 
  #swagger.response[200] = {
    description: 'Return reason list',
    schema: {
      minimum: 1
      $ref: "#/definitions/return-reason"
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
  '/return-reason/:id',
  [_returnReason.validateId, _returnReason.validateReturnReasonExist],
  _ReturnReasonController2.default.show
  // #swagger.tags = ['Motivo da devolução']
  // #swagger.description = 'Endpoint para buscar um motivo de devolução'
  /*  #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID do motivo',
    required: true,
    type: 'integer',
  } 
  */
);
routes.post(
  '/return-reason',
  _returnReason.validateData,
  _ReturnReasonController2.default.store
  // #swagger.tags = ['Motivo da devolução']
  // #swagger.description = 'Endpoint para cadastrar uma motivo de devolução'
  /*
  #swagger.parameters['description'] = {
    in: 'body',
    description: 'Descrição do motivo de devolução',
    required: true,
    type: 'string'
  } */
  /* #swagger.response[200] = {
    description: 'Motivo cadastrado com sucesso',
    schema: {
      $ref: "#/definitions/return-reason"
    }
  }
  */
);
routes.put(
  '/return-reason/:id',
  [_returnReason.validateData, _returnReason.validateId, _returnReason.validateReturnReasonExist],
  _ReturnReasonController2.default.update
  // #swagger.tags = ['Motivo da devolução']
  // #swagger.description = 'Endpoint para atualizar uma categotia'
  /* #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID do motivo',
    required: true,
    type: 'integer',
  } */
  /* #swagger.parameters['description'] = {
    in: 'body',
    description: 'Descrição do motivo de devolução',
    required: true,
    type: 'string'
  } */
  /* #swagger.response[200] = {
    description: 'Motivo atualizado com sucesso',
    schema: {
      $ref: "#/definitions/return-reason"
    }
  }
  */
);
routes.delete(
  '/return-reason/:id',
  [_returnReason.validateId, _returnReason.validateReturnReasonExist, _returnReason.returnReasonExistInOrderProduct],
  _ReturnReasonController2.default.delete
  // #swagger.tags = ['Motivo da devolução']
  // #swagger.description = 'Endpoint para deletar um motivo de devolução'
  /*  #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID do motivo',
    required: true,
    type: 'integer',
  } 
  */
  /*
  #swagger.response[204] = {
    description: 'Motivo de devolução deletado com sucesso',
    schema: {
      $ref: "#/definitions/category"
    }
  }
  */
);

exports. default = routes;
