import { Router } from 'express';
import ReportCategoryController from '../controllers/ReportCategoryController';

const routes = new Router();

routes.get(
  '/report-categories',
  ReportCategoryController.index
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
  '/report-categories/:id',
  ReportCategoryController.show
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
export default routes;
