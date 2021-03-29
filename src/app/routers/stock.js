import { Router } from 'express';
import StockController from '../controllers/StockController';
import { validateData, validateStockExists } from '../middlewares/stock';

const routes = new Router();

routes.get(
  '/stock',
  StockController.index
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
  validateStockExists,
  StockController.show
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
  validateData,
  StockController.store
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
  validateStockExists,
  validateData,
  StockController.update
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
  validateStockExists,
  StockController.delete
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

export default routes;
