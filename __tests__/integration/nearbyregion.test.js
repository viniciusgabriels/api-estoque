import request from 'supertest';
import app from '../../src/app';

describe('nearby region', () => {
  describe('show', () => {
    it('should return one nearby region relation', async () => {
      expect.assertions(1);

      const nearby1 = await request(app).get('/nearbyregion/1').send();

      expect(nearby1.status).toBe(200);
    });
  });
  describe('store', () => {
    it('should create a new nearby region relation', async () => {
      expect.assertions(4);

      const nearby2 = await request(app).post('/nearbyregion').send({
        region: 1,
        nearbyRegion: 2,
      });
      const nearby3 = await request(app).post('/nearbyregion').send({
        region: 'text',
        nearbyRegion: 'other text',
      });
      const nearby4 = await request(app).post('/nearbyregion').send({
        region: 1,
        nearbyRegion: 1,
      });

      expect(nearby2.status).toBe(200);
      expect(nearby2.body).toHaveProperty('id');
      expect(nearby3.status).toBe(400);
      expect(nearby4.status).toBe(400);
    });
  });
  describe('update', () => {
    it('should update a new relation', async () => {
      expect.assertions(1);

      const createRegion1 = await request(app).post('/region').send({
        name: 'regiao 1',
      });
      const createRegion2 = await request(app).post('/region').send({
        name: 'regiao 2',
      });
      const createRegion3 = await request(app).post('/region').send({
        name: 'regiao 3',
      });

      const id1 = createRegion1.body.id;
      const id2 = createRegion2.body.id;
      const id3 = createRegion3.body.id;

      const createNearby = await request(app)
        .post('/nearbyregion')
        .send({
          region: `${id1}`,
          nearbyRegion: `${id2}`,
        });

      const idNearby = createNearby.body.id;

      const nearby6 = await request(app)
        .put(`/region/${idNearby}`)
        .send({
          region: `${id3}`,
          nearbyRegion: `${id2}`,
        });

      expect(nearby6.status).toBe(400);
    });
  });
  describe('delete', () => {
    it('should delete a new relation', async () => {
      expect.assertions(1);

      const createNearby = await request(app).post('/nearbyregion').send({
        region: 1,
        nearbyRegion: 2,
      });

      const idNearby = createNearby.body.id;

      const nearby7 = await request(app).delete(`/nearbyregion/${idNearby}`);

      expect(nearby7.status).toBe(204);
    });
  });
});
