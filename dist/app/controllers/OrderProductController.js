"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable camelcase */
var _OrderProduct = require('../models/OrderProduct'); var _OrderProduct2 = _interopRequireDefault(_OrderProduct);
// import Order from '../models/Order';
// import ProductStock from '../models/ProductStock';


class OrderProductController {
  async index(request, response) {
    return response.json(
      await _OrderProduct2.default.findAll({
        attributes: ['order_id', 'product_stock_id', 'quantity', 'price'],
      })
    );
  }

  async show(request, response) {
    const { orderId, id } = request.params;

    return response.json(
      await _OrderProduct2.default.findOne({
        attributes: ['order_id', 'product_stock_id', 'quantity', 'price'],
        where: {
          order_id: orderId,
          product_stock_id: id,
        },
      })
    );
  }
}

exports. default = new OrderProductController();
