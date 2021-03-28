import { Router } from 'express';
import ProductController from '../controllers/ProductController';

import {
  validateData,
  validateId,
  validateProductExist,
  productExistInProductStock,
} from '../middlewares/product';

const routes = new Router();

routes.get(
  '/products',
  ProductController.index
  // #swagger.tags = ['Products']
  // #swagger.description = 'Endpoint para buscar todos os produtos'
  /*
  #swagger.parameters['name'] = {
    in: 'query',
    description: 'Nome do produto',
    required: false,
    type: 'string'
  } */
  /*
  #swagger.parameters['categoryId'] = {
    in: 'query',
    description: 'ID da categoria',
    required: false,
    type: 'string'
  } */
  /* 
  #swagger.response[200] = {
    description: 'Products list',
    schema: {
      minimum: 1
      $ref: "#/definitions/products"
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
  '/products/:id',
  [validateId, validateProductExist],
  ProductController.show
  // #swagger.tags = ['Products']
  // #swagger.description = 'Endpoint para listar um produto'
  /*  #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID do produto',
    required: true,
    type: 'integer',
  } 
  */
  /* 
  #swagger.response[200] = {
    description: 'List one product',
    schema: {
      $ref: "#/definitions/products"
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
  '/products',
  validateData,
  ProductController.store
  // #swagger.tags = ['Products']
  // #swagger.description = 'Endpoint para cadastrar um novo produto'
  // #swagger.security = [{Bearer: []}]
  /*
  #swagger.parameters['name'] = {
    in: 'body',
    description: 'Nome do produto',
    required: true,
    type: 'string'
  } */
  /* #swagger.parameters['description'] = {
    in: 'body',
    description: 'Descrição do produto',
    required: false,
    type: 'string'
  } */
  /* #swagger.parameters['price'] = {
    in: 'body',
    description: 'Valor do produto',
    required: true,
    type: 'number'
  } */
  /* #swagger.parameters['status'] = {
    in: 'body',
    description: 'Status do produto, ativo? true ou false',
    required: true,
    type: 'boolean'
  } */
  /* #swagger.parameters['categoryId'] = {
    in: 'body',
    description: 'ID da categoria do produto',
    required: true,
    type: 'integer'
  } */
  /* #swagger.response[200] = {
    description: 'Categoria cadastrada com sucesso',
    schema: {
      $ref: "#/definitions/category"
    }
  }
  */
);
routes.put(
  '/products/:id',
  [validateData, validateId, validateProductExist],
  ProductController.update
  // #swagger.tags = ['Products']
  // #swagger.description = 'Endpoint para atualizar um produto'
  // #swagger.security = [{Bearer: []}]
  /* #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID da categoria',
    required: true,
    type: 'integer',
  } */
  /* #swagger.parameters['name'] = {
    in: 'body',
    description: 'Nome do produto',
    required: true,
    type: 'string'
  } */
  /* #swagger.parameters['description'] = {
    in: 'body',
    description: 'Descrição do produto',
    required: false,
    type: 'string'
  } */
  /* #swagger.parameters['price'] = {
    in: 'body',
    description: 'Valor do produto',
    required: true,
    type: 'number'
  } */
  /* #swagger.parameters['status'] = {
    in: 'body',
    description: 'Status do produto, ativo? true ou false',
    required: true,
    type: 'boolean'
  } */
  /*
  #swagger.parameters['categoryId'] = {
    in: 'body',
    description: 'ID da categoria do produto',
    required: true,
    type: 'integer'
  } */
  /* #swagger.response[200] = {
    description: 'Produto atualizado com sucesso',
    schema: {
      $ref: "#/definitions/products"
    }
  } */
);
routes.delete(
  '/products/:id',
  [validateId, validateProductExist, productExistInProductStock],
  ProductController.delete
  // #swagger.tags = ['Products']
  // #swagger.description = 'Endpoint para deletar um produto'
  // #swagger.security = [{Bearer: []}]
  /*  #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID do produto',
    required: true,
    type: 'integer',
  } 
  */
  /*
  #swagger.response[204] = {
    description: 'Produto deletado com sucesso',
    schema: {
      $ref: "#/definitions/products"
    }
  }
  */
);

export default routes;
