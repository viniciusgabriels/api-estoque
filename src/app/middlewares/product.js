import Product from '../models/Product';

function validateData(request, response, next) {
  const { name, price, categoryId } = request.body;

  if (!name || name.length < 3 || !price || !categoryId) {
    return response.status(400).json({
      message: `Invalid data`,
    });
  }

  next();
}

function validateId(request, response, next) {
  const { id } = request.params;

  const parsed = Number.parseInt(id);

  if (Number.isNaN(parsed)) {
    return response.status(400).json({
      message: 'Invalid ID',
    });
  }

  request.productId = parsed;

  next();
}

async function validateProductExist(request, response, next) {
  const product = await Product.findByPk(request.productId);

  if (!product) {
    return response.status(404).json({
      message: 'Product not found',
    });
  }

  request.product = product;

  next();
}

export { validateData, validateId, validateProductExist };
