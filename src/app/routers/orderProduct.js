import { Router } from 'express';
import OrderProductController from '../controllers/OrderProductController';

import {
  validateData,
  validateProductStock,
} from '../middlewares/orderProduct';

const routes = new Router();

routes.get('/order-product', OrderProductController.index);
routes.get('/order-product/:orderId/:id', OrderProductController.show);
routes.post(
  '/order-product',
  [validateData, validateProductStock],
  OrderProductController.store
);
routes.put('/order-product/:id', OrderProductController.update);
routes.delete('/order-product/:id', OrderProductController.delete);

export default routes;
