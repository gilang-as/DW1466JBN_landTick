import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Modal, Form } from "react-bootstrap";
import { actionLogin } from "../../_actions/Auth";
import { BrowserRouter as Redirect } from "react-router-dom";

class LoginModal extends Component {
  documentData;
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      login: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.loginClose = this.loginClose.bind(this);
    this.loginShow = this.loginShow.bind(this);
  }

  loginClose() {
    this.setState({
      login: false
    });
  }

  loginShow() {
    this.setState({
      login: true
    });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // on form submit...
  handleFormSubmit = e => {
    e.preventDefault();
    this.props.actionLogin(this.state);
  };

  render() {
    const { loading, authentication } = this.props.auth;
    return authentication ? (
      <>
        <Redirect to={{ pathname: "/dashboard" }} />
      </>
    ) : (
      <>
        <Modal
          show={this.state.login}
          onHide={this.loginClose}
          animation={false}
        >
          <Modal.Title id="txt-form">
            {loading ? <h2>Loading</h2> : <h2>Login</h2>}
          </Modal.Title>
          <Modal.Body>
            <Form onSubmit={this.handleFormSubmit}>
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
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  className="form-control"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button type="submit" className="btn btn-primary btn-block">
                Login
              </Button>
            </Form>
          </Modal.Body>
          <Button id="btn-false" variant="secondary" onClick={this.loginClose}>
            {" "}
            Close{" "}
          </Button>
        </Modal>
        <Button onClick={this.loginShow} variant="primary mr-3">
          Login
        </Button>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    user: state.user
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actionLogin: data => dispatch(actionLogin(data))
  };
}

const LoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginModal);

export default LoginForm;
