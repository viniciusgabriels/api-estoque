"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _TypeController = require('../controllers/TypeController'); var _TypeController2 = _interopRequireDefault(_TypeController);
var _type = require('../middlewares/type');

const routes = new (0, _express.Router)();

routes.get(
  '/types',
  _TypeController2.default.index
  /*
  #swagger.tags = ['Tipos de ordem']
  #swagger.description = 'Rota para buscar todos os tipos de ordem'

    #swagger.parameters['description'] = {
      in: 'body',
      description: 'Descrição do tipo',
      required: false,
      type: 'string'
    }

    #swagger.response[200] = {
      description: 'Todos os tipos de ordens listados',
      schema: { $ref: "#/definitions/types" }
    }
  */
);
routes.get(
  '/types/:id',
  _type.validateTypeExists,
  _TypeController2.default.show
  /* 
  #swagger.tags = ['Tipos de ordem']
  #swagger.description = 'Rota para buscar apenas um tipos de ordem'

    #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID do tipo',
      required: true,
      type: 'integer'
    }

    #swagger.response[200] = {
      description: 'Apenas um tipos de ordem listado',
      schema: { $ref: "#/definitions/types" }
    }
  */
);
routes.post(
  '/types',
  _type.validateData,
  _TypeController2.default.store
  /*
  #swagger.tags = ['Tipos de ordem']
  #swagger.description = 'Rota para cadatrar um novo tipo de ordem'

    #swagger.parameters['description'] = {
      in: 'body',
      description: 'Descrição do tipo',
      required: true,
      type: 'string'
    }

    #swagger.response[201] = {
      description: 'Tipo de ordem criado',
      schema: { $ref: "#/definitions/types" }
    }
  */
);
routes.put(
  '/types/:id',
  _type.validateTypeExists,
  _type.validateData,
  _TypeController2.default.update
  /*
  #swagger.tags = ['Tipos de ordem']
  #swagger.description = 'Rota para atualizar um tipo de ordem'

    #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID do tipo',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['description'] = {
      in: 'body',
      description: 'Descrição do tipo',
      required: true,
      type: 'string'
    }

    #swagger.response[200] = {
      description: 'Tipo de ordem atualizado',
      schema: { $ref: "#/definitions/types" }
    }
  */
);
routes.delete(
  '/types/:id',
  _type.validateTypeExists,
  _TypeController2.default.delete
  /*
  #swagger.tags = ['Tipos de ordem']
  #swagger.description = 'Rota para deletar um tipo de ordem'

    #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID do tipo',
      required: true,
      type: 'integer'
    }

    #swagger.response[204] = {
      description: 'Tipo de ordem deletado',
      schema: { $ref: "#/definitions/types" }
    }
  */
);

exports. default = routes;
