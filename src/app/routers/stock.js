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

    #swagger.parameters['local'] = {
      in: 'body',
      description: 'Local do estoque',
      required: false,
      type: 'string'
    }

    #swagger.response[200] = {
      description: 'Estoque listado',
      schema: { $ref: "#/definitions/stock" }
    }
  */
);
routes.post('/stock', validateData, StockController.store);
routes.put(
  '/stock/:id',
  validateStockExists,
  validateData,
  StockController.update
);
routes.delete('/stock/:id', validateStockExists, StockController.delete);

export default routes;
