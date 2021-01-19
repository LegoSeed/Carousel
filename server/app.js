const express = require('express');
const cors = require('cors');
const path = require('path');
const Item = require('../database.js');

const app = express();
app.use(cors());

app.get('/items', (req, res) => {
  Item.find({}).limit(8)
    .then((products) => {
      res.status(200).json(products);
    });
});

app.use(express.static(path.join(__dirname, '..', 'public')));

module.exports = app;
