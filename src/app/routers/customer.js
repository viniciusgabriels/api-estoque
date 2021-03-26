import { Router } from 'express';
import CustomerController from '../controllers/CustomerController';
import { validateData, validateCustomerExists } from '../middlewares/customer';

const routes = new Router();

routes.get('/customers', CustomerController.index);
routes.get('/customers/:id', validateCustomerExists, CustomerController.show);
routes.post('/customers', validateData, CustomerController.store);
routes.put(
  '/customers/:id',
  validateCustomerExists,
  validateData,
  CustomerController.update
);
routes.delete(
  '/customers/:id',
  validateCustomerExists,
  CustomerController.delete
);

export default routes;
