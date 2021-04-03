"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Product = require('../models/Product'); var _Product2 = _interopRequireDefault(_Product);
var _ProductStock = require('../models/ProductStock'); var _ProductStock2 = _interopRequireDefault(_ProductStock);

function validateData(request, response, next) {
  const { name, price, status, categoryId } = request.body;

  if (!name || name.length < 3 || !price || !status || !categoryId) {
    return response.status(400).json({
      message: `Invalid data`,
    });
  }

  return next();
}

function validateId(request, response, next) {
  const { id } = request.params;

  const parsed = Number.parseInt(id, 10);

  if (Number.isNaN(parsed)) {
    return response.status(400).json({
      message: 'Invalid ID',
    });
  }

  request.productId = parsed;

  return next();
}

async function validateProductExist(request, response, next) {
  const product = await _Product2.default.findByPk(request.productId);

  if (!product) {
    return response.status(404).json({
      message: 'Product not found',
    });
  }

  request.product = product;

  return next();
}

async function productExistInProductStock(request, response, next) {
  const product = await _ProductStock2.default.findOne({
    where: { product_id: request.productId },
  });

  if (product) {
    return response.status(400).json({
      message: 'Unable to delete! Linked product',
    });
  }

  return next();
}






exports.validateData = validateData; exports.validateId = validateId; exports.validateProductExist = validateProductExist; exports.productExistInProductStock = productExistInProductStock;
