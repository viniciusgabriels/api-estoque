import { Router } from 'express';
import NearbyRegionController from '../controllers/NearbyRegionController';
import { validateNumber, notSameNumber } from '../middlewares/nearby';

const routes = new Router();

routes.get('/nearbyregion', NearbyRegionController.index);
routes.get('/nearbyregion/:id', NearbyRegionController.show);
routes.post('/nearbyregion', [validateNumber, notSameNumber], NearbyRegionController.store);
routes.put('/nearbyregion/:id', [validateNumber, notSameNumber], NearbyRegionController.update);
routes.delete('/nearbyregion/:id', NearbyRegionController.delete);

export default routes;
