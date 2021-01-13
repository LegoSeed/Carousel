const express = require('express');
const cors = require('cors');
const path = require('path');
const Item = require('./database.js')

const app = express();
const PORT = 3001;

app.get('/items', (req, res) => {
  res.status(200).json('you got the stuff!')
})

app.use(express.static(path.join(__dirname, '.', 'public')));

app.listen(PORT, () => {
  console.log(`Server listening at locathost:${3001}`)
})



