/* eslint-disable camelcase */
import OrderProduct from '../models/OrderProduct';
import Order from '../models/Order';
import ProductStock from '../models/ProductStock';

class OrderProductController {
  async index(request, response) {
    return response.json(
      await OrderProduct.findAll({
        attributes: ['order_id', 'product_stock_id', 'quantity', 'price'],
      })
    );
  }

  async show(request, response) {
    const { orderId, id } = request.params;
    return response.json(
      await OrderProduct.findOne({
        attributes: ['order_id', 'product_stock_id', 'quantity', 'price'],
        where: {
          order_id: orderId,
          product_stock_id: id,
        },
      })
    );
  }
}

export default new OrderProductController();
