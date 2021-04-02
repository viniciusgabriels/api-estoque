"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Stock = require('../models/Stock'); var _Stock2 = _interopRequireDefault(_Stock);

class StockController {
  async index(request, response) {
    try {
      const data = await _Stock2.default.findAll({
        attributes: ['id', 'local'],
        order: [['id', 'DESC']],
      });

      return response.json(data);
    } catch (error) {
      return response.status(error.status || 400).json(error);
    }
  }

  async show(request, response) {
    const { id } = request.params;

    try {
      const data = await _Stock2.default.findOne({
        attributes: ['id', 'local'],
        where: { id },
      });

      return response.json(data);
    } catch (error) {
      return response.status(error.status || 400).json(error);
    }
  }

  async store(request, response) {
    const { local, regionId } = request.body;

    try {
      const data = await _Stock2.default.create({
        local,
        region_id: regionId,
      });

      return response.status(201).json(data);
    } catch (error) {
      return response.status(error.status || 400).json(error);
    }
  }

  async update(request, response) {
    const { id } = request.params;
    const { local, regionId } = request.params;

    try {
      const data = await _Stock2.default.update(
        {
          local,
          region_id: regionId,
        },
        {
          where: { id },
          returning: ['id', 'local'],
        }
      );

      return response.json(data[1]);
    } catch (error) {
      return response.status(error.status || 400).json(error);
    }
  }

  async delete(request, response) {
    const { id } = request.params;

    try {
      await _Stock2.default.destroy({
        where: { id },
      });

      return response.sendStatus(204);
    } catch (error) {
      return response.status(error.status || 400).json(error);
    }
  }
}

exports. default = new StockController();
