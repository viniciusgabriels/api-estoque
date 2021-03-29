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
      schema: { $ref: "#/definitions/customers" }
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
      schema: { $ref: "#/definitions/customers" }
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
      schema: { $ref: "#/definitions/customers" }
    }
  */
);
routes.put(
  '/customers/:id',
  validateCustomerExists,
  validateData,
  CustomerController.update
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
      schema: { $ref: "#/definitions/customers" }
    }
  */
);
routes.delete(
  '/customers/:id',
  validateCustomerExists,
  CustomerController.delete
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
      schema: { $ref: "#/definitions/customers" }
    }
  */
);

export default routes;
