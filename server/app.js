const compression = require('compression');
const express = require('express');
const cors = require('cors');
const path = require('path');
const Item = require('../database.js');

const app = express();
app.use(compression());
app.use(cors());

const corsOptions = {
  maxAge: 31536000,
};

app.get('/items', cors(corsOptions), (req, res) => {
  Item.find({}).limit(8)
    .then((products) => {
      res.status(200).json(products);
    });
});

app.use(express.static(path.join(__dirname, '..', 'public')));

module.exports = app;
