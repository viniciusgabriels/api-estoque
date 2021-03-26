/* eslint-disable no-underscore-dangle */

import request from 'supertest';
import app from '../../src/app';

describe('customer', () => {
  describe('create customer', () => {
    it('should create a new customer', async () => {
      expect.assertions(4);

      const region = await request(app).post('/region').send({
        name: 'Região teste',
      });

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

  describe('update data customer', () => {
    it('should update a customer data', async () => {
      expect.assertions(3);

      const region = await request(app).post('/region').send({
        name: 'Região teste 2',
      });

      const customer = await request(app).post('/customers').send({
        name: 'Customer teste 2',
        phone: 12345,
        regionId: region.body.id,
      });

      const response = await request(app)
        .put(`/customers/${customer.body.id}`)
        .send({
          name: 'Customer update teste',
          phone: 12346,
          regionId: region.body.id,
        });

      expect(response.status).toBe(200);
      expect(response.request._data.name).toBe('Customer update teste');
      expect(response.request._data.phone).toBe(12346);
    });
  });

  describe('show all customers', () => {
    it('should show all customers', async () => {
      expect.assertions(1);

      const response = await request(app).get('/customers');

      expect(response.status).toBe(200);
    });
  });

  describe('show one customer', () => {
    it('should find and show only one customer', async () => {
      expect.assertions(3);

      const region = await request(app).post('/region').send({
        name: 'Região teste 3',
      });

      const customer = await request(app).post('/customers').send({
        name: 'Customer teste 4',
        phone: 12345,
        regionId: region.body.id,
      });

      const response = await request(app).get(`/customers/${customer.body.id}`);

      expect(response.status).toBe(200);
      expect(response.body.name).toBe('Customer teste 4');
      expect(response.body.phone).toBe(12345);
    });
  });

  describe('delete customer', () => {
    it('should delete all customer data', async () => {
      expect.assertions(1);

      const region = await request(app).post('/region').send({
        name: 'Região teste 3',
      });

      const customer = await request(app).post('/customers').send({
        name: 'Customer teste 4',
        phone: 12345,
        regionId: region.body.id,
      });

      const response = await request(app).delete(
        `/customers/${customer.body.id}`
      );

      expect(response.status).toBe(204);
    });
  });
});
