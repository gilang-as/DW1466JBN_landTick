import React, { Component } from "react";
import { Container, Card, Row, Col, Alert } from "react-bootstrap";

class AdminDashboard extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col md lg="12">
            <Container className="text-center">
              <Alert variant="success">
                <Alert.Heading>
                  Welcome <i>"Admin"</i> to Dashboard!
                </Alert.Heading>
                <p>
                  You can anymore in dashboard,
                  <br />
                  Add, Delete, Update and read data. <br />
                </p>
              </Alert>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AdminDashboard;
