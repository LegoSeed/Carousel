// const mongoose = require('mongoose');
// const AWS = require('aws-sdk');
// const Database = require('../s3_listobjects');

// AWS.config.update({ region: 'us-east-2' });

// const s3 = new AWS.S3();

// const bucketParams = {
//   Bucket: 'chuck3774bucket',
//   Key: 'MOCK_DATA (3).json',
// };

// const getObjectPromise = function Promisify() {
//   return new Promise(() => {
//     s3.getObject(bucketParams, Database.List);
//   });
// };

// describe('Test that database was seeded', () => {
//   beforeEach(async () => {
//     await mongoose.connect('mongodb://localhost:27017/lego', { useNewUrlParser: true, useUnifiedTopology: true });
//   });

//   afterEach(async () => {
//     // await Test.deleteMany();
//     await mongoose.connection.close();
//   });

//   test('File should seed database correctly', async (done) => {
//     await getObjectPromise();
//     const Products = await Database.Item.find({});
//     expect(Products[0].name).toBeTruthy();
//     expect(Products[0].imageUrl).toBeTruthy();
//     expect(Products[0].reviewScore).toBeTruthy();
//     expect(Products[0].price).toBeTruthy();

//     done();
//   });
// });
