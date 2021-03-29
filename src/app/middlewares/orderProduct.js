import ProductStock from '../models/ProductStock';
import ReturnReason from '../models/ReturnReason';
import Order from '../models/Order';

function validateData(request, response, next) {
  const {
    orderId,
    quantity,
    productStockId,
    price,
    returnReasonId,
  } = request.body;

  if (!orderId || !quantity || !productStockId || !price) {
    return response.status(400).json({
      message: 'Invalid data',
    });
  }

  const order = Order.findOne({ where: { orderId } });

  if (order.type_id === 2 && !returnReasonId) {
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
