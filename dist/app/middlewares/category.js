"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Category = require('../models/Category'); var _Category2 = _interopRequireDefault(_Category);
var _Product = require('../models/Product'); var _Product2 = _interopRequireDefault(_Product);

function validateData(request, response, next) {
  const { name } = request.body;

  if (!name || name.length < 3) {
    return response.status(400).json({
      message: `Invalid data`,
    });
  }

  next();
}

function validateId(request, response, next) {
  const { id } = request.params;

  const parsed = Number.parseInt(id);

  if (Number.isNaN(parsed) || parsed < 1) {
    return response.status(400).json({
      message: 'Invalid ID',
    });
  }

  request.categoryId = parsed;

  next();
}

async function validateCategoryExist(request, response, next) {
  const category = await _Category2.default.findByPk(request.categoryId);

  if (!category) {
    return response.status(404).json({
      message: 'Category not found',
    });
  }

  request.category = category;

  next();
}

async function categoryExistInProducts(request, response, next) {
  const category = await _Product2.default.findOne({
    where: { category_id: request.categoryId },
  });

  if (category) {
    return response.status(400).json({
      message: 'Unable to delete! Linked category to products',
    });
  }

  next();
}






exports.validateData = validateData; exports.validateId = validateId; exports.validateCategoryExist = validateCategoryExist; exports.categoryExistInProducts = categoryExistInProducts;
