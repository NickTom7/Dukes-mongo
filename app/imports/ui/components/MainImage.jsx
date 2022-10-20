import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';

const MainImage = () => (
  <Row className="justify-content-md-center">
    <Col md="auto">
      <Image fluid src="/images/dukebackground.png" />
    </Col>
  </Row>
);

export default MainImage;
