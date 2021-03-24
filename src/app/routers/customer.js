import { Router } from 'express';
import CustomerController from '../controllers/CustomerController';

const routes = new Router();

routes.get('/customers', CustomerController.index);
routes.get('/customers/:id', CustomerController.show);
routes.post('/customers', CustomerController.store);
routes.put('/customers/:id', CustomerController.update);
routes.delete('/customers/:id', CustomerController.delete);

export default routes;
