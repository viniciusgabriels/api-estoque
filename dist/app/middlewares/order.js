"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Order = require('../models/Order'); var _Order2 = _interopRequireDefault(_Order);

function validateId(request, response, next) {
  const { id } = request.params;

  const parsed = Number.parseInt(id);
  if (isNaN(parsed)) {
    return response.status(400).json({
      message: 'Invalid Id',
    });
  }

  request.orderID = parsed;

  return next();
}

exports.validateId = validateId;
