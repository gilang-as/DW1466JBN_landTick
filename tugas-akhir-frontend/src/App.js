import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/_items/navbar";
import Dashboard from "./components/pages/dashboard";
class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Router>
          <Switch>
            <Route path="/about">
              <h1>about</h1>
            </Route>
            <Route path="/users">
              <h1>Halo</h1>
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
