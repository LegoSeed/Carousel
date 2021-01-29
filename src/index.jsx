import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

function getItems(cb) {
  axios.get('http://18.224.136.166:3001/items')
    .then((items) => {
      cb(items);
    })
    .catch((error) => {
      console.log(error);
    });
}

ReactDOM.render(<App getItems={getItems} />, document.getElementById('app2'));
