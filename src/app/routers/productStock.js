import { Router } from 'express';
import ProductStockController from '../controllers/ProductStockController';

const routes = new Router();

routes.get(
  '/product-stock', 
  ProductStockController.index
    /*
  #swagger.tags = ['Produto Estoque']
  #swagger.description = 'Rota para buscar todos os Produtos / Estoque'

    #swagger.parameters['name'] = {
      in: 'body',
      description: 'Id do produto',
      required: false,
      type: 'integer'
    }
    #swagger.parameters['local'] = {
      in: 'body',
      description: 'Id do Estoque',
      required: false,
      type: 'integer'
    }

    #swagger.response[200] = {
      description: 'Produto estoque listados',
      schema: { $ref: "#/definitions/productStock" }
    }
  */
  );
routes.get(
  '/product-stock/:id', 
  ProductStockController.show
    /*
  #swagger.tags = ['Produto Estoque']
  #swagger.description = 'Rota para procurar e listar um Produto Estoque'

    #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID do Produto Estoque',
      required: true,
      type: 'integer'
    }

    #swagger.response[200] = {
      description: 'Produto Estoque',
      schema: { $ref: "#/definitions/productStock" }
    }
  */
  );
routes.post(
  '/product-stock', 
  ProductStockController.store
    /*
  #swagger.tags = ['Produto Estoque']
  #swagger.description = 'Rota para cadastrar um novo Produto Estoque'

    #swagger.parameters['quantity'] = {
      in: 'body',
      description: 'Quantidade de produto',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['productId'] = {
      in: 'body',
      description: 'Id do produto',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['stockId'] = {
      in: 'body',
      description: 'ID do estoque',
      required: true,
      type: 'integer'
    }

    #swagger.response[200] = {
      description: 'Produto Estoque criado',
      schema: { $ref: "#/definitions/productStock" }
    }
  */
  );
routes.put(
  '/product-stock/:id', 
  ProductStockController.update
      /*
  #swagger.tags = ['Produto Estoque']
  #swagger.description = 'Rota para atualizar um Produto Estoque'

      #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID do cliente',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['quantity'] = {
      in: 'body',
      description: 'Quantidade de produto',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['productId'] = {
      in: 'body',
      description: 'Id do produto',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['stockId'] = {
      in: 'body',
      description: 'ID do estoque',
      required: true,
      type: 'integer'
    }

    #swagger.response[200] = {
      description: 'Produto Estoque atualizado',
      schema: { $ref: "#/definitions/productStock" }
    }
  */
  );
routes.delete(
  '/product-stock/:id', 
  ProductStockController.delete
   /*
  #swagger.tags = ['Produto Estoque']
  #swagger.description = 'Rota para deletar um Produto Estoque'

    #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID do cliente',
      required: true,
      type: 'integer'
    }

    #swagger.response[202] = {
      description: 'Produto Estoque deletado com sucesso',
      schema: { $ref: "#/definitions/productStock" }
    }
  */ 
  );

export default routes;
