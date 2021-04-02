import { Router } from 'express';
import ProductStockController from '../controllers/ProductStockController';

const routes = new Router();

routes.get('/product-stock', ProductStockController.index);
routes.get('/product-stock/:id', ProductStockController.show);
routes.post('/product-stock', ProductStockController.store);
routes.put('/product-stock/:id', ProductStockController.update);
routes.delete('/product-stock/:id', ProductStockController.delete);

export default routes;
