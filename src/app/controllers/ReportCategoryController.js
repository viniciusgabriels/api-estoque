import sequelize, { Op } from 'sequelize';

// https://sequelize.org/master/manual/eager-loading.html
// https://stackoverflow.com/questions/19231514/save-object-with-associations-in-sequelizejs

import Category from '../models/Category';
import Product from '../models/Product';
import ProductStock from '../models/ProductStock';
import OrderProduct from '../models/OrderProduct';
import Order from '../models/Order';
import Type from '../models/Type';

class ReportCategoryController {
  async index(request, response) {
    const list = await Category.findAll({
      attributes: ['name'],
      include: {
        model: Product,
        as: 'product',
        include: {
          model: ProductStock,
          as: 'product_stock',
          include: {
            model: OrderProduct,
            as: 'order_product',
            include: {
              model: Order,
              as: 'order',
              where: {
                type_id: 2,
              },
            },
          },
        },
      },
    });
    return response.json(list);
  }

  async show(request, response) {
    const { categoryId } = request;

    const category = await Category.findByPk(categoryId, {
      attributes: ['id', 'name'],
    });

    return response.json(category);
  }
}

export default new ReportCategoryController();
