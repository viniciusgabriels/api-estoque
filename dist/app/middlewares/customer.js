"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */

var _Customer = require('../models/Customer'); var _Customer2 = _interopRequireDefault(_Customer);

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

  const customer = await _Customer2.default.findOne({
    where: { id },
  });

  if (!customer) {
    return res.status(404).json({
      message: 'Não encontrado',
    });
  }

  next();
}

exports.validateData = validateData; exports.validateCustomerExists = validateCustomerExists;
