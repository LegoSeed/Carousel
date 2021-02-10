require('newrelic');
const compression = require('compression');
const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('../dataBase/index.js');
// const Item = require('../database.js');

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '..', 'public')));
const PORT = 3001;

app.get('/carousel', (req, res) => {
  console.log('request');
  db.query("SELECT * FROM products LIMIT 8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(400);
    } else {
      console.log('yes');
      res.status(200);
      res.send(data);
    }
  });
});

app.post('/carousel', (req, res) => {
  console.log(req.body);
  const text = 'insert into test';
  const values = req.body.name;
  db.query(text, values, (err, data) => {
    if (err) {
      res.status(400);
    } else {
      res.status(200);
      res.send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log('Server is listening on: ', PORT);
});

module.exports = app;
