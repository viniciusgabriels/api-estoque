import Customer from '../models/Customer';

class CustomerController {
  async index(req, res) {
    try {
      const data = await Customer.findAll({
        attributes: ['id', 'name', 'phone'],
        order: [['id', 'DESC']],
      })
      
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
    const { name, phone } = req.body;

    try {
      const data = await Customer.create({
        name,
        phone,
      })

      return res.status(201).json(data);
    } catch (error) {
      return res.status(error.status || 400).json(error);
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, phone } = req.body;
    
    try {
      const data = await Customer.update(
        {
        name,
        phone,
      },
      {
        where: { id },
        returning: ['id', 'name', 'phone']
      }
      )

      return data[1];
    } catch (error) {
      return res.status(error.status || 400).json(error);
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    try {
      /////////////// Fazer o detroy das ordens

      await Customer.destroy({
        where: { id },
      });
    } catch (error) {
      return res.status(error.status || 400).json(error);
    }
  }
}

export default new CustomerController();