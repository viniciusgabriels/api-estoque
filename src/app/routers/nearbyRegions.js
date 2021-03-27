import { Router } from 'express';
import NearbyRegionController from '../controllers/NearbyRegionController';
import { validateNumber } from '../middlewares/nearby';

const routes = new Router();

routes.get('/nearbyregion', NearbyRegionController.index);
routes.get('/nearbyregion/:id', NearbyRegionController.show);
routes.post('/nearbyregion', validateNumber, NearbyRegionController.store);
routes.put('/nearbyregion/:id', validateNumber, NearbyRegionController.update);
routes.delete('/nearbyregion/:id', NearbyRegionController.delete);

export default routes;
