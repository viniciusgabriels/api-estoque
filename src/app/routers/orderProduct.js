import { Router } from 'express';
import OrderProductController from '../controllers/OrderProductController';

const routes = new Router();

routes.get(
  '/order-product',
  OrderProductController.index
  /*
  #swagger.tags = ['Produto-Ordem']
  #swagger.description = 'Rota para buscar todos os produtos de todas as ordens'

    #swagger.parameters['order_id'] = {
      in: 'body',
      description: 'Id da ordem',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['product_stock_id'] = {
      in: 'body',
      description: 'Id do produto-stock',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['return_reason_id'] = {
      in: 'body',
      description: 'Id do motivo de retorno do produto',
      required: false,
      type: 'integer'
    }
    #swagger.parameters['quantity'] = {
      in: 'body',
      description: 'Quantidade',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['price'] = {
      in: 'body',
      description: 'Preço do produto',
      required: true,
      type: 'float'
    }

    #swagger.response[200] = {
      description: 'Produtos das ordens listadas',
      schema: { $ref: "#/definitions/order-product" }
    }
  */
);

routes.get(
  '/order-product/:orderId/:id',
  OrderProductController.show
  /*
  #swagger.tags = ['Produto-Ordem']
  #swagger.description = 'Rota para procurar e listar um produto de uma ordem pelo ir da ordem e id do produto em estoque'

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
