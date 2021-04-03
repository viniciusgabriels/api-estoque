"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _OrderProduct = require('../models/OrderProduct'); var _OrderProduct2 = _interopRequireDefault(_OrderProduct);
var _ProductStock = require('../models/ProductStock'); var _ProductStock2 = _interopRequireDefault(_ProductStock);

class ProductService {
  async discoutStock(id, quantity) {
    const productStock = await _ProductStock2.default.findOne({
      attributes: ['quantity', 'product_id', 'stock_id'],
      where: { id },
    });

    const stockQuantity = productStock.dataValues.quantity - quantity;
    const product = productStock.dataValues.product_id;
    const stock = productStock.dataValues.stock_id;

    await _ProductStock2.default.update(
      {
        quantity: stockQuantity,
        product_id: product,
        stock_id: stock,
      },
      {
        where: { id },
      }
    );
  }
}

exports. default = new ProductService();
