/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */

import Customer from '../models/Customer';

function validateData(req, res, next) {
  const { name, phone, regionId } = req.body;

  if (!name || !phone || !regionId) {
    return res.status(400).json({
      message: 'Dados inválidos',
    });
  }

  next();
}

async function validateCustomerExists(req, res, next) {
  const { id } = req.params;

  const customer = await Customer.findOne({
    where: { id },
  });

  if (!customer) {
    return res.status(404).json({
      message: 'Não encontrado',
    });
  }

  next();
}

export { validateData, validateCustomerExists };
