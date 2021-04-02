"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _StockController = require('../controllers/StockController'); var _StockController2 = _interopRequireDefault(_StockController);
var _stock = require('../middlewares/stock');

const routes = new (0, _express.Router)();

routes.get(
  '/stock',
  _StockController2.default.index
  /*
    #swagger.tags = ['Estoques']
    #swagger.description = 'Rota para buscar todos os estoques'

    #swagger.parameters['local'] = {
      in: 'body',
      description: 'Local do estoque',
      required: false,
      type: 'string'
    }

    #swagger.response[200] = {
      description: 'Estoques listados',
      schema: { $ref: "#/definitions/stock" }
    }
  */
);
routes.get(
  '/stock/:id',
  _stock.validateStockExists,
  _StockController2.default.show
  /*
    #swagger.tags = ['Estoques']
    #swagger.description = 'Rota para buscar apenas um estoque'

    #swagger.parameters['id'] = {
      in: 'body',
      description: 'ID do estoque',
      required: true,
      type: 'integer'
    }

    #swagger.response[200] = {
      description: 'Estoque listado',
      schema: { $ref: "#/definitions/stock" }
    }
  */
);
routes.post(
  '/stock',
  _stock.validateData,
  _StockController2.default.store
  /*
    #swagger.tags = ['Estoques']
    #swagger.description = 'Rota para cadastrar um novo estoque'

    #swagger.parameters['local'] = {
      in: 'body',
      description: 'Local do estoque',
      required: true,
      type: 'string'
    }
    #swagger.parameters['regionId'] = {
      in: 'body',
      description: 'ID da região do estoque',
      required: true,
      type: 'integer'
    }

    #swagger.response[201] = {
      description: 'Estoque cadastrado',
      schema: { $ref: "#/definitions/stock" }
    }
  */
);
routes.put(
  '/stock/:id',
  _stock.validateStockExists,
  _stock.validateData,
  _StockController2.default.update
  /*
    #swagger.tags = ['Estoques']
    #swagger.description = 'Rota para atualizar um estoque'

    #swagger.parameters['id'] = {
      in: 'body',
      description: 'ID do estoque',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['local'] = {
      in: 'body',
      description: 'Local do estoque',
      required: true,
      type: 'string'
    }
    #swagger.parameters['regionId'] = {
      in: 'body',
      description: 'ID da região do estoque',
      required: true,
      type: 'integer'
    }

    #swagger.response[200] = {
      description: 'Estoque atualizado',
      schema: { $ref: "#/definitions/stock" }
    }
  */
);
routes.delete(
  '/stock/:id',
  _stock.validateStockExists,
  _StockController2.default.delete
  /*
    #swagger.tags = ['Estoques']
    #swagger.description = 'Rota para deletar um estoque'

    #swagger.parameters['id'] = {
      in: 'body',
      description: 'ID do estoque',
      required: true,
      type: 'integer'
    }

    #swagger.response[204] = {
      description: 'Estoque deletado',
      schema: { $ref: "#/definitions/stock" }
    }
  */
);

exports. default = routes;
