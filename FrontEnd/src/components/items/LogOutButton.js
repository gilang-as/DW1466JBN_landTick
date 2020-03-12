import React, { Component } from "react";
import { connect } from "react-redux";

import { actionLogout, actionCheckAuth } from "../../_actions/Auth";

import { Button } from "react-bootstrap";

class LogOut extends Component {
  LogOutSubmit = () => {
    console.log("Selamat");
    this.props.actionLogout();
    this.props.actionCheckAuth();
  };

  render() {
    return (
      <Button onClick={this.LogOutSubmit} className="dropdown-item">
        Sign Out
      </Button>
    );
  }
}

const mapStateToProps = state => {
  return {
    // profile: state.profile
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actionLogout: () => dispatch(actionLogout()),
    actionCheckAuth: () => dispatch(actionCheckAuth())
  };
}

const LogOutButton = connect(mapStateToProps, mapDispatchToProps)(LogOut);

export default LogOutButton;
