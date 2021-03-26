import request from 'supertest';
import app from '../../src/app';
import RegionController from '../controllers/RegionController';
import { validateData } from '../middlewares/region';

describe('region', () => {
  describe('index', () => {
    it('should return all regions', async () => {
      expect.assertions(1);

      const regions = await request(app).get(
        '/region',
        RegionController.index()
      );

      expect(regions.status).toBe(200);
    });
  });
  describe('show', () => {
    it('should return one region', async () => {
      expect.assertions(2);

      const region1 = await request(app)
        .get('/region/:id', validateData, RegionController.show())
        .send({
          id: 1,
        });

      expect(region1.status).toBe(200);
      expect(region1.body).toHaveProperty('id');
    });
  });
  describe('store', () => {
    it('should create a new region', async () => {
      expect.assertions(4);

      const region2 = await request(app)
        .post('/region', validateData, RegionController.store())
        .send({
          name: 'Sul',
        });
      const region3 = await request(app)
        .post('/region', validateData, RegionController.store())
        .send({
          name: 'Norte',
        });
      const region4 = await request(app)
        .post('/region', validateData, RegionController.store())
        .send({
          name: '',
        });

      expect(region2.status).toBe(200);
      expect(region2.body).toHaveProperty('id');
      expect(region3.body.name).toBe('Norte');
      expect(region4.status).toBe(400);
    });
  });
  describe('update', () => {
    it('should update a new region', async () => {
      expect.assertions(3);

      const region5 = await request(app)
        .put('/region/1', validateData, RegionController.update())
        .send({
          name: 'novo',
        });

      expect(region5.status).toBe(200);
      expect(region5.body).toHaveProperty('id');
      expect(region5.body.name).toBe('novo');

    });
  });
  describe('update', () => {
    it('should update a new region', async () => {
      expect.assertions(1);

      const region6 = await request(app)
        .delete('/region/1', validateData, RegionController.show())
        .send();
        
      expect(region6.status).toBe(204);
    });
  });
});
