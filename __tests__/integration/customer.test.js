import request from 'supertest';
import app from '../../src/app';

describe('customer', () => {
  describe('create', () => {
    it('should create a new customer', async () => {
      expect.assertions(1);

      const response = await request(app).post('/customers').send({
        name: 'Teste',
        phone: 12345,
      })
    })
  })
})