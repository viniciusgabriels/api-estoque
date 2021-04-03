"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _RegionController = require('../controllers/RegionController'); var _RegionController2 = _interopRequireDefault(_RegionController);

var _region = require('../middlewares/region');

const routes = new (0, _express.Router)();

routes.get(
  '/region', 
  _RegionController2.default.index
  /*
  #swagger.tags = ['Regiões']
  #swagger.description = 'Rota para buscar todas as regiões'

    #swagger.response[200] = {
      description: 'Clientes listados',
      schema: { $ref: "#/definitions/customer" }
    }
  */
  );
routes.get(
  '/region/:id', 
  _RegionController2.default.show
    /*
  #swagger.tags = ['Regiões']
  #swagger.description = 'Rota para listar uma região'

    #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID da região',
      required: true,
      type: 'integer'
    }

    #swagger.response[200] = {
      description: 'Região listada',
      schema: { $ref: "#/definitions/region" }
    }
  */
  );
routes.post(
  '/region',
  _region.validateData, 
  _RegionController2.default.store
    /*
  #swagger.tags = ['Regiões']
  #swagger.description = 'Rota para cadastrar uma nova Região'

    #swagger.parameters['name'] = {
      in: 'body',
      description: 'Nome do cliente',
      required: true,
      type: 'string'
    }
    #swagger.response[200] = {
      description: 'Região cadastrada',
      schema: { $ref: "#/definitions/region" }
    }
  */
  );
routes.put(
  '/region/:id', 
  _region.validateData, 
  _RegionController2.default.update
    /*
  #swagger.tags = ['Regiões']
  #swagger.description = 'Rota para atualizar os dados de uma Região'

    #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID da região',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['name'] = {
      in: 'body',
      description: 'Nome da Região',
      required: true,
      type: 'string'
    }

    #swagger.response[200] = {
      description: 'Região atualizada com sucesso',
      schema: { $ref: "#/definitions/region" }
    }
  */
  );
routes.delete(
  '/region/:id', 
  _RegionController2.default.delete
   /*
  #swagger.tags = ['Regiões']
  #swagger.description = 'Rota para deletar uma região'

    #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID da Região',
      required: true,
      type: 'integer'
    }

    #swagger.response[204] = {
      description: 'Região deletada com sucesso',
      schema: { $ref: "#/definitions/region" }
    }
  */ 
  );

exports. default = routes;
