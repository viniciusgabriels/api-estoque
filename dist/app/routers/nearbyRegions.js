"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _NearbyRegionController = require('../controllers/NearbyRegionController'); var _NearbyRegionController2 = _interopRequireDefault(_NearbyRegionController);
var _nearby = require('../middlewares/nearby');

const routes = new (0, _express.Router)();

routes.get('/nearbyregion', _NearbyRegionController2.default.index
/*
  #swagger.tags = ['Regiões próximas']
  #swagger.description = 'Rota para listas todas as regiões próximas'

   #swagger.parameters['region'] = {
      in: 'body',
      description: 'ID da região',
      required: false,
      type: 'integer'
    }
    #swagger.parameters['ID da região próxima'] = {
      in: 'body',
      description: 'Região próxima',
      required: false,
      type: 'integer'
    }

    #swagger.response[200] = {
      description: 'Regiões listadas',
      schema: { $ref: "#/definitions/nearbyRegion" }
    }
  */
);
routes.get('/nearbyregion/:id', _NearbyRegionController2.default.show
  /*
  #swagger.tags = ['Regiões próximas']
  #swagger.description = 'Rota para listar uma região próxima'

    #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID do região',
      required: true,
      type: 'integer'
    }

    #swagger.response[200] = {
      description: 'Região listada',
      schema: { $ref: "#/definitions/nearbyRegion" }
    }
  */
);
routes.post('/nearbyregion', [_nearby.validateNumber, _nearby.notSameNumber], _NearbyRegionController2.default.store
  /*
  #swagger.tags = ['Regiões próximas']
  #swagger.description = 'Rota para cadastrar uma região próxima'

    #swagger.parameters['region'] = {
      in: 'body',
      description: 'ID da região',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['ID da região próxima'] = {
      in: 'body',
      description: 'Região próxima',
      required: true,
      type: 'integer'
    }

    #swagger.response[201] = {
      description: 'Região cadastrada',
      schema: { $ref: "#/definitions/nearbyRegion" }
    }
  */
);
routes.put('/nearbyregion/:id', [_nearby.validateNumber, _nearby.notSameNumber], _NearbyRegionController2.default.update
  /*
  #swagger.tags = ['Regiões próximas']
  #swagger.description = 'Rota para atualizar uma região próxima'

    #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID do região',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['region'] = {
      in: 'body',
      description: 'ID da região',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['ID da região próxima'] = {
      in: 'body',
      description: 'Região próxima',
      required: true,
      type: 'integer'
    }

    #swagger.response[200] = {
      description: 'Região atualizada',
      schema: { $ref: "#/definitions/nearbyRegion" }
    }
  */
);
routes.delete('/nearbyregion/:id', _NearbyRegionController2.default.delete
  /*
  #swagger.tags = ['Regiões próximas']
  #swagger.description = 'Rota para deletar uma região próxima'

    #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID do região',
      required: true,
      type: 'integer'
    }

    #swagger.response[204] = {
      description: 'Região deletada',
      schema: { $ref: "#/definitions/nearbyRegion" }
    }
  */
);

exports. default = routes;
