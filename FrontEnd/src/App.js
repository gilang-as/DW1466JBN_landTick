import React, { Component } from "react";
import { connect } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./_assets/css/main.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams
} from "react-router-dom";
import { Container, Nav, Col, Row } from "react-bootstrap";

import { actionMyProfile } from "./_actions/Profile";
import { actionCheckAuth } from "./_actions/Auth";

import Navbar from "./components/items/Navbar";
import Footer from "./components/items/Footer";
import Dashboard from "./components/Dashboard";

import MyTicket from "./components/MyTicket";
import Invoice from "./components/Invoice";
import AdminDashboard from "./components/_subAdminPage/AdminDashboard";
import AdminOrdersList from "./components/_subAdminPage/AdminOrdersList";
import AdminStationsList from "./components/_subAdminPage/AdminStationsList";
import AdminStationAdd from "./components/_subAdminPage/AdminStationAdd";
import AdminTrainsList from "./components/_subAdminPage/AdminTrainsList";
import AdminTrainAdd from "./components/_subAdminPage/AdminTrainAdd";
import AdminRoutesList from "./components/_subAdminPage/AdminRoutesList";
import AdminRouteAdd from "./components/_subAdminPage/AdminRouteAdd";
import AdminUsersList from "./components/_subAdminPage/AdminUsersList";

class Index extends Component {
  componentDidMount = async () => {
    await this.props.actionCheckAuth();
    if (this.props.auth.authStatus) {
      await this.props.actionMyProfile();
    }
    // console.log(this.props.auth.authStatus);
  };
  render() {
    const auth = this.props.auth.authStatus;
    return (
      <Router>
        <Navbar auth={auth} profile={this.props.profile.myprofile.myprofile} />
        <Switch>
          <Route path="/admin">
            <Container className="main-container">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column admin-sidenav">
                    <Link to="/admin">
                      <Nav.Item className="admin-sidenav-item">
                        <div className="admin-nav-txt">Dashboard</div>
                      </Nav.Item>
                    </Link>
                    <Link to="/admin/orders">
                      <Nav.Item className="admin-sidenav-item">
                        <div className="admin-nav-txt">Orders</div>
                      </Nav.Item>
                    </Link>
                    <Link to="/admin/stations">
                      <Nav.Item className="admin-sidenav-item">
                        <div className="admin-nav-txt">Sations</div>
                      </Nav.Item>
                    </Link>
                    <Link to="/admin/trains">
                      <Nav.Item className="admin-sidenav-item">
                        <div className="admin-nav-txt">Trains</div>
                      </Nav.Item>
                    </Link>
                    <Link to="/admin/routes">
                      <Nav.Item className="admin-sidenav-item">
                        <div className="admin-nav-txt">Routers</div>
                      </Nav.Item>
                    </Link>
                    <Link to="/admin/users">
                      <Nav.Item className="admin-sidenav-item">
                        <div className="admin-nav-txt">Users</div>
                      </Nav.Item>
                    </Link>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Switch>
                    <Route path="/admin/users">
                      {/* {auth ? <AdminUsersList /> : <Redirect to="/" />} */}
                      <AdminUsersList />
                    </Route>
                    <Route path="/admin/route-add">
                      {/* {auth ? <AdminRouteAdd /> : <Redirect to="/" />} */}
                      <AdminRouteAdd />
                    </Route>
                    <Route path="/admin/routes">
                      {/* {auth ? <AdminRoutesList /> : <Redirect to="/" />} */}
                      <AdminRoutesList />
                    </Route>
                    <Route path="/admin/train-add">
                      {/* {auth ? <AdminTrainAdd /> : <Redirect to="/" />} */}
                      <AdminTrainAdd />
                    </Route>
                    <Route path="/admin/trains">
                      {/* {auth ? <AdminTrainsList /> : <Redirect to="/" />} */}
                      <AdminTrainsList />
                    </Route>
                    <Route path="/admin/station-add">
                      {/* {auth ? <AdminStationAdd /> : <Redirect to="/" />} */}
                      <AdminStationAdd />
                    </Route>
                    <Route path="/admin/stations">
                      {/* {auth ? <AdminStationsList /> : <Redirect to="/" />} */}
                      <AdminStationsList />
                    </Route>
                    <Route path="/admin/orders">
                      {/* {auth ? <AdminOrdersList /> : <Redirect to="/" />} */}
                      <AdminOrdersList />
                    </Route>
                    <Route path="/admin">
                      {/* {auth ? <AdminDashboard /> : <Redirect to="/" />} */}
                      <AdminDashboard />
                    </Route>
                  </Switch>
                </Col>
              </Row>
            </Container>
            {/* <Admin /> */}
          </Route>
          {/* <Route path="/invoice/:id">
            {auth ? <InvoicePage /> : <Redirect to="/" />}
          </Route> */}
          <Route path="/my-tickets">
            {auth ? <MyTicket /> : <Redirect to="/" />}
          </Route>
          <Route path="/profile">
            <h3>Profile</h3>
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return { profile: state.profile, auth: state.auth };
};

function mapDispatchToProps(dispatch) {
  return {
    actionMyProfile: () => dispatch(actionMyProfile()),
    actionCheckAuth: () => dispatch(actionCheckAuth())
  };
}

const App = connect(mapStateToProps, mapDispatchToProps)(Index);

export default App;
