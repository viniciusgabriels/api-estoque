import { Router } from 'express';
import NearbyRegionController from '../controllers/NearbyRegionController';

const routes = new Router();

routes.get('/nearbyregion', NearbyRegionController.index);
routes.get('/nearbyregion/:id', NearbyRegionController.show);
routes.post('/nearbyregion', NearbyRegionController.store);
routes.put('/nearbyregion/:id', NearbyRegionController.update);
routes.delete('/nearbyregion/:id', NearbyRegionController.delete);

export default routes;
