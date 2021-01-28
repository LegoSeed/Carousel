import React, { useState } from 'react';
import { Toast, Row } from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';

const BagBanner = () => {
  const [show, setShow] = useState(true);

  return (
    <Row class="w-100">
      <Toast
        style={{
          backgroundColor: 'rgb(254, 245, 210)',
          maxWidth: '100%',
          textAlign: 'center',
          borderColor: 'rgb(253, 128, 36)',
        }}
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        autohide
      >
        <Toast.Body>
          <img
            style={{
              width: '30px',
              height: '30px',
              marginRight: '10px',
            }}
            src="https://chuck3774bucket.s3.us-east-2.amazonaws.com/my-bag-1b4db93315c58eb756ee905026c3c030.png"
            alt="LegoBag"
          />

          ADDED TO BAG

        </Toast.Body>
      </Toast>

    </Row>

  );
};

export default BagBanner;
