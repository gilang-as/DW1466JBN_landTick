import React, { Component } from "react";

import { Button, Modal } from "react-bootstrap";

class ModalNotifSignin extends Component {
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

  render() {
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
            <h1>Login Dulu</h1>
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

export default ModalNotifSignin;
