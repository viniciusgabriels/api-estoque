import { Router } from 'express';
import OrderProductController from '../controllers/OrderProductController';

const routes = new Router();

routes.get(
  '/order-product',
  OrderProductController.index
  /*
  #swagger.tags = ['Produto-Ordem']
  #swagger.description = 'Rota para buscar todos os produtos das ordens'
  #swagger.security = [{Bearer: []}]
  }
  */
);

routes.get(
  '/order-product/:orderId/:id',
  OrderProductController.show
  /*
  #swagger.tags = ['Produto-Ordem']
  #swagger.description = 'Rota para procurar e listar um produto de uma ordem pelo ID da ordem e ID do produto em estoque'
  #swagger.security = [{Bearer: []}]
    #swagger.parameters['orderId'] = {
      in: 'path',
      description: 'ID da ordem de venda ou devolução',
      required: true,
      type: 'integer'
    }

    #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID do produto em estoque',
      required: true,
      type: 'integer'
    }

    #swagger.response[200] = {
      description: 'Produto da ordem de venda ou devolução',
      schema: { $ref: "#/definitions/order-product/:orderId/:id" }
    }
  */
);

export default routes;
