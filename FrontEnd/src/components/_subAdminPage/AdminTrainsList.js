import React, { Component } from "react";
import { connect } from "react-redux";

import { BrowserRouter as Switch, Link } from "react-router-dom";

import { actionGetTrains } from "../../_actions/Train";

import DeleteButton from "./AdminTrainDeleteModal";
import UpdateButton from "./AdminTrainUpdateModal";

class TrainsList extends Component {
  componentDidMount() {
    this.props.actionGetTrains();
  }
  render() {
    const { data: trains } = this.props.train;
    return (
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-5">
              <h2>
                Trains <b>List</b>
              </h2>
            </div>
            <div className="col-sm-7">
              <Switch></Switch>
              <Link to="/admin/train-add" className="btn btn-primary">
                <span>Add Train</span>
              </Link>
            </div>
          </div>
        </div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Category</th>
              <th>Seats</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {trains.map(function(value, index) {
              return (
                <tr key={(index = index + 1)}>
                  <td>{index}</td>
                  <td>{value.name}</td>
                  <td>{value.category}</td>
                  <td>{value.seats}</td>
                  <td>
                    <DeleteButton train_id={value.id} />
                    <UpdateButton data={value} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* <div className="clearfix">
          <div className="hint-text">
            Showing <b>5</b> out of <b>25</b> entries
          </div>
          <ul className="pagination">
            <li className="page-item disabled">
              <a href="/">Previous</a>
            </li>
            <li className="page-item">
              <a href="/" className="page-link">
                1
              </a>
            </li>
            <li className="page-item">
              <a href="/" className="page-link">
                2
              </a>
            </li>
            <li className="page-item active">
              <a href="/" className="page-link">
                3
              </a>
            </li>
            <li className="page-item">
              <a href="/" className="page-link">
                4
              </a>
            </li>
            <li className="page-item">
              <a href="/" className="page-link">
                5
              </a>
            </li>
            <li className="page-item">
              <a href="/" className="page-link">
                Next
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { train: state.train };
};

function mapDispatchToProps(dispatch) {
  return {
    actionGetTrains: () => dispatch(actionGetTrains())
  };
}

const AdminTrainsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainsList);

export default AdminTrainsList;
