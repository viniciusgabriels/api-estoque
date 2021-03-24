import { Router } from 'express';
import ProductController from '../controllers/ProductController';

import {
  validateData,
  validateId,
  validateProductExist,
} from '../middlewares/product';

const routes = new Router();

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', validateData, ProductController.store);
routes.put(
  '/products/:id',
  [validateData, validateId, validateProductExist],
  ProductController.update
);
routes.delete(
  '/products/:id',
  [validateData, validateId, validateProductExist],
  ProductController.delete
);

export default routes;
