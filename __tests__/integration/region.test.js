import request from 'supertest';
import app from '../../src/app';
import RegionController from '../controllers/RegionController';
import {
  validateData,
} from '../middlewares/region';


describe('Region', () => {
  describe('index', () => {
    it('should return all regions', async () => {
      expect.assertions(1);

      const regions = await request(app).get('/region', RegionController.index())

      expect(regions.status).toBe(200);
    })
  })
  describe('show',  () => {
    it('should return one region', async () => {
      expect.assertions(1);

      const region1 = await request(app).get('/region/:id', RegionController.show()).setEncoding({
        id: 1,
      })

      expect(region1.status).toBe(200);
      expect(region1.body).toHaveProperty('id');
    })
  })
  describe('store', () => {
    it('should create a new region', async () => {
      expect.assertions(4);
      
      const region2 = await request(app).post('/categories', validateData).send({
        name: 'Sul',
      });
      const region3 = await request(app).post('/categories', validateData).send({
        name: 'Norte',
      });
      const region4 = await request(app).post('/categories', validateData).send({
        name: '',
      });
    
      expect(region2.status).toBe(200);
      expect(region2.body).toHaveProperty('id');
      expect(region3.body.name).toBe('Norte');
      expect(region4.status).toBe(400);
    });
  }) 
}) 
