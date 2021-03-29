import { Router } from 'express';
import TypeController from '../controllers/TypeController';
import { validateData, validateTypeExists } from '../middlewares/type';

const routes = new Router();

routes.get(
  '/types',
  TypeController.index
  /*
  #swagger.tags = ['Tipos de ordem']
  #swagger.description = 'Rota para buscar todos os tipos de ordem'

    #swagger.parameters['description'] = {
      in: 'body',
      description: 'Descrição do tipo',
      required: false,
      type: 'string'
    }

    #swagger.response[200] = {
      description: 'Lista de todos os tipos de ordens',
      schema: { $ref: "#/definitions/types" }
    }
  */
);
routes.get('/types/:id', validateTypeExists, TypeController.show);
routes.post('/types', validateData, TypeController.store);
routes.put(
  '/types/:id',
  validateTypeExists,
  validateData,
  TypeController.update
);
routes.delete('/types/:id', validateTypeExists, TypeController.delete);

export default routes;
