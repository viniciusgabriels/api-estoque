import Customer from '../models/Customer';
import Order from '../models/Order';
import Region from '../models/Region';

class CustomerController {
  async index(req, res) {
    try {
      const data = await Customer.findAll({
        attributes: ['id', 'name', 'phone'],
        order: [['id', 'DESC']],
        include: {
          model: Region,
          as: 'region',
          attributes: ['name'],
        },
      });

      return res.json(data);
    } catch (error) {
      return res.status(error.status || 400).json(error);
    }
  }

  async show(req, res) {
    const { id } = req.params;

    try {
      const data = await Customer.findOne({
        attributes: ['id', 'name', 'phone'],
        where: { id },
      });

      return res.json(data);
    } catch (error) {
      return res.status(error.status || 400).json(error);
    }
  }

  async store(req, res) {
    const { name, phone, regionId } = req.body;

    try {
      const data = await Customer.create({
        name,
        phone,
        region_id: regionId,
      });

      return res.status(201).json(data);
    } catch (error) {
      return res.status(error.status || 400).json(error);
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, phone, regionId } = req.body;

    try {
      const data = await Customer.update(
        {
          name,
          phone,
          region_id: regionId,
        },
        {
          where: { id },
          returning: ['id', 'name', 'phone'],
        }
      );

      return res.json(data[1]);
    } catch (error) {
      return res.status(error.status || 400).json(error);
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    try {
      await Order.destroy({
        where: { customer_id: id },
      });

      await Customer.destroy({
        where: { id },
      });

      return res.sendStatus(204);
    } catch (error) {
      return res.status(error.status || 400).json(error);
    }
  }
}

export default new CustomerController();
