"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Category = require('../models/Category'); var _Category2 = _interopRequireDefault(_Category);

class CategoryController {
  async index(request, response) {
    const { name } = request.query;

    const where = {};

    if (name) {
      where.name = name;
    }

    const categories = await _Category2.default.findAndCountAll({
      where,
      attributes: ['id', 'name'],
    });

    return response.json(categories);
  }

  async show(request, response) {
    const { categoryId } = request;

    const category = await _Category2.default.findByPk(categoryId, {
      attributes: ['id', 'name'],
    });

    return response.json(category);
  }

  async store(request, response) {
    const { name } = request.body;

    return response.json(await _Category2.default.create({ name }));
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    const category = await _Category2.default.findByPk(id);

    category.name = name;

    category.save();

    return response.json(category);
  }

  async delete(request, response) {
    const { id } = request.params;

    await _Category2.default.destroy({
      where: {
        id,
      },
    });

    return response.sendStatus(204);
  }
}

exports. default = new CategoryController();
