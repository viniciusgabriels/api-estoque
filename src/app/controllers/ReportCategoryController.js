import sequelize, { Op } from 'sequelize';

// https://sequelize.org/master/manual/eager-loading.html
// https://stackoverflow.com/questions/19231514/save-object-with-associations-in-sequelizejs

import Category from '../models/Category';
import Product from '../models/Product';

class ReportCategoryController {
  async index(request, response) {
    const list = await Category.findAll({
      include: {
        model: Product,
        as: 'category',
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
