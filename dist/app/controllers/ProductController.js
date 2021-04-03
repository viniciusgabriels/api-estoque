"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Product = require('../models/Product'); var _Product2 = _interopRequireDefault(_Product);

class ProductController {
  async index(request, response) {
    const { name, categoryId } = request.query;

    const where = {};

    if (name) {
      where.name = name;
    }

    if (categoryId) {
      where.category_id = categoryId;
    }

    const products = await _Product2.default.findAndCountAll({
      where,
      attributes: ['id', 'name', 'description', 'price', 'category_id'],
    });

    return response.json(products);
  }

  async show(request, response) {
    const { productId } = request;

    return response.json(
      await _Product2.default.findByPk(productId, {
        attributes: ['id', 'name', 'description', 'price'],
      })
    );
  }

  async store(request, response) {
    const { name, description, price, status, categoryId } = request.body;

    return response.json(
      await _Product2.default.create({
        name,
        description,
        price,
        status,
        category_id: categoryId,
      })
    );
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, description, price, status, categoryId } = request.body;

    const product = await _Product2.default.findByPk(id);

    product.name = name;
    product.description = description;
    product.price = price;
    product.status = status;
    product.category_id = categoryId;

    product.save();

    return response.json(product);
  }

  async delete(request, response) {
    const { id } = request.params;

    await _Product2.default.destroy({
      where: {
        id,
      },
    });

    return response.sendStatus(204);
  }
}

exports. default = new ProductController();
