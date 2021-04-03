import { Router } from 'express';
import RegionController from '../controllers/RegionController';

import validateData from '../middlewares/region';

const routes = new Router();

routes.get(
  '/region',
  RegionController.index
  /*
  #swagger.tags = ['Regiões']
  #swagger.description = 'Rota para buscar todas as regiões'

    #swagger.response[200] = {
      description: 'Clientes listados',
      schema: { $ref: "#/definitions/customer" }
    }
  */
);
routes.get(
  '/region/:id',
  RegionController.show
  /*
  #swagger.tags = ['Regiões']
  #swagger.description = 'Rota para listar uma região'

    #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID da região',
      required: true,
      type: 'integer',
    }

    #swagger.response[200] = {
      description: 'Região listada',
      schema: { $ref: "#/definitions/region" }
    }
  */
);
routes.post(
  '/region',
  validateData,
  RegionController.store
  /*
  #swagger.tags = ['Regiões']
  #swagger.description = 'Rota para cadastrar uma nova Região'

    #swagger.parameters['name'] = {
      in: 'body',
      description: 'Nome do cliente',
      required: true,
      type: 'string',
    }
    #swagger.response[200] = {
      description: 'Região cadastrada',
      schema: { $ref: "#/definitions/region" }
    }
  */
);
routes.put(
  '/region/:id',
  validateData,
  RegionController.update
  /*
  #swagger.tags = ['Regiões']
  #swagger.description = 'Rota para atualizar os dados de uma Região'

    #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID da região',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['name'] = {
      in: 'body',
      description: 'Nome da Região',
      required: true,
      type: 'string',
        schema: {
      $ref: "#/definitions/region"
    }
    }


    #swagger.response[200] = {
      description: 'Região atualizada com sucesso',
      schema: { $ref: "#/definitions/region" }
    }
  */
);
routes.delete(
  '/region/:id',
  RegionController.delete
  /*
  #swagger.tags = ['Regiões']
  #swagger.description = 'Rota para deletar uma região'

    #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID da Região',
      required: true,
      type: 'integer'
    }

    #swagger.response[204] = {
      description: 'Região deletada com sucesso',
      schema: { $ref: "#/definitions/region" }
    }
  */
);

export default routes;
