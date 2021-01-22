/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import React from 'react';
import { Card } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import styled from 'styled-components';

const StyledButton = styled.button`
color: black;
background-color: rgb(253, 128, 36);
border-color: rgb(253, 128, 36);
font-family: Cera Pro,sans-serif;
width: 100%;
height: 50px;
border-radius: 5px;

&:hover {
  background-color: white;
  color:black;
  border-color: rgb(253, 128, 36);
  font-family: Cera Pro,sans-serif;
  width: 100%;
  height: 50px;
  border-radius: 5px;
}
`;

const Wrapper = styled.div`
&:hover {
  text-decoration: underline;
}
`;

const StyledCard = styled.div`
padding: 0 0 20px 0;
`;

const Product = (props) => (

  <StyledCard>

    <Card style={{ width: '22rem' }}>
      <StarRatingComponent
        name={props.item.name}
        starCount={1}
        emptyStarColor="grey"
        starColor="blue"
        renderStarIcon={() => <span>♥</span>}
        onStarClick={props.Clicked2}
      />
      <Card.Img variant="top" src={props.item.imageUrl} />
      <Card.Body>
        <Wrapper>
          <Card.Title>{props.item.name}</Card.Title>
        </Wrapper>
        <StarRatingComponent
          name="star"
          editing={false}
          emptyStarColor="grey"
          value={props.item.reviewScore / 20}
        />
        <Card.Text>
          $
          {props.item.price}
          .99
        </Card.Text>
        <StyledButton variant="primary" onClick={() => (props.Clicked())}>Add to Bag</StyledButton>
      </Card.Body>
    </Card>
  </StyledCard>
);

export default Product;
