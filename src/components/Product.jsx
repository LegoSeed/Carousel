/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import React from 'react';
import { Card } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import '../style.css';

const Product = (props) => (

  <div style={{ padding: '0 0 20px 0' }}>

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
        <div className="wrapper">
          <Card.Title>{props.item.name}</Card.Title>
        </div>
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
        <button className="styled-button" type="button" variant="primary" onClick={() => (props.Clicked())}>Add to Bag</button>
      </Card.Body>
    </Card>
  </div>
);

export default Product;
