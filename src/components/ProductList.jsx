/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import Carousel from 'react-multi-carousel';
import Product from './Product';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ProductList = (props) => (

  <div>
    <Carousel responsive={responsive}>
      {
    props.items.map((itemObj, i) => <Product item={itemObj} key={i} />)
    }
    </Carousel>
    ;
  </div>

);

export default ProductList;
