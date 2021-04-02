"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _ProductStock = require('../models/ProductStock'); var _ProductStock2 = _interopRequireDefault(_ProductStock);

class ProductStockController {
  async index(request, response) {
    return response.json(await _ProductStock2.default.findAll());
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
