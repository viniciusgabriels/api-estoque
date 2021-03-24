import Category from '../models/Category';

class CategoryController {
  async index(request, response) {
    const { name } = request.query;

    const where = {};

    if (name) {
      where.name = name;
    }

    const categories = await Category.findAndCountAll({
      where,
      attributes: ['id', 'name'],
    });

    return response.json(categories);
  }

  async show(request, response) {
    const { id } = request;

    return response.json(
      await Category.findByPk(id, {
        attributes: ['id', 'name'],
      })
    );
  }

  async store(request, response) {
    const { name } = request.body;

    return response.json(await Category.create({ name }));
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    const category = await Category.findByPk(id);

    category.name = name;

    category.save();

    return response.json(category);
  }

  async delete(request, response) {
    const { id } = request.params;

    await Category.destroy({
      where: {
        id,
      },
    });

    return response.sendStatus(204);
  }
}

export default new CategoryController();