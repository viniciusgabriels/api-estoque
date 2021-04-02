"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */

var _Stock = require('../models/Stock'); var _Stock2 = _interopRequireDefault(_Stock);

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

  const stock = await _Stock2.default.findOne({
    where: { id },
  });

  if (!stock) {
    return response.status(404).json({
      message: 'Não encontrado',
    });
  }

  next();
}

exports.validateData = validateData; exports.validateStockExists = validateStockExists;
