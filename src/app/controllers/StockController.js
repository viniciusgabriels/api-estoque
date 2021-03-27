import Stock from '../models/Stock';

class StockController {
  async index(request, response) {
    try {
      const data = await Stock.findAll({
        attributes: ['id', 'local'],
        order: [['id', 'DESC']],
      });

      return response.json(data);
    } catch (error) {
      return response.status(error.status || 400).json(error);
    }
  }

  async show(request, response) {
    const { id } = request.params;

    try {
      const data = await Stock.findOne({
        attributes: ['id', 'local'],
        where: { id },
      });

      return response.json(data);
    } catch (error) {
      return response.status(error.status || 400).json(error);
    }
  }

  async store(request, response) {
    const { local, regionId } = request.body;

    try {
      const data = await Stock.create({
        local,
        region_id: regionId,
      });

      return response.status(201).json(data);
    } catch (error) {
      return response.status(error.status || 400).json(error);
    }
  }

  async update(request, response) {
    const { id } = request.params;
    const { local, regionId } = request.params;

    try {
      const data = await Stock.update(
        {
          local,
          region_id: regionId,
        },
        {
          where: { id },
          returning: ['id', 'local'],
        }
      );

      return response.json(data[1]);
    } catch (error) {
      return response.status(error.status || 400).json(error);
    }
  }

  async delete(request, response) {
    const { id } = request.params;

    try {
      await Stock.destroy({
        where: { id },
      });

      return response.sendStatus(204);
    } catch (error) {
      return response.status(error.status || 400).json(error);
    }
  }
}

export default new StockController();
