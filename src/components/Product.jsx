/* eslint-disable react/prop-types */
import React from 'react';

const Product = (props) => (
  <div className="item">
    <img src={props.item.imageUrl} alt="product" />
    <div>{props.item.name}</div>
    <div>{props.item.reviewScore}</div>
    <div>{props.item.price}</div>
    <button type="submit">Add to Bag</button>
  </div>

);

export default Product;
