import request from 'supertest';
import app from '../../src/app';
import NearbyRegionController from '../controllers/NearbyRegionController';

describe('nearby egrion', () => {
  describe('index', () => {
    it('should return all relations in nearby regions', async () => {
      expect.assertions(1);

      const nearbyregions = await request(app).get(
        '/nearbyregion',
        NearbyRegionController.index()
      );

      expect(nearbyregions.status).toBe(200);
    });
  });
  describe('show', () => {
    it('should return one nearby region relation', async () => {
      expect.assertions(2);

      const nearby1 = await request(app)
        .get('/nearbyregion/:id', NearbyRegionController.show())
        .send({
          id: 1,
        });

      expect(nearby1.status).toBe(200);
      expect(nearby1.body).toHaveProperty('region_id');
    });
  });
  describe('store', () => {
    it('should create a new nearby region relation', async () => {
      expect.assertions(5);

      const nearby2 = await request(app)
        .post('/nearbyregion', NearbyRegionController.store())
        .send({
          region: 1,
          nearbyRegion: 2,
        });
      const nearby3 = await request(app)
        .post('/nearbyregion', NearbyRegionController.store())
        .send({
          region: 1,
          nearbyRegion: 1,
        });
      const nearby4 = await request(app)
        .post('/nearbyregion', NearbyRegionController.store())
        .send({
          region: '',
          nearbyRegion: '',
        });
        const nearby5 = await request(app)
        .post('/nearbyregion', NearbyRegionController.store())
        .send({
          region: 'text',
          nearbyRegion: 'other text',
        });

      expect(nearby2.status).toBe(200);
      expect(nearby2.body).toHaveProperty('id');
      expect(nearby3.status).toBe(400);
      expect(nearby4.status).toBe(400);
      expect(nearby5.status).toBe(400)
    });
  });
  describe('update', () => {
    it('should update a new relation', async () => {
      expect.assertions(3);

      const nearby6 = await request(app)
        .put('/nearbyregion/1', NearbyRegionController.update())
        .send({
          region: 1,
          nearbyRegion: 2,
        });

      expect(nearby6.status).toBe(200);
      expect(nearby6.body).toHaveProperty('id');
      expect(nearby6.body.region_id).toBe('1');

    });
  });
  describe('update', () => {
    it('should update a new region', async () => {
      expect.assertions(1);

      const nearby7 = await request(app)
        .delete('/nearbyregion/1', NearbyRegionController.show())
        .send();
        
      expect(nearby7.status).toBe(204);
    });
  });
});
