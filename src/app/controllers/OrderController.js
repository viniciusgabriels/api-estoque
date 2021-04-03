import Order from '../models/Order';
import OrderProduct from '../models/OrderProduct';

class OrderController {
  async index(request, response) {
    const { type } = request.query;

    const where = {};

    if (type) {
      where.type = type;
    }

    try {
      const order = await Order.findAndCountAll({ where });

      return response.json(order);
    } catch (error) {
      return response.status(error.status || 400).json(error);
    }
  }

  async show(request, response) {
    const { parsed } = request.params;
    try {
      const order = await Order.findOne({ where: { parsed } });

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

      const order = await Order.create({
        type_id: typeId,
        customer_id: customerId,
        origin_order_id: originOrderId,
        date: new Date(),
      });

      const { id } = order;

      product.forEach(async (element) => {
        const { productStockId, quantity, price, returnReasonId } = element;

        await OrderProduct.create({
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
      const order = await Order.findByPk(parsed);

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
      await Order.destroy({ where: { parsed } });

      return response.sendStatus(204);
    } catch (error) {
      return response.status(error.status || 400).json(error);
    }
  }
}

export default new OrderController();
