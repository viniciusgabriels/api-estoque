import { Router } from 'express';
import NearbyRegionController from '../controllers/NearbyRegionController';
import { validateNumber, notSameNumber } from '../middlewares/nearby';

const routes = new Router();

routes.get(
  '/nearbyregion',
  NearbyRegionController.index
  /*
  #swagger.tags = ['Regiões próximas']
  #swagger.description = 'Rota para listas todas as regiões próximas'

   #swagger.parameters['region'] = {
      in: 'body',
      description: 'ID da região',
      required: false,
      type: 'integer'
    }
    #swagger.parameters['ID da região próxima'] = {
      in: 'body',
      description: 'Região próxima',
      required: false,
      type: 'integer'
    }

    #swagger.response[200] = {
      description: 'Regiões listadas',
      schema: { $ref: "#/definitions/nearbyRegion" }
    }
  */
);
routes.get(
  '/nearbyregion/:id',
  NearbyRegionController.show
  /*
  #swagger.tags = ['Regiões próximas']
  #swagger.description = 'Rota para listar uma região próxima'

    #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID do região',
      required: true,
      type: 'integer'
    }

    #swagger.response[200] = {
      description: 'Região listada',
      schema: { $ref: "#/definitions/nearbyRegion" }
    }
  */
);
routes.post(
  '/nearbyregion',
  [validateNumber, notSameNumber],
  NearbyRegionController.store
  /*
  #swagger.tags = ['Regiões próximas']
  #swagger.description = 'Rota para cadastrar uma região próxima'

    #swagger.parameters['region'] = {
      in: 'body',
      description: 'ID da região',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['ID da região próxima'] = {
      in: 'body',
      description: 'Região próxima',
      required: true,
      type: 'integer'
    }

    #swagger.response[201] = {
      description: 'Região cadastrada',
      schema: { $ref: "#/definitions/nearbyRegion" }
    }
  */
);
routes.put(
  '/nearbyregion/:id',
  [validateNumber, notSameNumber],
  NearbyRegionController.update
  /*
  #swagger.tags = ['Regiões próximas']
  #swagger.description = 'Rota para atualizar uma região próxima'

    #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID do região',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['region'] = {
      in: 'body',
      description: 'ID da região',
      required: true,
      type: 'integer'
    }
    #swagger.parameters['ID da região próxima'] = {
      in: 'body',
      description: 'Região próxima',
      required: true,
      type: 'integer'
    }

    #swagger.response[200] = {
      description: 'Região atualizada',
      schema: { $ref: "#/definitions/nearbyRegion" }
    }
  */
);
routes.delete(
  '/nearbyregion/:id',
  NearbyRegionController.delete
  /*
  #swagger.tags = ['Regiões próximas']
  #swagger.description = 'Rota para deletar uma região próxima'

    #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID do região',
      required: true,
      type: 'integer'
    }

    #swagger.response[204] = {
      description: 'Região deletada',
      schema: { $ref: "#/definitions/nearbyRegion" }
    }
  */
);

export default routes;
