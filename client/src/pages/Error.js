import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
function Error() {
  return (
    <Container fluid>
      <Row>
        <Jumbotron>
        <Col size="md-12">
            <h1 className="text-center">Error: 404 Page Not Found</h1>
        </Col>
        </Jumbotron></Row>
    </Container>
  );
}
export default Error;