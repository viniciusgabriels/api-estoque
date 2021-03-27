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
  // #swagger.tags = ['Categories']
  // #swagger.description = 'Endpoint para buscar todas as categorias'
  /*
  #swagger.parameters['name'] = {
    in: 'query',
    description: 'Nome da categoria',
    required: false,
    type: 'string'
  } */
  /* 
  #swagger.response[200] = {
    description: 'Categories list',
    schema: {
      minimum: 1
      $ref: "#/definitions/categories"
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
  '/categories/:id',
  [validateId, validateCategoryExist],
  CategoryController.show
  // #swagger.tags = ['Categories']
  // #swagger.description = 'Endpoint para buscar uma categotia'
  /*  #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID da categoria',
    required: true,
    type: 'integer',
  } 
  */
);
routes.post(
  '/categories',
  validateData,
  CategoryController.store
  // #swagger.tags = ['Categories']
  // #swagger.description = 'Endpoint para cadastrar uma categotia'
  // #swagger.security = [{Bearer: []}]
  /*
  #swagger.parameters['name'] = {
    in: 'body',
    description: 'Nome da categoria',
    required: true,
    type: 'string'
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
  '/categories/:id',
  [validateData, validateId, validateCategoryExist],
  CategoryController.update
  // #swagger.tags = ['Categories']
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
      $ref: "#/definitions/category"
    }
  }
  */
);
routes.delete(
  '/categories/:id',
  [validateId, validateCategoryExist, categoryExistInProducts],
  CategoryController.delete
  // #swagger.tags = ['Categories']
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
