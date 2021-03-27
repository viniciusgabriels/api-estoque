import request from 'supertest';
import app from '../../src/app';

describe('nearby egrion', () => {
  describe('show', () => {
    it('should return one nearby region relation', async () => {
      expect.assertions(1);
      
      const nearby1 = await request(app).get('/nearbyregion/1').send();

      expect(nearby1.status).toBe(200);
    });
  });
  describe('store', () => {
    it('should create a new nearby region relation', async () => {
      expect.assertions(2);

      const nearby2 = await request(app)
      .post('/nearbyregion')
      .send({
        region: 1,
        nearbyRegion: 2
      });
      const nearby3 = await request(app)
      .post('/nearbyregion')
      .send({
          region: '1',
          nearbyRegion: '1'
        });
      const nearby4 = await request(app)
      .post('/nearbyregion')
      .send({
          region: 1,
          nearbyRegion: 2
        });
        const nearby5 = await request(app)
        .post('/nearbyregion')
        .send({
          region: 'text',
          nearbyRegion: 'other text'
        });

      expect(nearby2.status).toBe(200);
      expect(nearby2.body).toHaveProperty('id');
      // expect(nearby3.status).toBe(400);
      // expect(nearby4.status).toBe(400);
      // expect(nearby5.status).toBe(400);
    });
  });
  describe('update', () => {
    it('should update a new relation', async () => {
      expect.assertions(2);

      const createNearby = await request(app).post('/nearbyregion').send({
        region: 2,
        nearbyRegion: 3,
      });
      
      const idNearby = createNearby.body.id; 

      const nearby6 = await request(app)
        .put(`/region/${idNearby}`)
        .send({
          region: 4,
          nearbyRegion: 5
        });

      expect(nearby6.status).toBe(200);
      expect(nearby6.body.region_id).toBe(4);

    });
  });
  describe('delete', () => {
    it('should delete a new relation', async () => {
      expect.assertions(1);
    
      const createNearby = await request(app).post('/nearbyregion').send({
        region: 1,
        nearbyRegion: 2
      });
      
      const idNearby = createNearby.body.id; 

      const nearby7 = await request(app).delete(`/region/${idNearby}`);
               
      expect(nearby7.status).toBe(204);
    });
  });
 });
