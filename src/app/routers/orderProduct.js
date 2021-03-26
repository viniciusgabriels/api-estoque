import { Router } from 'express';
import OrderProductController from '../controllers/OrderProductController';

const routes = new Router();

routes.get('/orderProduct', OrderProductController.index);
routes.get('/orderProduct/:id', OrderProductController.show);
routes.post('/orderProduct', OrderProductController.store);
routes.put('/orderProduct/:id', OrderProductController.update);
routes.delete('/orderProduct/:id', OrderProductController.delete);

export default routes;
