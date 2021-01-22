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
    <Carousel
      ss-container
      responsive={responsive}
      customDot={<CustomDot />}
      showDots
      ssr
      partialVisbile
    >
      {
    props.items.map((itemObj, i) => <Product item={itemObj} key={i} />)
    }
    </Carousel>
  </div>

);

export default ProductList;
