"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */

var _Type = require('../models/Type'); var _Type2 = _interopRequireDefault(_Type);

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

  const type = await _Type2.default.findOne({
    where: { id },
  });

  if (!type) {
    return res.status(404).json({
      message: 'Não encontrado',
    });
  }

  next();
}

exports.validateData = validateData; exports.validateTypeExists = validateTypeExists;
