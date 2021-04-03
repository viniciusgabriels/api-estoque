import Order from '../models/Order';

function validateId(request, response, next) {
  const { id } = request.params;

  const parsed = Number.parseInt(id);
  if (isNaN(parsed)) {
    return response.status(400).json({
      message: 'Invalid Id',
    });
  }

  request.orderID = parsed;

  return next();
}

export { validateId };
