import { Router } from 'express';
import OrderController from '../controllers/OrderController';
import { validateId } from '../middlewares/order';

const routes = new Router();

routes.get('/orders', OrderController.index);
routes.get('/orders/:id', [validateId], OrderController.show);
routes.post('/orders', OrderController.store);
routes.put('/orders/:id', [validateId], OrderController.update);
routes.delete('/orders/:id', [validateId], OrderController.delete);

export default routes;
