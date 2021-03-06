"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Order = require('../models/Order'); var _Order2 = _interopRequireDefault(_Order);
var _OrderProduct = require('../models/OrderProduct'); var _OrderProduct2 = _interopRequireDefault(_OrderProduct);
var _ProductService = require('../service/ProductService'); var _ProductService2 = _interopRequireDefault(_ProductService);

class OrderController {
  async index(request, response) {
    const { type } = request.query;

    const where = {};

    if (type) {
      where.type = type;
    }

    try {
      const order = await _Order2.default.findAndCountAll({ where });

      return response.json(order);
    } catch (error) {
      return response.status(error.status || 400).json(error);
    }
  }

  async show(request, response) {
    const { parsed } = request.params;
    try {
      const order = await _Order2.default.findOne({ where: { parsed } });

      return response.json(order);
    } catch (error) {
      return response.status(error.status || 400).json(error);
    }
  }

  async store(request, response) {
    try {
      const { typeId, customerId, originOrderId, product } = request.body;

      if (typeId === 2 && !originOrderId) {
        return response.json({
          message:
            'Quando o tipo de retorno for 2 deve ser informada a ordem de origem.',
        });
      }

      const order = await _Order2.default.create({
        type_id: typeId,
        customer_id: customerId,
        origin_order_id: originOrderId,
        date: new Date(),
      });

      const { id } = order;

      product.forEach(async (element) => {
        const { productStockId, quantity, price, returnReasonId } = element;
        await _ProductService2.default.discoutStock(productStockId, quantity);
        await _OrderProduct2.default.create({
          order_id: id,
          quantity,
          product_stock_id: productStockId,
          return_reason_id: returnReasonId,
          price,
        });
      });

      return response.status(201).json(order);
    } catch (error) {
      return response.status(400).json({ error });
    }
  }

  async update(request, response) {
    const { parsed } = request.params;
    const { date, type } = request.body;

    try {
      const order = await _Order2.default.findByPk(parsed);

      order.date = date;
      order.type = type;

      order.save();

      return response.json(order);
    } catch (error) {
      return response.status(error.status || 400).json(error);
    }
  }

  async delete(request, response) {
    const { parsed } = request.params;

    try {
      await _Order2.default.destroy({ where: { parsed } });

      return response.sendStatus(204);
    } catch (error) {
      return response.status(error.status || 400).json(error);
    }
  }
}

exports. default = new OrderController();
