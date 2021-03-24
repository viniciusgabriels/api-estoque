import { Router } from 'express';
import CategoryController from '../controllers/CategoryController';

import {
  validateData,
  validateId,
  validateCategoryExist,
} from '../middlewares/category';

const routes = new Router();

routes.get('/categories', CategoryController.index);
routes.get('/categories/:id', validateId, CategoryController.show);
routes.post('/categories', validateData, CategoryController.store);
routes.put(
  '/categories/:id',
  [validateData, validateId, validateCategoryExist],
  CategoryController.update
);
routes.delete(
  '/categories/:id',
  [validateId, validateCategoryExist],
  CategoryController.delete
);

export default routes;
