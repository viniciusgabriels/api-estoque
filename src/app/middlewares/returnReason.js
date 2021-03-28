import ReturnReason from '../models/ReturnReason';
import OrderProduct from '../models/OrderProduct';

function validateData(request, response, next) {
  const { description } = request.body;

  if (!description || description.length < 3) {
    return response.status(400).json({
      message: `Invalid data`,
    });
  }

  next();
}

function validateId(request, response, next) {
  const { id } = request.params;

  const parsed = Number.parseInt(id);

  if (Number.isNaN(parsed) || parsed < 1) {
    return response.status(400).json({
      message: 'Invalid ID',
    });
  }

  request.returnReasonId = parsed;

  next();
}

async function validateReturnReasonExist(request, response, next) {
  const returnReason = await ReturnReason.findByPk(request.returnReasonId);

  if (!returnReason) {
    return response.status(404).json({
      message: 'Return reason not found',
    });
  }

  request.returnReason = returnReason;

  next();
}

async function returnReasonExistInOrderProduct(request, response, next) {
  const returnReason = await OrderProduct.findOne({
    where: { return_reason_id: request.returnReasonId },
  });

  if (returnReason) {
    return response.status(400).json({
      message: 'Unable to delete! Linked return reason to orders products',
    });
  }

  next();
}

export {
  validateData,
  validateId,
  validateReturnReasonExist,
  returnReasonExistInOrderProduct,
};
