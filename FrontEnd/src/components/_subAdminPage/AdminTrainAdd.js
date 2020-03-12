import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { BrowserRouter as Switch, Link, Redirect } from "react-router-dom";

import { actionAddTrain } from "../../_actions/Train";

class TrainAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      category: "Economy",
      seats: 50
    };
  }
  componentDidMount = () => {
    //Apa ya
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = async e => {
    e.preventDefault();
    // console.log(this.state);
    await this.props.actionAddTrain(this.state);
    // console.log(this.props.route);

    // await this.props.actionLogin(this.state);
  };

  render() {
    const { status } = this.props.train.add_train;
    // console.log(this.state.route);
    return status ? (
      <Redirect to="/admin/trains" />
    ) : (
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-5">
              <h2>
                Train <b>Add</b>
              </h2>
            </div>
            <div className="col-sm-7">
              <Switch></Switch>
              <Link to="/admin/trains" className="btn btn-primary">
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
            <Form.Label>Category</Form.Label>
            <Form.Control
              as="select"
              name="category"
              id="category"
              onChange={this.handleChange}
              value={this.state.category}
              required
            >
              <option value="Executive">Executive</option>
              <option value="Business">Business</option>
              <option value="Economy">Economy</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Seats</Form.Label>
            <Form.Control
              type="text"
              name="seats"
              id="seats"
              onChange={this.handleChange}
              value={this.state.seats}
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
  return { train: state.train };
};

function mapDispatchToProps(dispatch) {
  return {
    actionAddTrain: data => dispatch(actionAddTrain(data))
  };
}

const AdminTrainAdd = connect(mapStateToProps, mapDispatchToProps)(TrainAdd);

export default AdminTrainAdd;
