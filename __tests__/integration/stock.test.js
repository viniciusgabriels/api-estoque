/* eslint-disable no-underscore-dangle */

import request from 'supertest';
import app from '../../src/app';

describe('stock', () => {
  describe('create stock', () => {
    it('should create a new stock', async () => {
      expect.assertions(3);

      const region = await request(app).post('/region').send({
        name: 'Região teste',
      });

      const response = await request(app).post('/stock').send({
        local: 'Local 1',
        regionId: region.body.id,
      });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body.local).toBe('Local 1');
    });
  });

  describe('update data stock', () => {
    it('should update a stock data', async () => {
      expect.assertions(2);

      const region = await request(app).post('/region').send({
        name: 'Região teste 2',
      });

      const stock = await request(app).post('/stock').send({
        local: 'Local 2',
        regionId: region.body.id,
      });

      const response = await request(app).put(`/stock/${stock.body.id}`).send({
        local: 'Local 3',
        regionId: region.body.id,
      });

      expect(response.status).toBe(200);
      expect(response.request._data.local).toBe('Local 3');
    });
  });

  describe('show one stock', () => {
    it('should find and show only one stock', async () => {
      expect.assertions(2);

      const region = await request(app).post('/region').send({
        name: 'Região teste 3',
      });

      const stock = await request(app).post('/stock').send({
        local: 'Local 4',
        regionId: region.body.id,
      });

      const response = await request(app).get(`/stock/${stock.body.id}`);

      expect(response.status).toBe(200);
      expect(response.body.local).toBe('Local 4');
    });
  });

  describe('delete stock', () => {
    it('should delete all stock data', async () => {
      expect.assertions(1);

      const region = await request(app).post('/region').send({
        name: 'Região teste 4',
      });

      const stock = await request(app).post('/stock').send({
        local: 'Local 5',
        regionId: region.body.id,
      });

      const response = await request(app).delete(`/stock/${stock.body.id}`);

      expect(response.status).toBe(204);
    });
  });

  describe('show all stocks', () => {
    it('should show all stock', async () => {
      expect.assertions(1);

      const response = await request(app).get('/stock');

      expect(response.status).toBe(200);
    });
  });
});
