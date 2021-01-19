const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server/app');

describe('Test the root path', () => {
  beforeEach(() => {
    mongoose.connect('mongodb://localhost:27017/lego', { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterEach((done) => {
    mongoose.disconnect(done);
  });

  test('It should responsed to the GET method', () => request(app)
    .get('/items')
    .expect(200));

  test('It should respond with an array of product objects with length of 8', async () => {
    const response = await request(app).get('/items');
    expect(response.body.length).toEqual(8);
  });
  test('Verify format of product objects returned', async () => {
    const resp = await request(app).get('/items');
    expect(resp.body[0].imageUrl).toBeTruthy();
    expect(resp.body[0].name).toBeTruthy();
    expect(resp.body[0].reviewScore).toBeTruthy();
    expect(resp.body[0].price).toBeTruthy();
  });
});
