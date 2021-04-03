"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Region = require('../models/Region'); var _Region2 = _interopRequireDefault(_Region);
var _NearbyRegion = require('../models/NearbyRegion'); var _NearbyRegion2 = _interopRequireDefault(_NearbyRegion);


class RegionController {
  async index(request, response) {
    const regions = await _Region2.default.findAll();

    return response.json(regions);
  }

  async show(request, response) {
    const { id } = request.params;

    return response.json(
      await _Region2.default.findByPk(id, {
        attributes: ['id', 'name'],
      })
    ); 
  }

  async store(request, response) {
    const { name } = request.body;

    return response.json(await _Region2.default.create({ name }));
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    const region = await _Region2.default.update({
      name
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

    await _NearbyRegion2.default.destroy({
      where: {
        region_id: id,
      },
    });

    await _NearbyRegion2.default.destroy({
      where: {
        nearby_region_id: id,
      },
    });

    await _Region2.default.destroy({
      where: {
        id,
      },
    });

    return response.sendStatus(204);
  }
}

exports. default = new RegionController();
