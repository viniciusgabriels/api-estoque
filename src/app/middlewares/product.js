import Product from '../models/Product';
import ProductStock from '../models/ProductStock';

function validateData(request, response, next) {
  const { name, price, status, categoryId } = request.body;

  if (!name || name.length < 3 || !price || !status || !categoryId) {
    return response.status(400).json({
      message: `Invalid data`,
    });
  }

  return next();
}

function validateId(request, response, next) {
  const { id } = request.params;

  const parsed = Number.parseInt(id, 10);

  if (Number.isNaN(parsed)) {
    return response.status(400).json({
      message: 'Invalid ID',
    });
  }

  request.productId = parsed;

  return next();
}

async function validateProductExist(request, response, next) {
  const product = await Product.findByPk(request.productId);

  if (!product) {
    return response.status(404).json({
      message: 'Product not found',
    });
  }

  request.product = product;

  return next();
}

async function productExistInProductStock(request, response, next) {
  const product = await ProductStock.findOne({
    where: { product_id: request.productId },
  });

  if (product) {
    return response.status(400).json({
      message: 'Unable to delete! Linked product',
    });
  }

  return next();
}

export {
  validateData,
  validateId,
  validateProductExist,
  productExistInProductStock,
};
