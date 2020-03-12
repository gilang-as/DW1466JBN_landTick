import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Table,
  Button,
  Image
} from "react-bootstrap";

class Invoice extends Component {
  render() {
    return (
      <Container className="main-container">
        <div>
          <h1>My Tickets</h1>
        </div>
        <Row>
          <Col md lg="8">
            <Card>
              <Card.Body>
                <Card.Title>Attention!</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="text-center">
              <Table>
                <thead>
                  <tr>
                    <td>KTP</td>
                    <td>Passenger</td>
                    <td>Phone</td>
                    <td>Mail</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>908908098098</td>
                    <td>gil</td>
                    <td>085656565</td>
                    <td>joko@mail.com</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
            <Row>
              <Col md lg="6">
                <Card className="text-center">
                  <Card.Body>
                    <Row>
                      <Col md lg="7">
                        Argo Wilis (Dewasa) 1x
                      </Col>
                      <Col md lg="5">
                        Rp 200.000
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer className="text-muted">
                    <Row>
                      <Col md lg="7">
                        <b>Total</b>
                      </Col>
                      <Col md lg="5">
                        Rp 200.000
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card>
                <Button block>Pay Now</Button>
              </Col>
              <Col md lg="6">
                <Image
                  src="https://khsblogdotnet.files.wordpress.com/2018/07/waspada-struk-transfer-atm-editan-brosis.jpg?w=458"
                  thumbnail
                />
              </Col>
            </Row>
          </Col>
          <Col md lg="4">
            <Card className="text-center">
              <Card.Header>
                <Row>
                  <Col md lg="8">
                    <p>
                      <h2>Train</h2>
                    </p>
                    <p>
                      <small>
                        {" "}
                        <b>Saturday</b>, 20 January 2020
                      </small>
                    </p>
                    <Badge variant="danger">Pending</Badge>
                  </Col>
                  <Col md lg="4">
                    <Image
                      src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"
                      thumbnail
                    ></Image>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <b>Argo WIlis</b>
                  <p>
                    <small>Eksekutif (H)</small>
                  </p>
                </Card.Text>
                <Card.Title>
                  <Row>
                    <Col md lg="6">
                      <b>05:00</b>
                      <p>
                        <small>20 January 2020</small>
                      </p>
                    </Col>
                    <Col md lg="6">
                      <b>Jakarta (GBR)</b>
                      <p>
                        <small>Station Gambir</small>
                      </p>
                    </Col>

                    <Col md lg="6">
                      <b>05:00</b>
                      <p>
                        <small>20 January 2020</small>
                      </p>
                    </Col>
                    <Col md lg="6">
                      <b>Jakarta (GBR)</b>
                      <p>
                        <small>Station Gambir</small>
                      </p>
                    </Col>
                  </Row>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Invoice;
