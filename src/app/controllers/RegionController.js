import Region from '../models/Region';

class RegionController {
  async index(request, response) {
    const regions = await Region.findAll();

    return response.json(regions);
  }

  async show(request, response) {
    const { id } = request;

    return response.json(
      await Region.findByPk(id, {
        attributes: ['id', 'name'],
      })
    );
  }

  async store(request, response) {
    const { name } = request.body;

    return response.json(await Region.create({ name }));
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    const region = await Region.findByPk(id);

    region.name = name;

    region.save();

    return response.json(region);
  }

  async delete(request, response) {
    const { id } = request.params;

    await Region.destroy({
      where: {
        id,
      },
    });

    return response.sendStatus(204);
  }
}

export default new RegionController();
