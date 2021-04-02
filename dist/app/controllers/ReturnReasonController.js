"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _ReturnReason = require('../models/ReturnReason'); var _ReturnReason2 = _interopRequireDefault(_ReturnReason);

class ReturnReasonController {
  async index(request, response) {
    const { description } = request.query;

    const where = {};

    if (description) {
      where.description = description;
    }

    const returnReason = await _ReturnReason2.default.findAndCountAll({
      where,
      attributes: ['id', 'description'],
    });

    return response.json(returnReason);
  }

  async show(request, response) {
    const { returnReasonId } = request;

    const returnReason = await _ReturnReason2.default.findByPk(returnReasonId, {
      attributes: ['id', 'description'],
    });

    return response.json(returnReason);
  }

  async store(request, response) {
    const { description } = request.body;

    return response.json(await _ReturnReason2.default.create({ description }));
  }

  async update(request, response) {
    const { id } = request.params;
    const { description } = request.body;

    const returnReason = await _ReturnReason2.default.findByPk(id);

    returnReason.description = description;

    returnReason.save();

    return response.json(returnReason);
  }

  async delete(request, response) {
    const { id } = request.params;

    await _ReturnReason2.default.destroy({
      where: {
        id,
      },
    });

    return response.sendStatus(204);
  }
}

exports. default = new ReturnReasonController();
