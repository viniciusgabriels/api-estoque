/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */

import Type from '../models/Type';

function validateData(req, res, next) {
  const { description } = req.body;

  if (!description) {
    return res.status(400).json({
      message: 'Dados inválidos',
    });
  }

  next();
}

async function validateTypeExists(req, res, next) {
  const { id } = req.params;

  const type = await Type.findOne({
    where: { id },
  });

  if (!type) {
    return res.status(404).json({
      message: 'Não encontrado',
    });
  }

  next();
}

export { validateData, validateTypeExists };
