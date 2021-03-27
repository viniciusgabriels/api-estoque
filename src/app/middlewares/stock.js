/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */

import Stock from '../models/Stock';

function validateData(request, response, next) {
  const { local, regionId } = request.body;

  if (!local || !regionId) {
    return response.status(400).json({
      message: 'Dados inválidos',
    });
  }

  next();
}

async function validateStockExists(request, response, next) {
  const { id } = request.params;

  const stock = await Stock.findOne({
    where: { id },
  });

  if (!stock) {
    return response.status(404).json({
      message: 'Não encontrado',
    });
  }

  next();
}

export { validateData, validateStockExists };
