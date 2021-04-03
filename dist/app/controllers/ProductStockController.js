"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _ProductStock = require('../models/ProductStock'); var _ProductStock2 = _interopRequireDefault(_ProductStock);
var _Product = require('../models/Product'); var _Product2 = _interopRequireDefault(_Product);
var _Stock = require('../models/Stock'); var _Stock2 = _interopRequireDefault(_Stock);

class ProductStockController {
  async index(request, response) {
    const data = await _ProductStock2.default.findAll({
      attributes: ['id', 'quantity'],
      include: [
        {
          model: _Product2.default,
          as: 'product',
          attributes: ['name'],
        },
        {
          model: _Stock2.default,
          as: 'stock',
          attributes: ['local'],
        },
      ],
    });

    return response.json(data);
  }

  async show(request, response) {
    const { id } = request.params;
    return response.json(await _ProductStock2.default.findOne({ where: { id } }));
  }

  async store(request, response) {
    const { quantity, productId, stockId } = request.body;

    return response.json(
      await _ProductStock2.default.create({
        quantity,
        product_id: productId,
        stock_id: stockId,
      })
    );
  }

  async update(request, response) {
    const { id } = request.params;
    const { quantity, productId, stockId } = request.body;
    return response.json(
      await _ProductStock2.default.create(
        { quantity, product_id: productId, stock_id: stockId },
        {
          where: { id },
          returning: true,
        }
      )
    );
  }

  async delete(request, response) {
    const { id } = request.params;
    await _ProductStock2.default.destroy({ where: { id } });
    response.sendStatus(202);
  }
}

exports. default = new ProductStockController();
