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

  store(request, response) {
    const { id, product } = request.body;

    return response.status(201).json(
      product.forEach(async (element) => {
        const { product_stock_id, quantity, price, return_reason_id } = element;

        if (return_reason_id) {
          await OrderProduct.create({
            order_id: id,
            quantity,
            product_stock_id,
            price,
          });
        } else {
          await OrderProduct.create({
            order_id: id,
            quantity,
            product_stock_id,
            return_reason_id,
            price,
          });
        }
      })
    );
  }

  async update(request, response) {
    /* const { id } = request.params;
    const { quantity, productId, stockId } = request.body;
    return response.json(
      await OrderProduct.create(
        { quantity, product_id: productId, stock_id: stockId },
        {
          where: { id },
          returning: true,
        }
      )
    ); */
  }

  async delete(request, response) {
    /* const { id } = request.params;
    await OrderProduct.destroy({ where: { id } });
    response.sendStatus(202); */
  }
}

export default new OrderProductController();
