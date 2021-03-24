import { Op } from 'sequelize';
import Product from '../models/Product';

class ProductController {
  async index(request, response) {
    //
  }

  async show(request, response) {
    //
  }

  async store(request, response) {
    const { name, description, price, status, category_id } = request.body;

    return response.json(await Product.create({ 
      name, 
      description, 
      price, 
      status, 
      category_id}));
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, description, price, status, category_id } = request.body;

    const product = await Product.findByPk(id);

    product.name = name;
    product.description = description;
    product.price = price;
    product.status = status;
    product.category_id = category_id;

    product.save();

    return response.json(product);
  }

  async delete(request, response) {
    //
  }
}

export default new ProductController();
