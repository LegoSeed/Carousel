/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import Product from './Product';

const ProductList = (props) => (

  <div>
    {
    props.items.map((itemObj, i) => <Product item={itemObj} key={i} />)
    }
  </div>

);

export default ProductList;
