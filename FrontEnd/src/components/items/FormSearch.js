import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Row,
  Col,
  Card,
  Tab,
  Nav,
  Form,
  Button
} from "react-bootstrap";
// import moment from "moment";
import { FaExchangeAlt } from "react-icons/fa";
import SearchTable from "./SearchTable";
import { actionGetStations } from "../../_actions/Station";
import { actionSearchTickets } from "../../_actions/Ticket";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      starting_point: "1",
      destination: "4",
      date_start: "",
      date_back: "false",
      adult: "1",
      child: "0",
      status_return: false,
      table: false
    };
  }

  componentDidMount = () => {
    this.props.actionGetStations();
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  switchlah = () => {
    // console.log(this.state.starting_point, this.state.destination);
    this.setState({
      starting_point: this.state.destination,
      destination: this.state.starting_point
    });
  };

  handleFormSubmit = async e => {
    e.preventDefault();
    await this.props.actionSearchTickets(this.state);
    this.setState({
      table: true
    });
    // console.log(this.props.ticket);
  };

  render() {
    const { data: tickets } = this.props.ticket.data;
    const { data: stations } = this.props.station;
    console.log(this.props.auth);
    return (
      <>
        <Container className="home-form-container">
          <Card>
            <Card.Body>
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Train</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Form onSubmit={this.handleFormSubmit}>
                          <Row className="justify-content-md-center">
                            <Col md lg="12">
                              <Row className="justify-content-md-center">
                                <Col xs lg="5">
                                  <Form.Group>
                                    <Form.Label>
                                      <b>From</b>
                                    </Form.Label>
                                    <Form.Control
                                      as="select"
                                      name="starting_point"
                                      id="starting_point"
                                      value={this.state.starting_point}
                                      onChange={this.handleChange}
                                      required
                                    >
                                      {stations.map(function(value, index) {
                                        return (
                                          <option value={value.id} key={index}>
                                            {value.area} ({value.code}) -{" "}
                                            {value.name}
                                          </option>
                                        );
                                      })}
                                    </Form.Control>
                                  </Form.Group>
                                </Col>
                                <Col md lg="2">
                                  <Row className="justify-content-md-center switch-form">
                                    <Button onClick={this.switchlah}>
                                      <FaExchangeAlt />
                                    </Button>
                                  </Row>
                                </Col>
                                <Col xs lg="5">
                                  <Form.Group>
                                    <Form.Label>
                                      <b>To</b>
                                    </Form.Label>
                                    <Form.Control
                                      as="select"
                                      name="destination"
                                      id="destination"
                                      value={this.state.destination}
                                      onChange={this.handleChange}
                                      required
                                    >
                                      {stations.map(function(value, index) {
                                        return (
                                          <option value={value.id} key={index}>
                                            {value.area} ({value.code}) -{" "}
                                            {value.name}
                                          </option>
                                        );
                                      })}
                                    </Form.Control>
                                  </Form.Group>
                                </Col>
                              </Row>
                            </Col>
                            <Col md lg="12">
                              <Row className="justify-content-md-center">
                                <Col md lg="12">
                                  <Form.Check
                                    type="switch"
                                    id="status_return"
                                    label="Round Trip?"
                                    value={this.state.status_return}
                                    onChange={() =>
                                      this.setState({
                                        status_return: !this.state.status_return
                                      })
                                    }
                                  />
                                </Col>
                                <Col md lg="6">
                                  <Row>
                                    <Col md lg="6">
                                      <Form.Group>
                                        <Form.Label>Departure Date</Form.Label>
                                        <Form.Control
                                          type="date"
                                          placeholder="Date"
                                          name="date_start"
                                          id="date_start"
                                          onChange={this.handleChange}
                                          required
                                        />
                                      </Form.Group>
                                    </Col>
                                    {this.state.status_return ? (
                                      <Col md lg="6">
                                        <Form.Group>
                                          <Form.Label>Return Date</Form.Label>
                                          <Form.Control
                                            type="date"
                                            placeholder="Date"
                                            name="date_back"
                                            id="date_back"
                                            onChange={this.handleChange}
                                            required
                                          />
                                        </Form.Group>
                                      </Col>
                                    ) : (
                                      <Form.Control
                                        type="hidden"
                                        name="date_back"
                                        value="false"
                                      />
                                    )}
                                  </Row>
                                </Col>
                                <Col md lg="6">
                                  <Row>
                                    <Col md lg="4">
                                      <Form.Group>
                                        <Form.Label>Adult</Form.Label>
                                        <Form.Control
                                          as="select"
                                          name="adult"
                                          id="adult"
                                          value={this.state.adult}
                                          onChange={this.handleChange}
                                          required
                                        >
                                          <option value="1">1</option>
                                          <option value="2">2</option>
                                          <option value="3">3</option>
                                          <option value="4">4</option>
                                        </Form.Control>
                                      </Form.Group>
                                    </Col>
                                    <Col md lg="4">
                                      <Form.Group>
                                        <Form.Label>Child</Form.Label>
                                        <Form.Control
                                          as="select"
                                          name="child"
                                          id="child"
                                          value={this.state.child}
                                          onChange={this.handleChange}
                                          required
                                        >
                                          <option value="0">0</option>
                                          <option value="1">1</option>
                                          <option value="2">2</option>
                                          <option value="3">3</option>
                                          <option value="4">4</option>
                                        </Form.Control>
                                      </Form.Group>
                                    </Col>
                                    <Col md lg="4">
                                      <div className="btn-form-search">
                                        <Button type="submit">Search</Button>
                                      </div>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Form>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Card.Body>
          </Card>
        </Container>
        {this.state.table ? (
          <Container className="searching-home">
            <Card>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>
                      <Row>
                        <Col md lg="3">
                          <h4>Train Name</h4>
                        </Col>
                        <Col md lg="2">
                          <h4>Depart</h4>
                        </Col>
                        <Col md lg="2">
                          <h4>Arrive</h4>
                        </Col>
                        <Col md lg="2">
                          <h4>Seats</h4>
                        </Col>
                        <Col md lg="3">
                          <h4>Price</h4>
                        </Col>
                      </Row>
                    </th>
                  </tr>
                </thead>
                <SearchTable
                  tickets={tickets}
                  adult={this.state.adult}
                  child={this.state.child}
                  date_start={this.state.date_start}
                />
              </table>
            </Card>
          </Container>
        ) : (
          <></>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return { station: state.station, ticket: state.ticket, auth: state.auth };
};

function mapDispatchToProps(dispatch) {
  return {
    actionGetStations: () => dispatch(actionGetStations()),
    actionSearchTickets: data => dispatch(actionSearchTickets(data))
  };
}

const FormSearch = connect(mapStateToProps, mapDispatchToProps)(Search);

export default FormSearch;
