import React, { Component } from "react";
import { connect } from "react-redux";
import { Navbar, Nav, Button, Dropdown } from "react-bootstrap";
import ModalLogin from "./LoginForm";
// import { actionLogout } from "../../_actions/Auth";
import { actionGetUser } from "../../_actions/User";

class Navigate extends Component {
  documentData;
  constructor(props) {
    super(props);

    this.LogOut = this.LogOut.bind(this);
  }
  componentDidMount() {
    // this.props.actionCheckAuth();
    this.props.actionGetUser();
  }
  LogOut() {
    console.log("keluar lah");
    // this.props.actionLogout();
  }
  render() {
    console.log(this.props.user.data.data);
    return (
      <Navbar bg="light" expand="lg">
        <h3 style={{ color: "#3498db" }}>MyTick</h3>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <div>
            {this.props.status ? (
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {this.props.data}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/">My Tciket</Dropdown.Item>
                  <Dropdown.Item href="/">Profile</Dropdown.Item>
                  <Dropdown.Item onClick={this.LogOut}>Sign Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <>
                <ModalLogin />
                <Button variant="primary">Register</Button>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

function mapDispatchToProps(dispatch) {
  return {
    actionGetUser: () => dispatch(actionGetUser())
  };
}

const Navb = connect(mapStateToProps, mapDispatchToProps)(Navigate);

export default Navb;
