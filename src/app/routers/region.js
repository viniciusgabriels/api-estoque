import { Router } from 'express';
import RegionController from '../controllers/RegionController';

import { validateData } from '../middlewares/region';

const routes = new Router();

routes.get('/region', RegionController.index);
routes.get('/region/:id', RegionController.show);
routes.post('/region', validateData, RegionController.store);
routes.put('/region/:id', validateData, RegionController.update);
routes.delete('/region/:id', RegionController.delete);

export default routes;
