import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarApp from "./pages/items/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App-body-landing">
        <NavbarApp />
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

export default App;
