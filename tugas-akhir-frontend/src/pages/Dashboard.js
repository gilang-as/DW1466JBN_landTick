import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Container, Row, Col, Table } from "react-bootstrap";

import { actionCheckAuth } from "../_actions/Auth";

class Dashboard extends Component {
  componentDidMount() {
    this.props.actionCheckAuth();
  }
  render() {
    // const { authStatus, authentication } = this.props.auth;
    // console.log("AUTH : ", authStatus, " - ", authentication);
    return (
      <>
        <div
          style={{
            background: "#c1c1c1",
            width: "100vw",
            paddingBottom: "3rem"
          }}
        >
          <Container>
            <Row>
              <Col>
                <div className="textLanding">
                  <h3>Selamat Pagi, Pemburu Tiket</h3>
                  <p>Siap untuk mencari tiket murah?</p>
                </div>
              </Col>
              <Col>
                <div
                  className="App-img"
                  style={{ marginTop: "10px", marginBottom: "10px" }}
                >
                  <img
                    variant="top"
                    alt="ghgh"
                    src="https://cdn2.tstatic.net/style/foto/bank/images/promo-kai_20181014_114809.jpg"
                    height="200px"
                  ></img>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="Box-Form">
          <Row>
            <Col className="col-lg-2 text-center mt-5">
              {/* <h4>Tiket Kereta Api</h4> */}
            </Col>
            <Col>
              <Form>
                <Row>
                  <Col>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Asal</Form.Label>
                      <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="col-sm-2">
                    <Button className="mt-4 ml-4">Switch</Button>
                  </Col>
                  <Col>
                    <Form.Group controlId="exampleForm.ControlSelect2">
                      <Form.Label>Tujuan</Form.Label>
                      <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Tanggal Berangkat</Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Pulang Pergi" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="exampleForm.ControlSelect3">
                      <Form.Label>Dewasa</Form.Label>
                      <Form.Control as="select">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Bayi</Form.Label>
                      <Form.Control as="select">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Button className="mt-4 btn-lg">Cari Tiket</Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </div>
        <div className="ListKereta">
          <Table hover>
            <thead>
              <tr>
                <th>Nama Kereta</th>
                <th>Berangkat</th>
                <th>Tiba</th>
                <th>Harga Per Orang</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Argo Bromo Anggrek</td>
                <td>10:00</td>
                <td>19:00</td>
                <td>750000</td>
                <td>
                  <Button>Beli</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return { auth: state.auth };
};

function mapDispatchToProps(dispatch) {
  return { actionCheckAuth: () => dispatch(actionCheckAuth()) };
}

const Dashpage = connect(mapStateToProps, mapDispatchToProps)(Dashboard);

export default Dashpage;
