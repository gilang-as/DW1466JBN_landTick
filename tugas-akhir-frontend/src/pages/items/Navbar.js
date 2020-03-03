import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import ModalLogin from "./LoginForm";
class Dashboard extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <h3 style={{ color: "#3498db" }}>DO-Line</h3>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <div inline>
            <ModalLogin />
            <Button variant="primary">Register</Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Dashboard;
