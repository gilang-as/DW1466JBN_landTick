import React, { Component } from "react";
import { connect } from "react-redux";

import { actionCheckAuth, actionLogin } from "../../_actions/Auth";
import { actionMyProfile } from "../../_actions/Profile";

import { Button, Modal, Form, Alert, Spinner } from "react-bootstrap";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
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

  // on form submit...
  handleFormSubmit = async e => {
    e.preventDefault();
    await this.props.actionLogin(this.state);
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
            <h2>Sign In</h2>
          </Modal.Title>
          <Modal.Body>
            {message ? (
              <Alert variant={message_status}>{message}</Alert>
            ) : (
              <></>
            )}

            <Form onSubmit={this.handleFormSubmit}>
              <Form.Group className="form-group">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
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
                  required
                />
              </Form.Group>
              {loading ? (
                <Button className="btn btn-primary btn-block" disabled>
                  <Spinner animation="border" size="sm" variant="light" />
                </Button>
              ) : (
                <Button type="submit" className="btn btn-primary btn-block">
                  Sign In
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
          Sign In
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
    actionLogin: data => dispatch(actionLogin(data)),
    actionCheckAuth: () => dispatch(actionCheckAuth()),
    actionMyProfile: () => dispatch(actionMyProfile())
  };
}

const LoginModal = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default LoginModal;
