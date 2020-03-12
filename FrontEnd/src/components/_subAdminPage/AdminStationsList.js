import React, { Component } from "react";
import { connect } from "react-redux";

import { BrowserRouter as Switch, Link } from "react-router-dom";

import { actionGetStations } from "../../_actions/Station";

import DeleteButton from "./AdminStationDeleteModal";
import UpdateButton from "./AdminStationUpdateModal";

class StationsList extends Component {
  componentDidMount() {
    this.props.actionGetStations();
  }
  render() {
    const { data: stations } = this.props.station;
    return (
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-5">
              <h2>
                Stations <b>List</b>
              </h2>
            </div>
            <div className="col-sm-7">
              <Switch></Switch>
              <Link to="/admin/station-add" className="btn btn-primary">
                <span>Add Station</span>
              </Link>
            </div>
          </div>
        </div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Code</th>
              <th>Area</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {stations.map(function(value, index) {
              return (
                <tr key={(index = index + 1)}>
                  <td>{index}</td>
                  <td>{value.name}</td>
                  <td>{value.code}</td>
                  <td>{value.area}</td>
                  <td>
                    <DeleteButton station_id={value.id} />
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
  return { station: state.station };
};

function mapDispatchToProps(dispatch) {
  return {
    actionGetStations: () => dispatch(actionGetStations())
  };
}

const AdminStationsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(StationsList);

export default AdminStationsList;
