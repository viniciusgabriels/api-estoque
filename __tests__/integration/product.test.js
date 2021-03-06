import request from 'supertest';
import app from '../../src/app';

describe('product', () => {
  describe('create', () => {
    it('should create a new product', async () => {
      expect.assertions(3);

      const category = await request(app).post('/categories').send({
        name: 'Hadware Product 1',
      });

      const response = await request(app).post('/products').send({
        name: 'Monitor LED 21Polegadas',
        price: 799.99,
        status: true,
        categoryId: category.body.id,
      });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id');
      expect(response.body.name).toBe('Monitor LED 21Polegadas');
    });

    it('shouldn´t create a new product without product name or length < 3', async () => {
      expect.assertions(1);

      const category1 = await request(app).post('/categories').send({
        name: 'Hadware Product 2',
      });

      const response = await request(app).post('/products').send({
        name: 'mo',
        price: 799.99,
        status: true,
        categoryId: category1.body.id,
      });

      expect(response.status).toBe(400);
    });

    it('shouldn´t create a new product without product price or length < 3', async () => {
      expect.assertions(1);

      const category2 = await request(app).post('/categories').send({
        name: 'Hadware Product 3',
      });

      const response = await request(app).post('/products').send({
        name: 'Monitor',
        price: 123.0,
        status: true,
        categoryId: category2.body.id,
      });

      expect(response.status).toBe(400);
    });

    it('shouldn´t create a new product without product without category', async () => {
      expect.assertions(1);

      const response = await request(app).post('/products').send({
        name: 'Monitor',
        price: 899.59,
        status: true,
        categoryId: '',
      });

      expect(response.status).toBe(400);
    });
  });

  describe('update', () => {
    it('should update a exist product', async () => {
      expect.assertions(2);

      const category = await request(app).post('/categories').send({
        name: 'Hadware Product 4',
      });

      const product = await request(app).post('/products').send({
        name: 'Monitor LED 23Polegadas',
        price: 1099.9,
        status: true,
        categoryId: category.body.id,
      });

      const response = await request(app)
        .put(`/products/${product.body.id}`)
        .send({
          name: 'Monitor LED 23Polegadas',
          price: 1299.9,
          status: true,
          categoryId: category.body.id,
        });

      expect(response.status).toBe(200);
      expect(response.body.price).toBe(1299.9);
    });

    it('shouldn´t update a exist product without data', async () => {
      expect.assertions(1);

      const response = await request(app).put('/products/1').send({
        name: '',
        price: 999.99,
        status: true,
        categoryId: '',
      });

      expect(response.status).toBe(400);
    });
  });

  describe('list', () => {
    it('should list the products', async () => {
      expect.assertions(1);

      const response = await request(app).get('/products');

      expect(response.status).toBe(200);
    });
  });

  describe('show', () => {
    it('should list a product by pk', async () => {
      expect.assertions(1);

      const category = await request(app).post('/categories').send({
        name: 'Hadware Product 5',
      });

      const insertProdut = await request(app).post('/products').send({
        name: 'Monitor LED 21Polegadas 5',
        price: 799.99,
        status: true,
        categoryId: category.body.id,
      });

      const response = await request(app).get(
        `/products/${insertProdut.body.id}`
      );

      expect(response.status).toBe(200);
    });
  });

  describe('delete', () => {
    it('should delete a product by pk', async () => {
      expect.assertions(1);

      const category = await request(app).post('/categories').send({
        name: 'Hadware Product 6',
      });

      const insertProdut = await request(app).post('/products').send({
        name: 'Monitor LED 21Polegadas 6',
        price: 799.99,
        status: true,
        categoryId: category.body.id,
      });

      const response = await request(app).delete(
        `/products/${insertProdut.body.id}`
      );

      expect(response.status).toBe(204);
    });
  });
});
