import axios from 'axios';
import Order from '../models/Order';

class OrderController {
  async index(request, response) {
    const order = await Order.findAndCountAll();

    return response.json(order);
  }

  async show(request, response) {
    const { id } = request.params;

    const order = await Order.findOne({ where: { id } });

    return response.json(order);
  }

  async store(request, response) {
    const { typeId, customerId, product } = request.body;

    const order = await Order.create({
      type_id: typeId,
      customer_id: customerId,
      date: new Date(),
    });

    const { id } = order;

    await axios({
      method: 'post',
      url: `http://localhost:3333/order-product`,
      data: {
        id,
        product,
      },
    })
      .then((resProduct) => {
        console.log(resProduct);
      })
      .catch((error) => console.log(error));

    return response.json(order);
  }

  async update(request, response) {
    const { id } = request.params;
    const { date, type } = request.body;

    const order = await Order.findByPk(id);

    order.date = date;
    order.type = type;

    order.save();

    return response.json(order);
  }

  async delete(request, response) {
    const { id } = request.params;

    const order = await Order.destroy({ where: { id } });

    return response.sendStatus(202);
  }
}

export default new OrderController();
