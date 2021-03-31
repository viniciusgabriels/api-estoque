/* eslint-disable camelcase */
import ProductStock from '../models/ProductStock';
import ReturnReason from '../models/ReturnReason';
import Order from '../models/Order';

function validateData(request, response, next) {
  const { id, product } = request.body;

  const order = Order.findOne({ where: { id } });

  product.forEach((element) => {
    const { quantity, product_stock_id, price, return_reason_id } = element;
    if (!id || !quantity || !product_stock_id || !price) {
      return response.status(400).json({
        message: 'Invalid data',
      });
    }

    if (order.type_id === 2 && !return_reason_id) {
      return response.status(400).json({
        message: 'Missing reason of returning',
      });
    }
  });

  next();
}

async function validateProductStock(request, response, next) {
  const { product_stock_id } = request.body;
  const productStock = await ProductStock.findByPk(product_stock_id);

  if (!productStock) {
    return response.status(404).json({
      message: 'Product not found in stock',
    });
  }

  next();
}

export { validateData, validateProductStock };
