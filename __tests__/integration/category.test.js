import request from 'supertest';
import app from '../../src/app';

describe('category', () => {
  describe('create', () => {
    it('should create a new category', async () => {
      expect.assertions(3);

      const response = await request(app).post('/categories').send({
        name: 'Monitor',
      });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id');
      expect(response.body.name).toBe('Monitor');
    });

    it('shouldn´t create a new category without category name ou length < 3', async () => {
      expect.assertions(2);

      const response = await request(app).post('/categories').send({
        name: 'Ab',
      });

      const response2 = await request(app).post('/categories').send({
        name: '',
      });

      expect(response.status).toBe(400);
      expect(response2.status).toBe(400);
    });
  });

  describe('update', () => {
    it('should update a exist category', async () => {
      expect.assertions(2);

      const response = await request(app).put('/categories/1').send({
        name: 'Processor',
      });

      expect(response.status).toBe(200);
      expect(response.body.name).toBe('Processor');
    });

    it('shouldn´t update a exist category without data', async () => {
      expect.assertions(1);

      const response = await request(app).put('/categories/1').send({
        name: '',
      });

      expect(response.status).toBe(400);
    });
  });

  describe('list', () => {
    it('should list the categories', async () => {
      expect.assertions(1);

      const response = await request(app).get('/categories');

      expect(response.status).toBe(200);
    });
  });

  describe('show', () => {
    it('should list a category by pk', async () => {
      expect.assertions(1);

      const response = await request(app).get('/categories/1');

      expect(response.status).toBe(200);
    });
  });

  describe('delete', () => {
    it('should delete a category by pk', async () => {
      expect.assertions(1);

      const createCategory = await request(app).post('/categories').send({
        name: 'Category 1',
      });

      const idCategory = createCategory.body.id;

      const response = await request(app).delete(`/categories/${idCategory}`);

      expect(response.status).toBe(204);
    });
  });
});
