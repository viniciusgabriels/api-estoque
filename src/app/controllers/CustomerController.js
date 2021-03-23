import Customer from '../models/Customer';

class CustomerController {
  async index(req, res) {
    try {
      const data = await Customer.findAll({
        attributes: ['id', 'name'],
        order: [['id', 'DESC']],
      })
      
      return res.json(data);
    } catch (error) {
      return res.status(error.status || 400).json(error);
    }
  }
  async show(req, res) {}
  async store(req, res) {}
  async update(req, res) {}
  async delete(req, res) {}
}

export default new CustomerController();
