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
import styled from 'styled-components';
import Product from './Product';
import 'react-multi-carousel/lib/styles.css';
import BagBanner from './BagBanner';
import WishlistBanner from './WishlistBanner';

const Button = styled.button`
background: grey;
width: 100%;
height: 3px;
border-width: 0;
margin-top: 20px;


`;
const ActiveButton = styled.button`
background: black;
width: 100%;
height: 3px;
border-width: 0;
margin-top: 20px;
`;

const List = styled.li`
width: 150px;
`;

const Title = styled.h1`
margin-bottom: 15px;
font-family: Cera Pro,sans-serif;
  font-size: 30px;
  `;

const CustomDot = ({ active, onClick }) => (
  <List>
    {
      active ? (
        <ActiveButton onClick={() => onClick()} />
      ) : (
        <Button
          onClick={() => onClick()}
        />
      )
}
  </List>
);

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
    {props.wasClicked ? <BagBanner /> : ''}
    {props.wasClicked2 ? <WishlistBanner /> : ''}
    <Title>
      Recommended For You
    </Title>
    <Carousel
      responsive={responsive}
      customDot={<CustomDot />}
      showDots
      ssr
      partialVisbile
    >
      {
    props.items.map((itemObj, i) => <Product item={itemObj} key={i} Clicked={props.click} Clicked2={props.click2} />)
    }
    </Carousel>
  </div>
);
export default ProductList;
