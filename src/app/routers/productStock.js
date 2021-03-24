import { Router } from 'express';
import ProductStockController from '../controllers/ProductStockController';

const routes = new Router();

routes.get('/productStock', ProductStockController.index);
routes.get('/productStock/:id', ProductStockController.show);
routes.post('/productStock', ProductStockController.store);
routes.put('/productStock/:id', ProductStockController.update);
routes.delete('/productStock/:id', ProductStockController.delete);

export default routes;