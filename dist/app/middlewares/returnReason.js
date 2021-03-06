"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _ReturnReason = require('../models/ReturnReason'); var _ReturnReason2 = _interopRequireDefault(_ReturnReason);
var _OrderProduct = require('../models/OrderProduct'); var _OrderProduct2 = _interopRequireDefault(_OrderProduct);

function validateData(request, response, next) {
  const { description } = request.body;

  if (!description || description.length < 3) {
    return response.status(400).json({
      message: `Invalid data`,
    });
  }

  return next();
}

function validateId(request, response, next) {
  const { id } = request.params;

  const parsed = Number.parseInt(id, 10);

  if (Number.isNaN(parsed) || parsed < 1) {
    return response.status(400).json({
      message: 'Invalid ID',
    });
  }

  request.returnReasonId = parsed;

  return next();
}

async function validateReturnReasonExist(request, response, next) {
  const returnReason = await _ReturnReason2.default.findByPk(request.returnReasonId);

  if (!returnReason) {
    return response.status(404).json({
      message: 'Return reason not found',
    });
  }

  request.returnReason = returnReason;

  return next();
}

async function returnReasonExistInOrderProduct(request, response, next) {
  const returnReason = await _OrderProduct2.default.findOne({
    where: { return_reason_id: request.returnReasonId },
  });

  if (returnReason) {
    return response.status(400).json({
      message: 'Unable to delete! Linked return reason to orders products',
    });
  }

  return next();
}






exports.validateData = validateData; exports.validateId = validateId; exports.validateReturnReasonExist = validateReturnReasonExist; exports.returnReasonExistInOrderProduct = returnReasonExistInOrderProduct;
