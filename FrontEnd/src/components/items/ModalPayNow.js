import React, { Component } from "react";
import { connect } from "react-redux";

import axios from "axios";

// import { actionCheckAuth } from "../../_actions/Auth";

import {
  Button,
  Modal,
  Badge,
  Card,
  Row,
  Col,
  Table,
  Image
} from "react-bootstrap";

class SearchModal extends Component {
  componentDidMount = () => {
    // this.props.actionCheckAuth();
  };
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      login: false
    };
  }

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

  handleChange = e => {
    this.setState({
      selectedFile: e.target.files[0]
    });
    console.log(e.target.files[0]);
  };

  onClickHandler = () => {
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    const id = this.props.data;
    axios
      .post(`http://localhost:5000/api/v1/payment-upload/${id}`, data, {
        headers: { "Content-Type": "multipart/form-data" }
      })
      .then(res => {
        // then print response status
        console.log(res.statusText);
      });
  };

  render() {
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
            {/* <Form>
              <div className="form-group files">
                <label>Upload Your File </label>
                <input
                  type="file"
                  className="form-control"
                  onChange={this.handleChange}
                />
              </div>
              {false ? (
                <Button className="btn btn-primary btn-block" disabled>
                  <Spinner animation="border" size="sm" variant="light" />
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={this.onClickHandler}
                  className="btn btn-primary btn-block"
                >
                  Send
                </Button>
              )}
            </Form> */}
            <Row>
              <Col md lg="8">
                <Card>
                  <Card.Body>
                    <Card.Title>Attention!</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to
                      additional content.
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
                    <Button
                      type="button"
                      onClick={this.onClickHandler}
                      className="btn btn-primary btn-block"
                    >
                      Pay
                    </Button>
                  </Col>
                  <Col md lg="6">
                    <div className="form-group files">
                      <input
                        type="file"
                        className="form-control"
                        onChange={this.handleChange}
                      />
                    </div>
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
          </Modal.Body>
          <Button id="btn-false" variant="secondary" onClick={this.loginClose}>
            {" "}
            Close{" "}
          </Button>
        </Modal>
        <Button className="btn btn-primary btn-block" onClick={this.loginShow}>
          Pay Now
        </Button>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    // auth: state.auth
  };
};

function mapDispatchToProps(dispatch) {
  return {
    // actionLogin: data => dispatch(actionLogin(data)),
    // actionCheckAuth: () => dispatch(actionCheckAuth())
  };
}

const FormSearchModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchModal);

export default FormSearchModal;
