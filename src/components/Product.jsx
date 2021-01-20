/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

const Product = (props) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.item.imageUrl} />
    <Card.Body>
      <Card.Title>{props.item.name}</Card.Title>
      <Card.Text>
        <StarRatingComponent
          editing={false}
          emptyStarColor="grey"
          value={props.item.reviewScore / 20}
        />
      </Card.Text>
      <Card.Text>
        $
        {props.item.price}
        .99
      </Card.Text>
      <Button variant="primary">Add to Bag</Button>
    </Card.Body>
  </Card>

);

export default Product;
