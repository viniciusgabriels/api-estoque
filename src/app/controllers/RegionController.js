import Region from '../models/Region';
import NearbyRegion from '../models/NearbyRegion';

class RegionController {
  async index(request, response) {
    const regions = await Region.findAll();

    return response.json(regions);
  }

  async show(request, response) {
    const { id } = request.params;

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

    const region = await Region.update(
      {
        name,
      },
      {
        where: {
          id,
        },
        returning: true,
      }
    );

    return response.json(region);
  }

  async delete(request, response) {
    const { id } = request.params;

    await NearbyRegion.destroy({
      where: {
        region_id: id,
      },
    });

    await NearbyRegion.destroy({
      where: {
        nearby_region_id: id,
      },
    });

    await Region.destroy({
      where: {
        id,
      },
    });

    return response.sendStatus(204);
  }
}

export default new RegionController();
