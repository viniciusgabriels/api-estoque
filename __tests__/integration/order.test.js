import request from 'supertest';
import app from '../../src/app';

describe('order', () => {
  describe('get', () => {
    it('should list all orders', async () => {
      expect.assertions(1);

      const order = await request(app).get('/orders');

    expect(order.status).toBe(200);
    describe('post', () => {
    it('should create a new order', async () => {
      expect.assertions(2);

      const order = await request(app).post('/orders').send({
        customerId: 1,
        typeId: 1,
      });

      const { typeId } = order.body;

      const orderProduct = await request(app)
        .post('/order-product')
        .send({
          id: order.body.id,
          product: [
            {
              productStockId: 1,
              returnReasonId: typeId === 2 ? 'reason' : null,
              quantity: 2,
              price: 3.0,
            },
          ],
        });

      console.log(orderProduct);

      expect(order.body).toHaveProperty('id');
      expect(order.status).toBe(201);
    });
  });
})