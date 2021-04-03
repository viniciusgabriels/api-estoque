"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _CustomerController = require('../controllers/CustomerController'); var _CustomerController2 = _interopRequireDefault(_CustomerController);
var _customer = require('../middlewares/customer');

const routes = new (0, _express.Router)();

routes.get(
  '/customers',
  _CustomerController2.default.index
  /*
  #swagger.tags = ['Clientes']
  #swagger.description = 'Rota para buscar todos os clientes'

    #swagger.parameters['name'] = {
      in: 'body',
      description: 'Nome do cliente',
      required: false,
      type: 'string'
    }
    #swagger.parameters['phone'] = {
      in: 'body',
      description: 'Telefone do cliente',
      required: false,
      type: 'integer'
    }

    #swagger.response[200] = {
      description: 'Clientes listados',
      schema: { $ref: "#/definitions/customer" }
    }
  */
);
routes.get(
  '/customers/:id',
  _customer.validateCustomerExists,
  _CustomerController2.default.show
  /*
  #swagger.tags = ['Clientes']
  #swagger.description = 'Rota para procurar e listar um cliente pelo ID'

    #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID do cliente',
      required: true,
      type: 'integer'
    }

    #swagger.response[200] = {
      description: 'Cliente listado',
      schema: { $ref: "#/definitions/customer" }
    }
  */
);
routes.post(
  '/customers',
  _customer.validateData,
  _CustomerController2.default.store
  /*
  #swagger.tags = ['Clientes']
  #swagger.description = 'Rota para cadastrar um novo cliente'

    #swagger.parameters['name'] = {
      in: 'body',
      description: 'Nome do cliente',
      required: true,
      type: 'string'
    }
    #swagger.parameters['phone'] = {
      in: 'body',
      description: 'Telefone do cliente',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['regionId'] = {
      in: 'body',
      description: 'ID da região do cliente',
      required: true,
      type: 'integer'
    }

    #swagger.response[201] = {
      description: 'Cliente cadastrado',
      schema: { $ref: "#/definitions/customer" }
    }
  */
);
routes.put(
  '/customers/:id',
  _customer.validateCustomerExists,
  _customer.validateData,
  _CustomerController2.default.update
  /*
  #swagger.tags = ['Clientes']
  #swagger.description = 'Rota para atualizar os dados de um cliente'

    #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID do cliente',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['name'] = {
      in: 'body',
      description: 'Nome do cliente',
      required: true,
      type: 'string'
    }
    #swagger.parameters['phone'] = {
      in: 'body',
      description: 'Telefone do cliente',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['regionId'] = {
      in: 'body',
      description: 'ID da região do cliente',
      required: true,
      type: 'integer'
    }

    #swagger.response[200] = {
      description: 'Cliente atualizado com sucesso',
      schema: { $ref: "#/definitions/customer" }
    }
  */
);
routes.delete(
  '/customers/:id',
  _customer.validateCustomerExists,
  _CustomerController2.default.delete
  /*
  #swagger.tags = ['Clientes']
  #swagger.description = 'Rota para deletar um cliente'

    #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID do cliente',
      required: true,
      type: 'integer'
    }

    #swagger.response[204] = {
      description: 'Cliente deletado com sucesso',
      schema: { $ref: "#/definitions/customer" }
    }
  */
);

exports. default = routes;
