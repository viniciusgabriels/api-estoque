"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable consistent-return */

var _ProductStock = require('../models/ProductStock'); var _ProductStock2 = _interopRequireDefault(_ProductStock);
var _Order = require('../models/Order'); var _Order2 = _interopRequireDefault(_Order);

function validateData(request, response, next) {
  const { id, product } = request.body;

  const order = _Order2.default.findOne({ where: { id } });

  product.forEach((element) => {
    const { quantity, productStockId, price, returnReasonId } = element;
    if (!id || !quantity || !productStockId || !price) {
      return response.status(400).json({
        message: 'Invalid data',
      });
    }

    if (order.type_id === 2 && !returnReasonId) {
      return response.status(400).json({
        message: 'Missing reason of returning',
      });
    }
  });

  next();
}

async function validateProductStock(request, response, next) {
  const { productStockId } = request.body;
  const productStock = await _ProductStock2.default.findByPk(productStockId);

  if (!productStock) {
    return response.status(404).json({
      message: 'Product not found in stock',
    });
  }

  next();
}

exports.validateData = validateData; exports.validateProductStock = validateProductStock;
