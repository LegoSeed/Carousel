const Item = require('./database');

const LegoArray = [{
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/vwBusResized.jpg', name: 'The VW Bus', reviewScore: 90, price: 50,
},
{
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/theCastleResize.jpg', name: 'Hogwarts Castle', reviewScore: 60, price: 60,
},
{
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/MoseeislyResize.jpg', name: 'Mos Eisley Cantina', reviewScore: 70, price: 120,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/pirateShipResize.jpg ', name: 'Pirate Adventures', reviewScore: 80, price: 100,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/londonBridgeResize.jpg', name: 'London Bridge', reviewScore: 90, price: 220,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/airplaneResize.jpg', name: '10226 Sopwith Camel', reviewScore: 75, price: 80,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/sydneyOperaHouseResize.jpg', name: 'Sydney Opera House', reviewScore: 85, price: 250,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/leaningTowerResize.jpg ', name: 'The Leaning Tower of Pisa', reviewScore: 40, price: 50,
},
{
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/vwBusResized.jpg', name: 'The VW Bus', reviewScore: 90, price: 50,
},
{
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/theCastleResize.jpg', name: 'Hogwarts Castle', reviewScore: 60, price: 60,
},
{
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/MoseeislyResize.jpg', name: 'Mos Eisley Cantina', reviewScore: 70, price: 120,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/pirateShipResize.jpg ', name: 'Pirate Adventures', reviewScore: 80, price: 100,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/londonBridgeResize.jpg', name: 'London Bridge', reviewScore: 90, price: 220,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/airplaneResize.jpg', name: '10226 Sopwith Camel', reviewScore: 75, price: 80,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/sydneyOperaHouseResize.jpg', name: 'Sydney Opera House', reviewScore: 85, price: 250,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/leaningTowerResize.jpg ', name: 'The Leaning Tower of Pisa', reviewScore: 40, price: 50,
},
{
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/vwBusResized.jpg', name: 'The VW Bus', reviewScore: 90, price: 50,
},
{
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/theCastleResize.jpg', name: 'Hogwarts Castle', reviewScore: 60, price: 60,
},
{
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/MoseeislyResize.jpg', name: 'Mos Eisley Cantina', reviewScore: 70, price: 120,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/pirateShipResize.jpg ', name: 'Pirate Adventures', reviewScore: 80, price: 100,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/londonBridgeResize.jpg', name: 'London Bridge', reviewScore: 90, price: 220,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/airplaneResize.jpg', name: '10226 Sopwith Camel', reviewScore: 75, price: 80,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/sydneyOperaHouseResize.jpg', name: 'Sydney Opera House', reviewScore: 85, price: 250,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/leaningTowerResize.jpg ', name: 'The Leaning Tower of Pisa', reviewScore: 40, price: 50,
},
{
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/vwBusResized.jpg', name: 'The VW Bus', reviewScore: 90, price: 50,
},
{
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/theCastleResize.jpg', name: 'Hogwarts Castle', reviewScore: 60, price: 60,
},
{
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/MoseeislyResize.jpg', name: 'Mos Eisley Cantina', reviewScore: 70, price: 120,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/pirateShipResize.jpg ', name: 'Pirate Adventures', reviewScore: 80, price: 100,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/londonBridgeResize.jpg', name: 'London Bridge', reviewScore: 90, price: 220,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/airplaneResize.jpg', name: '10226 Sopwith Camel', reviewScore: 75, price: 80,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/sydneyOperaHouseResize.jpg', name: 'Sydney Opera House', reviewScore: 85, price: 250,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/leaningTowerResize.jpg ', name: 'The Leaning Tower of Pisa', reviewScore: 40, price: 50,
},
{
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/vwBusResized.jpg', name: 'The VW Bus', reviewScore: 90, price: 50,
},
{
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/theCastleResize.jpg', name: 'Hogwarts Castle', reviewScore: 60, price: 60,
},
{
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/MoseeislyResize.jpg', name: 'Mos Eisley Cantina', reviewScore: 70, price: 120,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/pirateShipResize.jpg ', name: 'Pirate Adventures', reviewScore: 80, price: 100,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/londonBridgeResize.jpg', name: 'London Bridge', reviewScore: 90, price: 220,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/airplaneResize.jpg', name: '10226 Sopwith Camel', reviewScore: 75, price: 80,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/sydneyOperaHouseResize.jpg', name: 'Sydney Opera House', reviewScore: 85, price: 250,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/leaningTowerResize.jpg ', name: 'The Leaning Tower of Pisa', reviewScore: 40, price: 50,
},
{
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/vwBusResized.jpg', name: 'The VW Bus', reviewScore: 90, price: 50,
},
{
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/theCastleResize.jpg', name: 'Hogwarts Castle', reviewScore: 60, price: 60,
},
{
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/MoseeislyResize.jpg', name: 'Mos Eisley Cantina', reviewScore: 70, price: 120,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/pirateShipResize.jpg ', name: 'Pirate Adventures', reviewScore: 80, price: 100,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/londonBridgeResize.jpg', name: 'London Bridge', reviewScore: 90, price: 220,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/airplaneResize.jpg', name: '10226 Sopwith Camel', reviewScore: 75, price: 80,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/sydneyOperaHouseResize.jpg', name: 'Sydney Opera House', reviewScore: 85, price: 250,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/leaningTowerResize.jpg ', name: 'The Leaning Tower of Pisa', reviewScore: 40, price: 50,
},
{
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/vwBusResized.jpg', name: 'The VW Bus', reviewScore: 90, price: 50,
},
{
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/theCastleResize.jpg', name: 'Hogwarts Castle', reviewScore: 60, price: 60,
},
{
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/MoseeislyResize.jpg', name: 'Mos Eisley Cantina', reviewScore: 70, price: 120,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/pirateShipResize.jpg ', name: 'Pirate Adventures', reviewScore: 80, price: 100,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/londonBridgeResize.jpg', name: 'London Bridge', reviewScore: 90, price: 220,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/airplaneResize.jpg', name: '10226 Sopwith Camel', reviewScore: 75, price: 80,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/sydneyOperaHouseResize.jpg', name: 'Sydney Opera House', reviewScore: 85, price: 250,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/leaningTowerResize.jpg ', name: 'The Leaning Tower of Pisa', reviewScore: 40, price: 50,
},
{
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/vwBusResized.jpg', name: 'The VW Bus', reviewScore: 90, price: 50,
},
{
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/theCastleResize.jpg', name: 'Hogwarts Castle', reviewScore: 60, price: 60,
},
{
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/MoseeislyResize.jpg', name: 'Mos Eisley Cantina', reviewScore: 70, price: 120,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/pirateShipResize.jpg ', name: 'Pirate Adventures', reviewScore: 80, price: 100,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/londonBridgeResize.jpg', name: 'London Bridge', reviewScore: 90, price: 220,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/airplaneResize.jpg', name: '10226 Sopwith Camel', reviewScore: 75, price: 80,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/sydneyOperaHouseResize.jpg', name: 'Sydney Opera House', reviewScore: 85, price: 250,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/leaningTowerResize.jpg ', name: 'The Leaning Tower of Pisa', reviewScore: 40, price: 50,
},
{
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/vwBusResized.jpg', name: 'The VW Bus', reviewScore: 90, price: 50,
},
{
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/theCastleResize.jpg', name: 'Hogwarts Castle', reviewScore: 60, price: 60,
},
{
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/MoseeislyResize.jpg', name: 'Mos Eisley Cantina', reviewScore: 70, price: 120,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/pirateShipResize.jpg ', name: 'Pirate Adventures', reviewScore: 80, price: 100,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/londonBridgeResize.jpg', name: 'London Bridge', reviewScore: 90, price: 220,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/airplaneResize.jpg', name: '10226 Sopwith Camel', reviewScore: 75, price: 80,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/sydneyOperaHouseResize.jpg', name: 'Sydney Opera House', reviewScore: 85, price: 250,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/leaningTowerResize.jpg ', name: 'The Leaning Tower of Pisa', reviewScore: 40, price: 50,
},
{
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/pirateShipResize.jpg ', name: 'Pirate Adventures', reviewScore: 80, price: 100,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/londonBridgeResize.jpg', name: 'London Bridge', reviewScore: 90, price: 220,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/airplaneResize.jpg', name: '10226 Sopwith Camel', reviewScore: 75, price: 80,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/sydneyOperaHouseResize.jpg', name: 'Sydney Opera House', reviewScore: 85, price: 250,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/leaningTowerResize.jpg ', name: 'The Leaning Tower of Pisa', reviewScore: 40, price: 50,
},
{
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/pirateShipResize.jpg ', name: 'Pirate Adventures', reviewScore: 80, price: 100,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/londonBridgeResize.jpg', name: 'London Bridge', reviewScore: 90, price: 220,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/airplaneResize.jpg', name: '10226 Sopwith Camel', reviewScore: 75, price: 80,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/sydneyOperaHouseResize.jpg', name: 'Sydney Opera House', reviewScore: 85, price: 250,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/leaningTowerResize.jpg ', name: 'The Leaning Tower of Pisa', reviewScore: 40, price: 50,
},
{
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/pirateShipResize.jpg ', name: 'Pirate Adventures', reviewScore: 80, price: 100,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/londonBridgeResize.jpg', name: 'London Bridge', reviewScore: 90, price: 220,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/airplaneResize.jpg', name: '10226 Sopwith Camel', reviewScore: 75, price: 80,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/sydneyOperaHouseResize.jpg', name: 'Sydney Opera House', reviewScore: 85, price: 250,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/leaningTowerResize.jpg ', name: 'The Leaning Tower of Pisa', reviewScore: 40, price: 50,
},
{
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/pirateShipResize.jpg ', name: 'Pirate Adventures', reviewScore: 80, price: 100,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/londonBridgeResize.jpg', name: 'London Bridge', reviewScore: 90, price: 220,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/airplaneResize.jpg', name: '10226 Sopwith Camel', reviewScore: 75, price: 80,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/sydneyOperaHouseResize.jpg', name: 'Sydney Opera House', reviewScore: 85, price: 250,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/leaningTowerResize.jpg ', name: 'The Leaning Tower of Pisa', reviewScore: 40, price: 50,
},
{
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/londonBridgeResize.jpg', name: 'London Bridge', reviewScore: 90, price: 220,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/airplaneResize.jpg', name: '10226 Sopwith Camel', reviewScore: 75, price: 80,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/sydneyOperaHouseResize.jpg', name: 'Sydney Opera House', reviewScore: 85, price: 250,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/leaningTowerResize.jpg ', name: 'The Leaning Tower of Pisa', reviewScore: 40, price: 50,
},
{
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/londonBridgeResize.jpg', name: 'London Bridge', reviewScore: 90, price: 220,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/airplaneResize.jpg', name: '10226 Sopwith Camel', reviewScore: 75, price: 80,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/sydneyOperaHouseResize.jpg', name: 'Sydney Opera House', reviewScore: 85, price: 250,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/leaningTowerResize.jpg ', name: 'The Leaning Tower of Pisa', reviewScore: 40, price: 50,
}];

