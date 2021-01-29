/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import Carousel from 'react-multi-carousel';
import Product from './Product';
import 'react-multi-carousel/lib/styles.css';
import BagBanner from './BagBanner';
import WishlistBanner from './WishlistBanner';
import '../style.css';

const CustomDot = ({ active, onClick }) => (
  <li className="styled-list">
    <button
      className={`custom-dot ${active ? 'custom-dot--active' : ''}`}
      onClick={() => onClick()}
    />
  </li>
);

const responsive = {
  superLargeDesktop: {

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
    {props.wasClicked ? <BagBanner /> : ''}
    {props.wasClicked2 ? <WishlistBanner /> : ''}

    <h1 className="title">
      Recommended For You
    </h1>
    <Carousel
      responsive={responsive}
      customDot={<CustomDot />}
      showDots
      ssr
      itemClass="image-item"
    >
      {
    props.items.map((itemObj, i) => <Product item={itemObj} key={i} Clicked={props.click} Clicked2={props.click2} />)
    }
    </Carousel>
  </div>
);
export default ProductList;
