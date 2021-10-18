import React, { useState } from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

const Display = (props) => {
  return (
    <Row>
      <Col sm="6">
        <Card body>
          <CardTitle tag="h5">Tweet</CardTitle>
          <CardText>{props.value}</CardText>
          <Button color="primary">See on Twitter</Button>
        </Card>
      </Col>
    </Row>
  );
};
export default Display;
