import { Router } from 'express';
import OrderProductController from '../controllers/OrderProductController';

const routes = new Router();

routes.get('/order-product', OrderProductController.index);
routes.get('/order-product/:orderId/:id', OrderProductController.show);

export default routes;
