import React, { Component } from "react";
import { connect } from "react-redux";

// import { actionCheckAuth } from "../../_actions/Auth";
import { actionBuyTicket } from "../../_actions/Ticket";
import { Button, Modal, Form, Spinner, Row, Col } from "react-bootstrap";

class SearchModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_ticket: 0,
      login: false,
      total: 0,
      adults: [],
      childs: []
    };
  }

  componentDidMount = () => {
    // this.props.actionCheckAuth();
    // console.log(this.state.adult);
    let tot_adult = this.props.adult;
    const tot_child = this.props.child;
    this.setState({ total: tot_adult });
    for (let i = 0; i < tot_adult; i++)
      this.setState(prevState => ({
        id_ticket: this.props.id_ticket,
        date_start: this.props.date_start,
        adults: [...prevState.adults, { name: "", category: "", identity: "" }]
      }));
    for (let j = 0; j < tot_child; j++)
      this.setState(prevState => ({
        childs: [...prevState.childs, { name: "", category: "", identity: "" }]
      }));
  };

  loginClose = () => {
    this.setState({
      login: false
    });
  };

  loginShow = () => {
    this.setState({
      login: true
    });
  };

  handleChangeAdult = e => {
    let adults = [...this.state.adults];
    adults[e.target.id][e.target.name] = e.target.value;
    this.setState({ adults });
  };
  handleChangeChild = e => {
    let childs = [...this.state.childs];
    childs[e.target.id][e.target.name] = e.target.value;
    this.setState({ childs });
  };

  cobaLihat = async () => {
    await this.props.actionBuyTicket(this.state);
    if (this.props.ticket.buy_ticket.status) {
      this.loginClose();
    }
  };
  // on form submit...
  handleFormSubmit = async e => {
    e.preventDefault();
    // await this.props.actionLogin(this.state);
  };

  render() {
    const items_adults = [];
    const items_childs = [];
    let tot_adult = this.props.adult;
    const tot_child = this.props.child;
    for (let a = 0; a < tot_adult; a++) {
      items_adults.push(
        <Form.Group key={a}>
          <Form.Label>Adult</Form.Label>
          <Row>
            <Col md lg="4">
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  id={`${a}`}
                  type="text"
                  className="name"
                  name="name"
                  onChange={this.handleChangeAdult}
                  required
                />
              </Form.Group>
            </Col>
            <Col md lg="4">
              <Form.Group>
                <Form.Label>ID Type</Form.Label>
                <Form.Control
                  id={`${a}`}
                  type="text"
                  as="select"
                  name="category"
                  className="category"
                  onChange={this.handleChangeAdult}
                  defaultValue="KTP"
                  required
                >
                  <option value="KTP">KTP</option>
                  <option value="PASSPORT">PASSPORT</option>
                  <option value="SIM">SIM</option>
                  <option value="OTHER">OTHER</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md lg="4">
              <Form.Group>
                <Form.Label>ID Type</Form.Label>
                <Form.Control
                  id={`${a}`}
                  type="text"
                  // name={`adultId-${a}`}
                  name="identity"
                  className="identity"
                  onChange={this.handleChangeAdult}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
        </Form.Group>
      );
    }

    for (let b = 0; b < tot_child; b++) {
      items_childs.push(
        <Form.Group key={b}>
          <Form.Label>Child</Form.Label>
          <Row>
            <Col md lg="4">
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  id={`${b}`}
                  type="text"
                  className="name"
                  name="name"
                  onChange={this.handleChangeChild}
                  required
                />
              </Form.Group>
            </Col>
            <Col md lg="4">
              <Form.Group>
                <Form.Label>ID Type</Form.Label>
                <Form.Control
                  id={`${b}`}
                  type="text"
                  as="select"
                  name="category"
                  className="category"
                  onChange={this.handleChangeChild}
                  defaultValue="PASSPORT"
                  required
                >
                  <option value="PASSPORT">PASSPORT</option>
                  <option value="OTHER">OTHER</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md lg="4">
              <Form.Group>
                <Form.Label>ID Type</Form.Label>
                <Form.Control
                  id={`${b}`}
                  type="text"
                  // name={`adultId-${a}`}
                  name="identity"
                  className="identity"
                  onChange={this.handleChangeChild}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
        </Form.Group>
      );
    }

    const {
      train_name,
      train_category,
      start_time,
      station_start,
      arrived,
      station_destination
    } = this.props.data_ticket;
    // console.log(this.props.ticket);
    // const { loading, message, message_status } = this.props.auth;
    return (
      <>
        <Modal
          show={this.state.login}
          onHide={this.loginClose}
          animation={false}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            {/* {message ? (
              <Alert variant={message_status}>{message}</Alert>
            ) : (
              <></>
            )} */}
            <Row>
              <Col md lg="4">
                <h1>{train_name}</h1>
                <br />
                {train_category}
              </Col>
              <Col md lg="4">
                <h1>{start_time}</h1>
                <br />
                {station_start}
              </Col>
              <Col md lg="4">
                <h1>{arrived}</h1>
                <br />
                {station_destination}
              </Col>
            </Row>
            <Form onSubmit={this.handleFormSubmit}>
              {items_adults}
              {items_childs}
              {false ? (
                <Button className="btn btn-primary btn-block" disabled>
                  <Spinner animation="border" size="sm" variant="light" />
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={this.cobaLihat}
                  className="btn btn-primary btn-block"
                >
                  Send
                </Button>
              )}
            </Form>
          </Modal.Body>
          <Button id="btn-false" variant="secondary" onClick={this.loginClose}>
            {" "}
            Close{" "}
          </Button>
        </Modal>
        <Button className="btn btn-primary btn-block" onClick={this.loginShow}>
          Choice
        </Button>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    ticket: state.ticket
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actionBuyTicket: data => dispatch(actionBuyTicket(data))
    // actionCheckAuth: () => dispatch(actionCheckAuth())
  };
}

const FormSearchModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchModal);

export default FormSearchModal;
