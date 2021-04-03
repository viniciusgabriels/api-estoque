import OrderProduct from '../models/OrderProduct';
import ProductStock from '../models/ProductStock';

class ProductService {
  async discoutStock(id, quantity) {
    const productStock = await ProductStock.findOne({
      attributes: ['quantity', 'product_id', 'stock_id'],
      where: { id },
    });

    const stockQuantity = productStock.dataValues.quantity - quantity;
    const product = productStock.dataValues.product_id;
    const stock = productStock.dataValues.stock_id;

    if (stockQuantity <= 0) {
      this.checkRegionStorage(stock);
    }
    await ProductStock.update(
      {
        quantity: stockQuantity,
        product_id: product,
        stock_id: stock,
      },
      {
        where: { id },
      }
    );
  }

  async checkRegionStorage(stock) {
    console.log('sem stock', stock)
  }
}

export default new ProductService();
