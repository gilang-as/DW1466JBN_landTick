import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarApp from "./pages/items/Navbar";

import { actionCheckAuth } from "./_actions/Auth";
import { actionGetUser } from "./_actions/User";

class Index extends Component {
  componentDidMount() {
    this.props.actionCheckAuth();
    this.props.actionGetUser();
  }
  render() {
    const { authStatus, authentication } = this.props.auth;
    const status = authStatus || authentication;
    const userdetail = this.props.user.data.data;
    // console.log(userdetail);
    return (
      <div className="App-body-landing">
        <NavbarApp status={status} data="joko" />
        <Router>
          <Switch>
            <Route path="/users">
              <h1>Bacod</h1>
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.auth, user: state.user };
};

function mapDispatchToProps(dispatch) {
  return {
    actionCheckAuth: () => dispatch(actionCheckAuth()),
    actionGetUser: () => dispatch(actionGetUser())
  };
}

const App = connect(mapStateToProps, mapDispatchToProps)(Index);

export default App;
