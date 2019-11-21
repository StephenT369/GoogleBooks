import React from "react";
import { Col, Row, Container } from "../components/Grid";
function Error() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
            <h1 className="text-center">Error: 404 Page Not Found</h1>
        </Col>
      </Row>
    </Container>
  );
}
export default Error;