import { Router } from 'express';
import StockController from '../controllers/StockController';

const routes = new Router();

routes.get('/Stock', StockController.index);
routes.get('/Stock/:id', StockController.show);
routes.post('/Stock', StockController.store);
routes.put('/Stock/:id', StockController.update);
routes.delete('/Stock/:id', StockController.delete);

export default routes;
