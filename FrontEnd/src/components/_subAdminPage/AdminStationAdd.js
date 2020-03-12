import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { BrowserRouter as Switch, Link, Redirect } from "react-router-dom";

import { actionAddStation } from "../../_actions/Station";

class StationAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      code: "",
      area: ""
    };
  }
  componentDidMount = () => {};

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = async e => {
    e.preventDefault();
    // console.log(this.state);
    await this.props.actionAddStation(this.state);
    console.log(this.props.station);

    // await this.props.actionLogin(this.state);
  };

  render() {
    const { status } = this.props.station.add_station;
    // console.log(this.state.route);
    return status ? (
      <Redirect to="/admin/stations" />
    ) : (
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-5">
              <h2>
                Station <b>Add</b>
              </h2>
            </div>
            <div className="col-sm-7">
              <Switch></Switch>
              <Link to="/admin/stations" className="btn btn-primary">
                <span>Back</span>
              </Link>
            </div>
          </div>
        </div>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              id="name"
              onChange={this.handleChange}
              value={this.state.name}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Code</Form.Label>
            <Form.Control
              type="text"
              name="code"
              id="code"
              onChange={this.handleChange}
              value={this.state.code}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Area</Form.Label>
            <Form.Control
              type="text"
              name="area"
              id="area"
              onChange={this.handleChange}
              value={this.state.area}
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
  return { station: state.station };
};

function mapDispatchToProps(dispatch) {
  return {
    actionAddStation: data => dispatch(actionAddStation(data))
  };
}

const AdminStationAdd = connect(
  mapStateToProps,
  mapDispatchToProps
)(StationAdd);

export default AdminStationAdd;
