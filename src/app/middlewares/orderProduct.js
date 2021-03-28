import ProductStock from '../models/ProductStock';
import ReturnReason from '../models/ReturnReason';

function validateData(request, response, next) {
  const { typeId, customerId, product, returnReasonId } = request.body;

  if (!typeId || !customerId || !product) {
    return response.status(400).json({
      message: 'Invalid data',
    });
  }

  if (typeId === 2 && !returnReasonId) {
    return response.status(400).json({
      message: 'Missing reason of returning',
    });
  }

  next();
}

async function validateProductStock(request, response, next) {
  const productStock = await ProductStock.findByPk(request.product_stock_id);

  if (!productStock) {
    return response.status(404).json({
      message: 'Product not found in stock',
    });
  }

  request.productStock = productStock;

  next();
}

export { validateData, validateProductStock };
