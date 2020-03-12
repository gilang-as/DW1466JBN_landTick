import React, { Component } from "react";
import { connect } from "react-redux";

import { actionCheckAuth, actionRegister } from "../../_actions/Auth";
import { actionMyProfile } from "../../_actions/Profile";

import { Button, Modal, Form, Alert, Spinner } from "react-bootstrap";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      email: "",
      password: "",
      gender: "Male",
      phone: "",
      address: "",
      login: false
    };
  }
  componentDidMount = () => {
    this.props.actionCheckAuth();
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

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = async e => {
    e.preventDefault();
    console.log(this.state);
    await this.props.actionRegister(this.state);
    if (this.props.auth.authentication) {
      this.loginClose();
      await this.props.actionCheckAuth();
      await this.props.actionMyProfile();
    }
  };

  render() {
    const { loading, message, message_status } = this.props.auth;
    return (
      <>
        <Modal
          show={this.state.login}
          onHide={this.loginClose}
          animation={false}
        >
          <Modal.Title id="txt-form" className="modal-title">
            <h2>Sign Up</h2>
          </Modal.Title>
          <Modal.Body>
            {message ? (
              <Alert variant={message_status}>{message}</Alert>
            ) : (
              <></>
            )}
            <Form onSubmit={this.handleFormSubmit}>
              <Form.Group className="form-group">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  className="form-control"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  className="form-control"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
                  name="password"
                  className="form-control"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  as="select"
                  name="gender"
                  className="form-control"
                  value={this.state.gender}
                  onChange={this.handleChange}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  className="form-control"
                  value={this.state.phone}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  className="form-control"
                  value={this.state.address}
                  onChange={this.handleChange}
                />
              </Form.Group>
              {loading ? (
                <Button className="btn btn-primary btn-block" disabled>
                  <Spinner animation="border" size="sm" variant="light" />
                </Button>
              ) : (
                <Button type="submit" className="btn btn-primary btn-block">
                  Sign Up
                </Button>
              )}
            </Form>
          </Modal.Body>
          <Button id="btn-false" variant="secondary" onClick={this.loginClose}>
            {" "}
            Close{" "}
          </Button>
        </Modal>
        <Button id="btn-nav" onClick={this.loginShow}>
          Sign Up
        </Button>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth,
    profile: state.profile
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actionRegister: data => dispatch(actionRegister(data)),
    actionCheckAuth: () => dispatch(actionCheckAuth()),
    actionMyProfile: () => dispatch(actionMyProfile())
  };
}

const RegisterModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm);
export default RegisterModal;
