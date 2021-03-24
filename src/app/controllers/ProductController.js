import { Op } from 'sequelize';
import category from '../documentation/category';
import { description } from '../documentation/product';
import Product from '../models/Product';

class ProductController {
  async index(request, response) {
    const { name, categoryId } = request.query;

    const where = {};

    if (name) {
      where.name = name;
    }
    
    if (category_id) {
      where.category_id = categoryId;
    }

    const products = await Product.findAndCountAll({
      where,
      attributes: ['id', 'name', 'description', 'price', 'category_id' ],
    });

    return response.json(products);
  }

  async show(request, response) {
    //
  }

  async store(request, response) {
    const { name, description, price, status, categoryId } = request.body;

    return response.json(await Product.create({ 
      name, 
      description, 
      price, 
      status, 
      category_id: categoryId}));
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, description, price, status, categoryId } = request.body;

    const product = await Product.findByPk(id);

    product.name = name;
    product.description = description;
    product.price = price;
    product.status = status;
    product.category_id = categoryId;

    product.save();

    return response.json(product);
  }

  async delete(request, response) {
    //
  }
}

export default new ProductController();
