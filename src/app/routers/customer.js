import { Router } from 'express';
import CustomerController from '../controllers/CustomerController';
import { validateData, validateCustomerExists } from '../middlewares/customer';

const routes = new Router();

routes.get(
  '/customers',
  CustomerController.index
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
      schema: {
        minimum: 1
        $ref: "#/definitions/customers"
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
  '/customers/:id',
  validateCustomerExists,
  CustomerController.show
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
      schema: {
        minimum: 1
        $ref: "#/definitions/customers"
    }
    responses: {
      '200': {
        description: "OK"
      }
    }
  }
*/
);
routes.post(
  '/customers',
  validateData,
  CustomerController.store
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
    schema: {
      minimum: 1
      $ref: "#/definitions/customers"
    }
    responses: {
      '200': {
        description: "OK"
      }
    }
  }
*/
);
routes.put(
  '/customers/:id',
  validateCustomerExists,
  validateData,
  CustomerController.update
);
routes.delete(
  '/customers/:id',
  validateCustomerExists,
  CustomerController.delete
);

export default routes;
