import { Router } from 'express';
import OrderController from '../controllers/OrderController';
import { validateId } from '../middlewares/order';
import { checkStorage, checkRegionCustomer, checkNearbyRegions } from '../middlewares/productStock';

const routes = new Router();

routes.get(
  '/orders',
  OrderController.index
  /*
  #swagger.tags = ['Ordem']
  #swagger.description = 'Rota para buscar todas as ordens'
  #swagger.security = [{Bearer: []}]
  }
  */
);
routes.get(
  '/orders/:id',
  [validateId],
  OrderController.show
  /*
  #swagger.tags = ['Ordem']
  #swagger.description = 'Rota para buscar uma ordem'
  #swagger.security = [{Bearer: []}]
    #swagger.parameters['id'] = {
      in: 'path',
      description: 'Buscar uma ordem',
      required: true,
      type: 'integer'
    }
  */
);
routes.post(
  '/orders',
  checkRegionCustomer,
  checkNearbyRegions,
  checkStorage,
  OrderController.store

  /*
  #swagger.tags = ['Ordem']
  #swagger.description = 'Rota para registrar uma ordem'
  #swagger.security = [{Bearer: []}]
  #swagger.parameters['Ordem'] = {
    in: 'body',
    description: 'Registrar uma ordem',
    required: true,
    type: 'string',
    schema: {
      $ref: "#definitions/order"
    }
  }
  */
);
routes.put(
  '/orders/:id',
  [validateId],
  OrderController.update
  /*
  #swagger.tags = ['Ordem']
  #swagger.description = 'Rota para registrar uma ordem'
  #swagger.security = [{Bearer: []}]
  #swagger.parameters['Ordem'] = {
    in: 'body',
    description: 'Registrar uma ordem',
    required: true,
    schema: {
      $ref: "#definitions/order"
    }
  }
  */
);
routes.delete(
  '/orders/:id',
  [validateId],
  OrderController.delete
  /*
  #swagger.tags = ['Ordem']
  #swagger.description = 'Rota para deletar uma ordem'
  #swagger.security = [{Bearer: []}]

    #swagger.parameters['id'] = {
      in: 'path',
      description: 'Deletar uma ordem',
      required: true,
      type: 'integer'
    }
  */
);

export default routes;