// AWS.config.update({ region: 'us-east-2' });

// const s3 = new AWS.S3();

// // Create the parameters for calling listObjects
// const bucketParams = {
//   Bucket: 'chuck3774bucket',
//   Key: 'MOCK_DATA (3).json',
// };

// const List = function ListofS3Objects(err, data) {
//   // async function asyncList() {
//   const listOfItems = JSON.parse(data.Body.toString());
//   const newObj = { imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/dummyimage.com%3A382x382.jpg%3A5fa2dd%3Affffff.webloc' };
//   const resultList = [];
//   for (let i = 0; i < listOfItems.length; i += 1) {
//     let firstObj = listOfItems[i];
//     firstObj = { ...newObj, ...firstObj };
//     resultList.push(firstObj);
//   }
//   await Item.create(resultList).then(() => {
//     console.log('seed Complete!');
//     process.exit(0);
//   }).catch((error) => console.log(error));
// }
// asyncList().then(() => {
//   console.log('seed complete');
// });
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
// };

Item.create(LegoArray)
  .then(() => { console.log('seed complete!'); process.exit(0); })
  .catch((error) => {
    console.log(error);
  });
// .finally(() => {
//   mongoose.connection.close();
//   console.log('seeding complete');
// });

module.exports = { Item, LegoArray };
