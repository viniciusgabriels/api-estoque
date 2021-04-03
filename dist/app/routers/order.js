"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _OrderController = require('../controllers/OrderController'); var _OrderController2 = _interopRequireDefault(_OrderController);
var _order = require('../middlewares/order');

const routes = new (0, _express.Router)();

routes.get(
  '/orders',
  _OrderController2.default.index
  /*
  #swagger.tags = ['Ordem']
  #swagger.description = 'Rota para buscar todas as ordens'
  #swagger.security = [{Bearer: []}]
  }
  */
);
routes.get(
  '/orders/:id',
  [_order.validateId],
  _OrderController2.default.show
  /*
  #swagger.tags = ['Ordem']
  #swagger.description = 'Rota para buscar uma ordem'
  #swagger.security = [{Bearer: []}]
    #swagger.parameters['id'] = {
      in: 'path',
      description: 'Buscar uma ordem',
      required: true,
      type: 'integer'
    }
  */
);
routes.post(
  '/orders',
  _OrderController2.default.store
  /*
  #swagger.tags = ['Ordem']
  #swagger.description = 'Rota para registrar uma ordem'
  #swagger.security = [{Bearer: []}]
  #swagger.parameters['Ordem'] = {
    in: 'body',
    description: 'Registrar uma ordem',
    required: true,
    type: 'string',
    schema: {
      $ref: "#definitions/order"
    }
  }
  */
);
routes.put(
  '/orders/:id',
  [_order.validateId],
  _OrderController2.default.update
  /*
  #swagger.tags = ['Ordem']
  #swagger.description = 'Rota para registrar uma ordem'
  #swagger.security = [{Bearer: []}]
  #swagger.parameters['Ordem'] = {
    in: 'body',
    description: 'Registrar uma ordem',
    required: true,
    schema: {
      $ref: "#definitions/order"
    }
  }
  */
);
routes.delete(
  '/orders/:id',
  [_order.validateId],
  _OrderController2.default.delete
  /*
  #swagger.tags = ['Ordem']
  #swagger.description = 'Rota para deletar uma ordem'
  #swagger.security = [{Bearer: []}]

    #swagger.parameters['id'] = {
      in: 'path',
      description: 'Deletar uma ordem',
      required: true,
      type: 'integer'
    }
  */
);

exports. default = routes;
