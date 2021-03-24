import NearbyRegion from '../models/NearbyRegion';

class NearbyRegionController {
  async index(request, response) {
    const regions = await NearbyRegion.findAll()

    return response.json(regions);
  }

  async show(request, response) {
    const { id } = request;

    return response.json(
      await NearbyRegion.findByPk(id, {
        attributes: ['id', 'region_id', 'nearby_region_id'],
      })
    );
  }

  async store(request, response) {
    const { region, nearbyRegion } = request.body;

    return response.json(await NearbyRegion.create({ 
      region_id: region,
      nearby_region_id: nearbyRegion,
     }));
  }

  async update(request, response) {
    const { id } = request.params;
    const { region, nearbyRegion } = request.body;

    const regions = await NearbyRegion.findByPk(id);

    regions.region_id = region;
    regions.nearby_region_id = nearbyRegion;

    regions.save();

    return response.json(regions);
  }

  async delete(request, response) {
    const { id } = request.params;

    await NearbyRegion.destroy({
      where: {
        id,
      },
    });

    return response.sendStatus(204);
  }
}

export default new NearbyRegionController();