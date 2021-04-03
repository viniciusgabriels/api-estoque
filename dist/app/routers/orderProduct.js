"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _OrderProductController = require('../controllers/OrderProductController'); var _OrderProductController2 = _interopRequireDefault(_OrderProductController);

const routes = new (0, _express.Router)();

routes.get(
  '/order-product',
  _OrderProductController2.default.index
  /*
  #swagger.tags = ['Produto-Ordem']
  #swagger.description = 'Rota para buscar todos os produtos das ordens'
  #swagger.security = [{Bearer: []}]
  }
  */
);

routes.get(
  '/order-product/:orderId/:id',
  _OrderProductController2.default.show
  /*
  #swagger.tags = ['Ordem']
  #swagger.description = 'Rota para procurar e listar um produto de uma ordem pelo ID da ordem e ID do produto em estoque'
  #swagger.security = [{Bearer: []}]
    #swagger.parameters['orderId'] = {
      in: 'path',
      description: 'ID da ordem de venda ou devolução',
      required: true,
      type: 'integer'
    }

    #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID do produto em estoque',
      required: true,
      type: 'integer'
    }

    #swagger.response[200] = {
      description: 'Produto da ordem de venda ou devolução',
      schema: { $ref: "#/definitions/order-product/:orderId/:id" }
    }
  */
);

exports. default = routes;
