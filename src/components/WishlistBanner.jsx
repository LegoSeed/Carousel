import React, { useState } from 'react';
import { Toast } from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  `;

const WishlistBanner = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <Toast
        style={{
          backgroundColor: 'rgb(254, 245, 210)',
          maxWidth: '1300px',
          textAlign: 'center',
          borderColor: 'rgb(253, 128, 36)',
        }}
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        autohide
      >
        <Toast.Body>
          <StyledImage src="https://chuck3774bucket.s3.us-east-2.amazonaws.com/wishlist-2b84a8649efbd1ac3f97049b4a287c26.svg" alt="Heart" />

          ADDED TO WISHLIST

        </Toast.Body>
      </Toast>

    </div>

  );
};

export default WishlistBanner;
