import ReturnReason from '../models/ReturnReason';

class ReturnReasonController {
  async index(request, response) {
    const { description } = request.query;

    const where = {};

    if (description) {
      where.description = description;
    }

    const returnReason = await ReturnReason.findAndCountAll({
      where,
      attributes: ['id', 'description'],
    });

    return response.json(returnReason);
  }

  async show(request, response) {
    const { returnReasonId } = request;

    const returnReason = await ReturnReason.findByPk(returnReasonId, {
      attributes: ['id', 'description'],
    });

    return response.json(returnReason);
  }

  async store(request, response) {
    const { description } = request.body;

    return response.json(await ReturnReason.create({ description }));
  }

  async update(request, response) {
    const { id } = request.params;
    const { description } = request.body;

    const returnReason = await ReturnReason.findByPk(id);

    returnReason.description = description;

    returnReason.save();

    return response.json(returnReason);
  }

  async delete(request, response) {
    const { id } = request.params;

    await ReturnReason.destroy({
      where: {
        id,
      },
    });

    return response.sendStatus(204);
  }
}

export default new ReturnReasonController();
