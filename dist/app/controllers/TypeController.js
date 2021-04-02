"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Type = require('../models/Type'); var _Type2 = _interopRequireDefault(_Type);

class TypeController {
  async index(req, res) {
    try {
      const data = await _Type2.default.findAll({
        attributes: ['id', 'description'],
        order: [['id', 'DESC']],
      });

      return res.json(data);
    } catch (error) {
      return res.status(error.status || 400).json(error);
    }
  }

  async show(req, res) {
    const { id } = req.params;

    try {
      const data = await _Type2.default.findOne({
        attributes: ['id', 'description'],
        where: { id },
      });

      return res.json(data);
    } catch (error) {
      return res.status(error.status || 400).json(error);
    }
  }

  async store(req, res) {
    const { description } = req.body;

    try {
      const data = await _Type2.default.create({
        description,
      });

      return res.status(201).json(data);
    } catch (error) {
      return res.status(error.status || 400).json(error);
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { description } = req.body;

    try {
      const data = await _Type2.default.update(
        {
          description,
        },
        {
          where: { id },
          returning: ['id', 'description'],
        }
      );

      return res.json(data[1]);
    } catch (error) {
      return res.status(error.status || 400).json(error);
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    try {
      await _Type2.default.destroy({
        where: { id },
      });

      return res.sendStatus(204);
    } catch (error) {
      return res.status(error.status || 400).json(error);
    }
  }
}

exports. default = new TypeController();
