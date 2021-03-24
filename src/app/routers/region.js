import { Router } from 'express';
import RegionController from '../controllers/RegionController';

const routes = new Router();

routes.get('/region', RegionController.index);
routes.get('/region/:id', RegionController.show);
routes.post('/region', RegionController.store);
routes.put('/region/:id', RegionController.update);
routes.delete('/region/:id', RegionController.delete);

export default routes;
