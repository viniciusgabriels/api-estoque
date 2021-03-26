/* eslint-disable no-underscore-dangle */

import request from 'supertest';
import app from '../../src/app';

describe('types', () => {
  describe('create type', () => {
    it('should create a new type', async () => {
      expect.assertions(3);

      const response = await request(app).post('/types').send({
        description: 'Type test',
      });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body.description).toBe('Type test');
    });
  });

  describe('update data type', () => {
    it('should update a type data', async () => {
      expect.assertions(2);

      const type = await request(app).post('/types').send({
        description: 'Type 1',
      });

      const response = await request(app).put(`/types/${type.body.id}`).send({
        description: 'Type 2',
      });

      expect(response.status).toBe(200);
      expect(response.request._data.description).toBe('Type 2');
    });
  });

  describe('show all types', () => {
    it('should show all types', async () => {
      expect.assertions(1);

      const response = await request(app).get('/types');

      expect(response.status).toBe(200);
    });
  });

  describe('delete type', () => {
    it('should delete all type data', async () => {
      expect.assertions(1);

      const type = await request(app).post('/types').send({
        description: 'Type 3',
      });

      const response = await request(app).delete(`/types/${type.body.id}`);

      expect(response.status).toBe(204);
    });
  });

  describe('show one type', () => {
    it('should find and show only one type', async () => {
      expect.assertions(2);

      const type = await request(app).post('/types').send({
        description: 'Type 4',
      });

      const response = await request(app).get(`/types/${type.body.id}`);

      expect(response.status).toBe(200);
      expect(response.body.description).toBe('Type 4');
    });
  });
});
