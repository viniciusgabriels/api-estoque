import request from 'supertest';
import app from '../../src/app';

describe('customer', () => {
  describe('create', () => {
    it('should create a new customer', async () => {
      expect.assertions(1);

      await request(app).post('/region').send({
        name: 'Região teste',
      });

      const response = await request(app).post('/customers').send({
        name: 'Customer teste',
        phone: 12345,
        region_id: 1,
      });

      expect(response.status).toBe(200);
    });
  });
});
