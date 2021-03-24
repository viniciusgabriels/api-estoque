import { Op } from 'sequelize';
import ProductStock from '../models/ProductStock';

class ProductStockController {
  async index(request, response) {
    return response.json(await ProductStock.findAll());
  }

  async show(request, response) {
    const { id } = request.params;
    return response.json(await ProductStock.findOne({ where: { id } }));
  }

  async store(request, response) {
    const { quantity, product_id, stock_is } = request.body;

    return response.json(
      await ProductStock.create({ quantity, product_id, stock_id })
    );
  }

  async update(request, response) {
    const { id } = request.params;
    const { quantity, product_id, stock_id } = request.body;
    return response.json(
      await ProductStock.create(
        { quantity, product_id, stock_id },
        {
          where: { id },
          returning: true,
        }
      )
    );
  }

  async delete(request, response) {
    const { id } = request.params;
    await ProductStock.destroy({ where: { id } });
    response.sendStatus(202);
  }
}

export default new ProductStockController();
