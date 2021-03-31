import request from 'supertest';
import app from '../../src/app';

describe('order', () => {
  describe('get', () => {
    it('should list all orders', async () => {
      expect.assertions(1);

      const order = await request(app).get('/orders');

      expect(order.status).toBe(200);
    });
  });
});
