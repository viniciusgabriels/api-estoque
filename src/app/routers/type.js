import { Router } from 'express';
import TypeController from '../controllers/TypeController';
import { validateData, validateTypeExists } from '../middlewares/type';

const routes = new Router();

routes.get('/types', TypeController.index);
routes.get('/types/:id', validateTypeExists, TypeController.show);
routes.post('/types', validateData, TypeController.store);
routes.put(
  '/types/:id',
  validateTypeExists.validateData,
  TypeController.update
);
routes.delete('/types/:id', validateTypeExists, TypeController.delete);

export default routes;
