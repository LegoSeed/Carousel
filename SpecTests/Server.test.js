const request = require('supertest');
const app = require('../server/app');

describe('Test the root path', () => {
  test('It should responsed to the GET method', async (done) => {
    jest.useFakeTimers();
    request(app)
      .get('/items')
      .expect(200);
    done();
  });

  test('It should respond with an array of product objects with length of 8', async (done) => {
    jest.useFakeTimers();
    const response = await request(app).get('/items');
    expect(response.body.length).toEqual(8);
    done();
  });
  test('Verify format of product objects returned', async (done) => {
    jest.useFakeTimers();
    const resp = await request(app).get('/items');
    expect(resp.body[0].imageUrl).toBeTruthy();
    expect(resp.body[0].name).toBeTruthy();
    expect(resp.body[0].reviewScore).toBeTruthy();
    expect(resp.body[0].price).toBeTruthy();
    done();
  });
});
