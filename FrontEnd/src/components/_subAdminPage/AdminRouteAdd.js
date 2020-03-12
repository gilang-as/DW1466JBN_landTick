import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { BrowserRouter as Switch, Link, Redirect } from "react-router-dom";

import { actionAddRoute } from "../../_actions/Route";
import { actionGetStations } from "../../_actions/Station";
import { actionGetTrains } from "../../_actions/Train";

class RouteAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      train_id: 1,
      price: "",
      starting_point: 1,
      destination: 2,
      start_time: "",
      arrived: ""
    };
  }
  componentDidMount = () => {
    this.props.actionGetStations();
    this.props.actionGetTrains();
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = async e => {
    e.preventDefault();
    // console.log(this.state);
    await this.props.actionAddRoute(this.state);
    // console.log(this.props.route);

    // await this.props.actionLogin(this.state);
  };

  render() {
    const { data: stations } = this.props.station;
    const { data: trains } = this.props.train;
    const { status } = this.props.route.add_route;
    // console.log(this.state.route);
    return status ? (
      <Redirect to="/admin/routes" />
    ) : (
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-5">
              <h2>
                Route <b>Add</b>
              </h2>
            </div>
            <div className="col-sm-7">
              <Switch></Switch>
              <Link to="/admin/routes" className="btn btn-primary">
                <span>Back</span>
              </Link>
            </div>
          </div>
        </div>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Group>
            <Form.Label>Train</Form.Label>
            <Form.Control
              as="select"
              name="train_id"
              id="train_id"
              onChange={this.handleChange}
              value={this.state.train_id}
              required
            >
              {trains.map(function(value, index) {
                return (
                  <option value={value.id} key={index}>
                    {value.name} - {value.category} ({value.seats})
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              id="price"
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Start Point</Form.Label>
            <Form.Control
              as="select"
              name="starting_point"
              id="starting_point"
              onChange={this.handleChange}
              value={this.state.starting_point}
              required
            >
              {stations.map(function(value, index) {
                return (
                  <option value={value.id} key={index}>
                    {value.area} ({value.code}) - {value.name}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Destination</Form.Label>
            <Form.Control
              as="select"
              name="destination"
              id="destination"
              onChange={this.handleChange}
              value={this.state.destination}
              required
            >
              {stations.map(function(value, index) {
                return (
                  <option value={value.id} key={index}>
                    {value.area} ({value.code}) - {value.name}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Time Start</Form.Label>
            <Form.Control
              type="text"
              name="start_time"
              id="start_time"
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Arrived</Form.Label>
            <Form.Control
              type="text"
              name="arrived"
              id="arrived"
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Button type="submit" id="add-form-button">
              Add
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { station: state.station, train: state.train, route: state.route };
};

function mapDispatchToProps(dispatch) {
  return {
    actionGetStations: () => dispatch(actionGetStations()),
    actionGetTrains: () => dispatch(actionGetTrains()),
    actionAddRoute: data => dispatch(actionAddRoute(data))
  };
}

const AdminRouteAdd = connect(mapStateToProps, mapDispatchToProps)(RouteAdd);

export default AdminRouteAdd;
