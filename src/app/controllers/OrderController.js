import axios from 'axios';
import Order from '../models/Order';
import OrderProduct from '../models/OrderProduct';

class OrderController {
  async index(request, response) {
    const { type } = request.query;

    const where = {};

    if (type) {
      where.type = type;
    }

    const order = await Order.findAndCountAll({ where });

    return response.json(order);
  }

  async show(request, response) {
    const { parsed } = request.params;

    const order = await Order.findOne({ where: { parsed } });

    return response.json(order);
  }

  async store(request, response) {
    const { typeId, customerId } = request.body;

    const order = await Order.create({
      type_id: typeId,
      customer_id: customerId,
      date: new Date(),
    });

    // const { id } = order;

    // axios
    //   .post(`http://localhost:3333/order-product`, {
    //     data: {
    //       id,
    //       product,
    //     },
    //   })
    //   .then((resProduct) => {
    //     console.log(resProduct);
    //   })
    //   .catch((error) => console.log(error));

    return response.status(201).json(order);
  }

  async update(request, response) {
    const { parsed } = request.params;
    const { date, type } = request.body;

    const order = await Order.findByPk(parsed);

    order.date = date;
    order.type = type;

    order.save();

    return response.json(order);
  }

  async delete(request, response) {
    const { parsed } = request.params;

    await Order.destroy({ where: { parsed } });

    return response.sendStatus(202);
  }
}

export default new OrderController();
