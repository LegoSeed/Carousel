/* eslint-disable no-plusplus */
const fs = require('fs');
const ObjectsToCsv = require('objects-to-csv');
const faker = require('faker');
const db = require('./index.js');

const imageArray = [];

for (let i = 0; i < 1000; i++) {
  let url = faker.image.imageUrl();
  imageArray.push(url);
}

class Product {
  constructor() {
    this.name = faker.lorem.words(3);
    this.image = imageArray[Math.floor(Math.random() * imageArray.length)];
    this.reviewScore = Math.floor(Math.random() * 5) + 1;
    this.price = (Math.random() * 100) + 5;
  }
}

const products = [];

for (let i = 0; i < 10000000; i++) {
  products.push(new Product());
}

const csvString = [
  [
    "name",
    "image",
    "reviewScore",
    "price",
  ],
  ...products.map((product) => [
    product.name,
    product.image,
    product.reviewScore,
    product.price,
  ]),
].map(e => e.join(",")) 
  .join("\n");

fs.writeFile('./products.csv', csvString, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('written');
});
// (async () => {
//   const csv = new ObjectsToCsv(products);
//   await csv.toDisk('../../../../../../../Documents/test.csv');
//   console.log('done');
// })();
