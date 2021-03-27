import { Router } from 'express';
import ReturnReason from '../controllers/ReturnReasonController';

import {
  validateData,
  validateId,
  validateReturnReasonExist,
  returnReasonExistInOrderProduct,
} from '../middlewares/returnReason';

const routes = new Router();

routes.get(
  '/return-reason',
  ReturnReason.index
  // #swagger.tags = ['Motivo da devolução']
  // #swagger.description = 'Endpoint para buscar todas as categorias'
  /*
  #swagger.parameters['description'] = {
    in: 'query',
    description: 'Descrição do motivo da devolução',
    required: false,
    type: 'string'
  } */
  /* 
  #swagger.response[200] = {
    description: 'Return reason list',
    schema: {
      minimum: 1
      $ref: "#/definitions/return-reason"
    }
    responses: {
      '200': {
        description: "OK"
      }
    }
  }
  */
);
routes.get(
  '/return-reason/:id',
  [validateId, validateReturnReasonExist],
  ReturnReason.show
  // #swagger.tags = ['Motivo da devolução']
  // #swagger.description = 'Endpoint para buscar um motivo de devolução'
  /*  #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID do motivo',
    required: true,
    type: 'integer',
  } 
  */
);
routes.post(
  '/return-reason',
  validateData,
  ReturnReason.store
  // #swagger.tags = ['Motivo da devolução']
  // #swagger.description = 'Endpoint para cadastrar uma motivo de devolução'
  /*
  #swagger.parameters['description'] = {
    in: 'body',
    description: 'Descrição do motivo de devolução',
    required: true,
    type: 'string'
  } */
  /* #swagger.response[200] = {
    description: 'Motivo cadastrado com sucesso',
    schema: {
      $ref: "#/definitions/return-reason"
    }
  }
  */
);
routes.put(
  '/return-reason/:id',
  [validateData, validateId, validateReturnReasonExist],
  ReturnReason.update
  // #swagger.tags = ['Motivo da devolução']
  // #swagger.description = 'Endpoint para atualizar uma categotia'
  /* #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID do motivo',
    required: true,
    type: 'integer',
  } */
  /* #swagger.parameters['description'] = {
    in: 'body',
    description: 'Descrição do motivo de devolução',
    required: true,
    type: 'string'
  } */
  /* #swagger.response[200] = {
    description: 'Motivo atualizado com sucesso',
    schema: {
      $ref: "#/definitions/return-reason"
    }
  }
  */
);
routes.delete(
  '/return-reason/:id',
  [validateId, validateReturnReasonExist, returnReasonExistInOrderProduct],
  ReturnReason.delete
  // #swagger.tags = ['Motivo da devolução']
  // #swagger.description = 'Endpoint para deletar um motivo de devolução'
  /*  #swagger.parameters['id'] = {
    in: 'path',
    description: 'ID do motivo',
    required: true,
    type: 'integer',
  } 
  */
  /*
  #swagger.response[204] = {
    description: 'Motivo de devolução deletado com sucesso',
    schema: {
      $ref: "#/definitions/category"
    }
  }
  */
);

export default routes;
