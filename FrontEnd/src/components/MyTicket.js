import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { actionGetMyTickets } from "../_actions/Ticket";

import MyTicketSegment from "./items/MyTicketSegment";

class MyTicket extends Component {
  componentDidMount() {
    this.props.actionGetMyTickets();
  }
  render() {
    const { data: my_tickets, status } = this.props.ticket.my_tickets;
    return (
      <Container className="main-container">
        <div>
          <h1>My Tickets</h1>
        </div>
        <Row>
          <Col md lg="12">
            {this.props.ticket.my_tickets.data ? (
              <Container>
                <Row>
                  {my_tickets.map(function(value, index) {
                    return <MyTicketSegment key={index} data={value} />;
                  })}
                </Row>
              </Container>
            ) : (
              <>LOADING</>
            )}
          </Col>
          {/* <Col md lg="12">
                  <Card>
                    <div className="ticket-frame">
                      <Row>
                        <Col md lg="8">
                          <Row>
                            <Col md lg="3">
                              <p>
                                <h3>Argo Wilis</h3>
                              </p>
                              <p>
                                <h6>Eksekutif (P)</h6>
                              </p>
                              <p>
                                <Badge variant="success">Approve</Badge>
                              </p>
                            </Col>
                            <Col md lg="3">
                              <p>
                                <h3>Argo Wilis</h3>
                              </p>
                              <p>
                                <h6>Eksekutif (P)</h6>
                              </p>
                              <p>
                                <h3>Argo Wilis</h3>
                              </p>
                              <p>
                                <h6>Eksekutif (P)</h6>
                              </p>
                            </Col>
                            <Col md lg="6 ">
                              <p>
                                <h3>Argo Wilis</h3>
                              </p>
                              <p>
                                <h6>Eksekutif (P)</h6>
                              </p>
                              <p>
                                <h3>Argo Wilis</h3>
                              </p>
                              <p>
                                <h6>Eksekutif (P)</h6>
                              </p>
                            </Col>
                          </Row>
                        </Col>
                        <Col md lg="4" className="myticket-title">
                          <h3>Train</h3>
                          <small>
                            <b>Saturday, February 21 2020</b>
                          </small>
                          <p>
                            <Image
                              className="barcode-myticket"
                              src="https://miro.medium.com/max/1424/1*sHmqYIYMV_C3TUhucHrT4w.png"
                              thumbnail
                            />
                          </p>
                        </Col>
                        <Col md lg="12">
                          <Row>
                            <Col md lg="10">
                              <Table responsive="sm">
                                <thead>
                                  <tr>
                                    <th>No Identity</th>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>21331981389</td>
                                    <td>Joko</td>
                                    <td>085777899</td>
                                    <td>joko@email.com</td>
                                  </tr>
                                </tbody>
                              </Table>
                            </Col>

                            <Col md lg="2">
                              <Button
                                className="btn-block"
                                variant="secondary"
                                disabled
                              >
                                Paid
                              </Button>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </Card>
                </Col>*/}
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return { ticket: state.ticket };
};

function mapDispatchToProps(dispatch) {
  return {
    actionGetMyTickets: () => dispatch(actionGetMyTickets())
  };
}

const Ticket = connect(mapStateToProps, mapDispatchToProps)(MyTicket);

export default Ticket;
