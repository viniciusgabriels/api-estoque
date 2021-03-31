// import request from 'supertest';
// import app from '../../src/app';

describe('orderProduct', () => {
  describe('create', () => {
    it('should create a new order_product', async () => {
      expect.assertions(2);

      const category = await request(app).post('/categories').send({
        name: 'Hadware Product 1',
      });

      const product = await request(app).post('/products').send({
        name: 'Monitor LED 21Polegadas',
        price: '799.99',
        status: true,
        categoryId: category.body.id,
      });

      const region = await request(app).post('/region').send({
        name: 'Região teste',
      });

      const stock = await request(app).post('/stock').send({
        local: 'Local 1',
        regionId: region.body.id,
      });

      const productStock = await request(app).post('/productStock').send({
        quantity: 10,
        productId: product.body.id,
        stockId: stock.body.id,
      });

      const customer = await request(app).post('/customers').send({
        name: 'Customer teste',
        phone: 12345,
        regionId: region.body.id,
      });

      const type = await request(app).post('/types').send({
        description: 'Type test',
      });

      const order = await request(app)
        .post('/orders')
        .send({
          typeId: type.body.id,
          customerId: customer.body.id,
          product: [
            {
              product_stock_id: productStock.body.id,
              quantity: 5,
              price: 5.2,
            },
            {
              product_stock_id: productStock.body.id,
              quantity: 4,
              price: 7.5,
            },
          ],
        });

      expect(order.status).toBe(200);
      expect(order.body).toHaveProperty('id');
    });
  });
});
