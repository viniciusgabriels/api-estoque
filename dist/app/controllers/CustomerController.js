"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Customer = require('../models/Customer'); var _Customer2 = _interopRequireDefault(_Customer);
var _Order = require('../models/Order'); var _Order2 = _interopRequireDefault(_Order);

class CustomerController {
  async index(req, res) {
    try {
      const data = await _Customer2.default.findAll({
        attributes: ['id', 'name', 'phone'],
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
      const data = await _Customer2.default.findOne({
        attributes: ['id', 'name', 'phone'],
        where: { id },
      });

      return res.json(data);
    } catch (error) {
      return res.status(error.status || 400).json(error);
    }
  }

  async store(req, res) {
    const { name, phone, regionId } = req.body;

    try {
      const data = await _Customer2.default.create({
        name,
        phone,
        region_id: regionId,
      });

      return res.status(201).json(data);
    } catch (error) {
      return res.status(error.status || 400).json(error);
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, phone, regionId } = req.body;

    try {
      const data = await _Customer2.default.update(
        {
          name,
          phone,
          region_id: regionId,
        },
        {
          where: { id },
          returning: ['id', 'name', 'phone'],
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
      await _Order2.default.destroy({
        where: { customer_id: id },
      });

      await _Customer2.default.destroy({
        where: { id },
      });

      return res.sendStatus(204);
    } catch (error) {
      return res.status(error.status || 400).json(error);
    }
  }
}

exports. default = new CustomerController();
