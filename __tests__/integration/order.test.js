import request from 'supertest';
import app from '../../src/app';

describe('Order', () => {
  describe('get', async () => {
    it('Should list all orders', () => {
      expect.assertions(1);

      const order = await request(app).get('/orders')

      console.log(order)
    });
  });
});
