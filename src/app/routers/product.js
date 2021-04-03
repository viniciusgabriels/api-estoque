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
  // #swagger.tags = ['Produtos']
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
      $ref: "#definitions/product"
    }
    responses: {
      '200': {
        description: "OK"
      }
    }
  }
  */
  /*
    #swagger.responses[400] = {
      schema: {
        message: 'BAD_REQUEST'
      }
    }
  */
  /*
    #swagger.responses[404] = {
      schema: {
        message: 'NOT_FOUND'
      }
    }
  */
);
routes.get(
  '/products/:id',
  [validateId, validateProductExist],
  ProductController.show
  // #swagger.tags = ['Produtos']
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
      $ref: "#definitions/product"
    }
    responses: {
      '200': {
        description: "OK"
      }
    }
  }
  */
  /*
    #swagger.responses[400] = {
      schema: {
        message: 'BAD_REQUEST'
      }
    }
  */
  /*
    #swagger.responses[404] = {
      schema: {
        message: 'NOT_FOUND'
      }
    }
  */
);
routes.post(
  '/products',
  validateData,
  ProductController.store
  // #swagger.tags = ['Produtos']
  // #swagger.description = 'Endpoint para cadastrar um novo produto'
  // #swagger.security = [{Bearer: []}]
  /*
  #swagger.parameters['Produtos'] = {
    in: 'body',
    description: 'Cadastro de produto',
    required: true,
    type: 'string',
    schema: {
      $ref: "#definitions/product"
    }
  } */
  /* #swagger.response[200] = {
    description: 'Produto cadastrado com sucesso',
    schema: {
      $ref: "#definitions/products"
    }
  } */
  /*
    #swagger.responses[400] = {
      schema: {
        message: 'BAD_REQUEST'
      }
    }
  */
);
routes.put(
  '/products/:id',
  [validateData, validateId, validateProductExist],
  ProductController.update
  // #swagger.tags = ['Produtos']
  // #swagger.description = 'Endpoint para atualizar um produto'
  // #swagger.security = [{Bearer: []}]
  /* #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID do produto',
    required: true,
    type: 'integer',
  } */
  /*
  #swagger.parameters['Produtos'] = {
    in: 'body',
    description: 'Cadastro de produto',
    required: true,
    type: 'string',
    schema: {
      $ref: "#definitions/product"
    }
  } */
  /* #swagger.response[200] = {
    description: 'Produto atualizado com sucesso',
    schema: {
      $ref: "#definitions/product"
    }
  } */
  /*
    #swagger.responses[400] = {
      schema: {
        message: 'BAD_REQUEST'
      }
    }
  */
  /*
    #swagger.responses[404] = {
      schema: {
        message: 'NOT_FOUND'
      }
    }
  */
);
routes.delete(
  '/products/:id',
  [validateId, validateProductExist, productExistInProductStock],
  ProductController.delete
  // #swagger.tags = ['Produtos']
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
      $ref: "#definitions/product"
    }
  }
  */
  /*
    #swagger.responses[400] = {
      schema: {
        message: 'BAD_REQUEST'
      }
    }
  */
  /*
    #swagger.responses[404] = {
      schema: {
        message: 'NOT_FOUND'
      }
    }
  */
);

export default routes;
