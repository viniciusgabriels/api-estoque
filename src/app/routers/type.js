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
      description: 'Todos os tipos de ordens listados',
      schema: { $ref: "#/definitions/types" }
    }
  */
);
routes.get(
  '/types/:id',
  validateTypeExists,
  TypeController.show
  /* 
  #swagger.tags = ['Tipos de ordem']
  #swagger.description = 'Rota para buscar apenas um tipos de ordem'

    #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID do tipo',
      required: true,
      type: 'integer'
    }

    #swagger.response[200] = {
      description: 'Apenas um tipos de ordem listado',
      schema: { $ref: "#/definitions/types" }
    }
  */
);
routes.post(
  '/types',
  validateData,
  TypeController.store
  /*
  #swagger.tags = ['Tipos de ordem']
  #swagger.description = 'Rota para cadatrar um novo tipo de ordem'

    #swagger.parameters['description'] = {
      in: 'body',
      description: 'Descrição do tipo',
      required: true,
      type: 'string'
    }

    #swagger.response[201] = {
      description: 'Tipo de ordem criado',
      schema: { $ref: "#/definitions/types" }
    }
  */
);
routes.put(
  '/types/:id',
  validateTypeExists,
  validateData,
  TypeController.update
  /*
  #swagger.tags = ['Tipos de ordem']
  #swagger.description = 'Rota para atualizar um tipo de ordem'

    #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID do tipo',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['description'] = {
      in: 'body',
      description: 'Descrição do tipo',
      required: true,
      type: 'string'
    }

    #swagger.response[200] = {
      description: 'Tipo de ordem atualizado',
      schema: { $ref: "#/definitions/types" }
    }
  */
);
routes.delete(
  '/types/:id',
  validateTypeExists,
  TypeController.delete
  /*
  #swagger.tags = ['Tipos de ordem']
  #swagger.description = 'Rota para deletar um tipo de ordem'

    #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID do tipo',
      required: true,
      type: 'integer'
    }

    #swagger.response[204] = {
      description: 'Tipo de ordem deletado',
      schema: { $ref: "#/definitions/types" }
    }
  */
);

export default routes;
