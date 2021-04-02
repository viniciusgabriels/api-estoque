/* eslint-disable consistent-return */

import ProductStock from '../models/ProductStock';
import Order from '../models/Order';

function validateData(request, response, next) {
  const { id, product } = request.body;

  const order = Order.findOne({ where: { id } });

  product.forEach((element) => {
    const { quantity, productStockId, price, returnReasonId } = element;
    if (!id || !quantity || !productStockId || !price) {
      return response.status(400).json({
        message: 'Invalid data',
      });
    }

    if (order.type_id === 2 && !returnReasonId) {
      return response.status(400).json({
        message: 'Missing reason of returning',
      });
    }
  });

  next();
}

async function validateProductStock(request, response, next) {
  const { productStockId } = request.body;
  const productStock = await ProductStock.findByPk(productStockId);

  if (!productStock) {
    return response.status(404).json({
      message: 'Product not found in stock',
    });
  }

  next();
}

export { validateData, validateProductStock };
