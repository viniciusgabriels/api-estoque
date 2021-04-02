import { Router } from 'express';
import NearbyRegionController from '../controllers/NearbyRegionController';
import { validateNumber, notSameNumber } from '../middlewares/nearby';

const routes = new Router();

routes.get('/nearbyregion', NearbyRegionController.index
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
  */
);
routes.get('/nearbyregion/:id', NearbyRegionController.show);
routes.post('/nearbyregion', [validateNumber, notSameNumber], NearbyRegionController.store);
routes.put('/nearbyregion/:id', [validateNumber, notSameNumber], NearbyRegionController.update);
routes.delete('/nearbyregion/:id', NearbyRegionController.delete);

export default routes;
