import { Router } from 'express';
import CategoryController from '../controllers/CategoryController';

import {
  validateData,
  validateId,
  validateCategoryExist,
  categoryExistInProducts,
} from '../middlewares/category';

const routes = new Router();

routes.get(
  '/categories',
  CategoryController.index
  // #swagger.tags = ['Categorias']
  // #swagger.description = 'Endpoint para buscar todas as categorias'
  // #swagger.security = [{JWT: []}]
  /* 
  #swagger.response[200] = {
    description: 'Lista de categorias',
    schema: {
      $ref: "#definitions/CategoryList"
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
  '/categories/:id',
  [validateId, validateCategoryExist],
  CategoryController.show
  // #swagger.tags = ['Categorias']
  // #swagger.description = 'Endpoint para buscar uma categotia'
  // #swagger.security = [{JWT: []}]
  /*  #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID da categoria',
    required: true,
    type: 'integer',
    schema: {
      "$ref": "#definitions/CategoryList"
    },
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
  '/categories',
  validateData,
  CategoryController.store
  // #swagger.tags = ['Categorias']
  // #swagger.description = 'Endpoint para cadastrar uma categotia'
  // #swagger.security = [{Bearer: []}]
  /*
  #swagger.parameters['Categories'] = {
    in: 'body',
    description: 'Informar nome para cadastro da categoria',
    required: true,
    type: 'string',
    schema: {
      $ref: "#definitions/CategoryStore"
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
  '/categories/:id',
  [validateData, validateId, validateCategoryExist],
  CategoryController.update
  // #swagger.tags = ['Categorias']
  // #swagger.description = 'Endpoint para atualizar uma categotia'
  // #swagger.security = [{Bearer: []}]
  /* #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID da categoria',
    required: true,
    type: 'integer',
  } */
  /* #swagger.parameters['name'] = {
    in: 'body',
    description: 'Nome da categoria',
    required: true,
    type: 'string'
  } */
  /* #swagger.response[200] = {
    description: 'Categoria atualizada com sucesso',
    schema: {
      $ref: "#definitions/CategoryUpdate"
    }
  }
  */
);
routes.delete(
  '/categories/:id',
  [validateId, validateCategoryExist, categoryExistInProducts],
  CategoryController.delete
  // #swagger.tags = ['Categorias']
  // #swagger.description = 'Endpoint para deletar uma categotia'
  // #swagger.security = [{Bearer: []}]
  /*  #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID da categoria',
    required: true,
    type: 'integer',
  } 
  */
  /*
  #swagger.response[204] = {
    description: 'Categoria deletada com sucesso',
    schema: {
      $ref: "#/definitions/category"
    }
  }
  */
);

export default routes;
