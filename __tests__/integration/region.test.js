import request from 'supertest';
import app from '../../src/app';

describe('region', () => {
  describe('show', () => {
    it('should return one region', async () => {
      expect.assertions(1);

      const region1 = await request(app).get('/region/1').send();

      expect(region1.status).toBe(200);
    });
  });
  describe('store', () => {
    it('should create a new region', async () => {
      expect.assertions(3);

      const region2 = await request(app).post('/region').send({
        name: 'Sul',
      });
      const region3 = await request(app).post('/region').send({
        name: 'Norte',
      });
      const region4 = await request(app).post('/region').send({
        name: '',
      });

      expect(region2.status).toBe(200);
      expect(region2.body).toHaveProperty('id');
      expect(region3.body.name).toBe('Norte');
     // expect(region4.status).toBe(400);
    });
  });
  describe('update', () => {
    it('should update a new region', async () => {
      expect.assertions(3);

      const region5 = await request(app)
        .put('/region/1')
        .send({
          name: 'novo',
        });

      expect(region5.status).toBe(200);
      expect(region5.body).toHaveProperty('id');
      expect(region5.body.name).toBe('novo');
    });
  });
  describe('delete', () => {
    it('should delete a new', async () => {
      expect.assertions(1);
    
      const createRegion = await request(app).post('/region').send({
        name: 'Region 1',
      });
      
      const idRegion = createRegion.body.id; 

      const region6 = await request(app).delete(`/region/${idRegion}`);
        
      expect(region6.status).toBe(204);
    });
  });
});
