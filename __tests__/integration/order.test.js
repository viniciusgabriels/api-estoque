import request from 'supertest';
import app from '../../src/app';

describe('order', () => {
  describe('post', () => {
    it('should create a new order', async () => {
      expect.assertions(2);

      const category = await request(app).post('/categories').send({
        name: 'Hadware Product 1',
      });

      const product = await request(app).post('/products').send({
        name: 'Monitor LED 21Polegadas',
        price: 799.99,
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

      await request(app).post('/productStock').send({
        quantity: 10,
        productId: product.body.id,
        stockId: stock.body.id,
      });

      await request(app).post('/customers').send({
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
          customerId: 1,
          typeId: type.id,
          product: [
            {
              product_stock_id: 1,
              return_reason_id: type.id === 2 ? 'reason' : null,
              quantity: 2,
              price: 3.0,
            },
          ],
        });

      expect(order.body).toHaveProperty('id');
      expect(order.status).toBe(201);
    });
  });
});
