"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _NearbyRegion = require('../models/NearbyRegion'); var _NearbyRegion2 = _interopRequireDefault(_NearbyRegion);

class NearbyRegionController {
  async index(request, response) {
    const regions = await _NearbyRegion2.default.findAll();

    return response.json(regions);
  }

  async show(request, response) {
    const { id } = request;

    return response.json(
      await _NearbyRegion2.default.findByPk(id, {
        attributes: ['id', 'region_id', 'nearby_region_id'],
      })
    );
  }

  async store(request, response) {
    const { region, nearbyRegion } = request.body;

    return response.json(
      await _NearbyRegion2.default.create({
        region_id: region,
        nearby_region_id: nearbyRegion,
      })
    );
  }

  async update(request, response) {
    const { id } = request.params;
    const { region, nearbyRegion } = request.body;

    const regions = await _NearbyRegion2.default.findByPk(id);

    regions.region_id = region;
    regions.nearby_region_id = nearbyRegion;

    regions.save();

    return response.sendStatus(200);
  }

  async delete(request, response) {
    const { id } = request.params;

    await _NearbyRegion2.default.destroy({
      where: {
        id,
      },
    });

    return response.sendStatus(204);
  }
}

exports. default = new NearbyRegionController();
