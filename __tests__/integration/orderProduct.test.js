import request from 'supertest';
import app from '../../src/app';

describe('orderProduct', () => {
  describe('create', () => {
    it('should create a new order_product', async () => {
      expect.assertions(3);

      const productStock = await request(app).post('/productStock').send({
        name: 'parafusos',
        description: 'ok',
        price: 1.2,
        status: 1,
        category_id: 1,
      });

      const response = await request(app).post('/orderProduct').send({
        orderId: 1,
        quantity: 5,
        productStockId: 1,
        price: 5.99,
      });

      expect(response.status).toBe(201);
      expect(response).toHaveProperty('id');
      expect(response.body.quantity).toBe(5);
    });
  });
});
