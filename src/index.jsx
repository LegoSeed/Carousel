import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

function getItems(cb) {
  axios.get('/carousel')
    .then((items) => {
      console.log(items);
      cb(items);
    })
    .catch((error) => {
      console.log(error);
    });
}

ReactDOM.render(<App getItems={getItems} />, document.getElementById('app2'));
