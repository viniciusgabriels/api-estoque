import request from 'supertest';
import app from '../../src/app';

describe('orderProduct', () => {
  describe('create order_product', () => {
    it('should create a new order_product', async () => {
      expect.assertions(1);

      /* const region = await request(app).post('/region').send({
        name: 'Região teste',
      }); */

      const response = await request(app).post('/customers').send({
        name: 'Customer teste',
        phone: 12345,
        regionId: region.body.id,
      });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body.name).toBe('Customer teste');
      expect(response.body.phone).toBe(12345);
    });
  });
}