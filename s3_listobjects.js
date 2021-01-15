const AWS = require('aws-sdk');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/lego', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.set('useFindAndModify', false);

const Item = require('./database.js');

const LegoArray = [{
  imageUrl: 's3://chuck3774bucket/vwBusResized.jpg', name: 'The VW Bus', reviewScore: 90, price: 50,
},
{
  imageUrl: 's3://chuck3774bucket/dragonAtGringottsResize.jpg', name: 'Harry Potter: The Dragon escapes Gringotts', reviewScore: 60, price: 60,
},
{
  imageUrl: 's3://chuck3774bucket/starWarsR.jpg', name: 'Star Wars: Obi Won and Luke cruising', reviewScore: 70, price: 120,
}, {
  imageUrl: 's3://chuck3774bucket/pirateShipResize.jpg ', name: 'Pirate Adventures', reviewScore: 80, price: 100,
}, {
  imageUrl: 's3://chuck3774bucket/londonBridgeResize.jpg', name: 'London Bridge', reviewScore: 90, price: 220,
}, {
  imageUrl: 's3://chuck3774bucket/airplaneResize.jpg', name: '10226 Sopwith Camel', reviewScore: 75, price: 80,
}, {
  imageUrl: 's3://chuck3774bucket/sydneyOperaHouseResize.jpg', name: 'Sydney Opera House', reviewScore: 85, price: 250,
}, {
  imageUrl: 's3://chuck3774bucket/leaningTowerResize.jpg ', name: 'The Leaning Tower of Pisa', reviewScore: 40, price: 50,
}];

AWS.config.update({ region: 'us-east-2' });

const s3 = new AWS.S3();

// Create the parameters for calling listObjects
const bucketParams = {
  Bucket: 'chuck3774bucket',
  Key: 'MOCK_DATA (3).json',
};

let listOfItems;

const List = function ListofS3Objects(err, data) {
  async function asyncList() {
    listOfItems = JSON.parse(data.Body.toString());
    const newObj = { imageUrl: 's3://chuck3774bucket/dummyimage.com:382x382.jpg:5fa2dd:ffffff.webloc' };
    const resultList = [];
    for (let i = 0; i < listOfItems.length; i += 1) {
      let firstObj = listOfItems[i];
      firstObj = { ...newObj, ...firstObj };
      resultList.push(firstObj);
    }
    console.log(resultList);
    await Item.create(resultList).then(() => {
      console.log('seed complete');
      process.exit(0);
    });
  }
  asyncList();
  // process.exit(0);
  // if (err) {
  //   console.log('Error', err);
  // } else {
  //   listOfItems = JSON.parse(data.Body.toString());
  //   const newObj = { imageUrl: 's3://chuck3774bucket/dummyimage.com:382x382.jpg:5fa2dd:ffffff.webloc' };
  //   for (let i = 0; i < listOfItems.length; i += 1) {
  //     let firstObj = listOfItems[i];
  //     firstObj = { ...newObj, ...firstObj };
  //     Item.create(firstObj);
  //   }
};

Item.create(LegoArray)
  .then(() => { s3.getObject(bucketParams, List); })
  .catch((error) => {
    console.log(error);
  });
// .finally(() => {
//   mongoose.connection.close();
//   console.log('seeding complete');
// });
