import React, { Component } from "react";
import { connect } from "react-redux";

import { BrowserRouter as Switch, Link } from "react-router-dom";

import { actionGetRoutes } from "../../_actions/Route";

import { SetIDR } from "../../helper/Curency";

import DeleteButton from "./AdminRouteDeleteModal";
import UpdateButton from "./AdminRouteUpdateModal";

class RoutesList extends Component {
  componentDidMount() {
    this.props.actionGetRoutes();
  }
  render() {
    const { data: routes } = this.props.route;
    return (
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-5">
              <h2>
                Routes <b>List</b>
              </h2>
            </div>
            <div className="col-sm-7">
              <Switch></Switch>
              <Link to="/admin/route-add" className="btn btn-primary">
                <span>Add Route</span>
              </Link>
            </div>
          </div>
        </div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Train</th>
              <th>Start</th>
              <th>Destination</th>
              <th>Start Time</th>
              <th>Arrived</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {routes.map(function(value, index) {
              return (
                <tr key={(index = index + 1)}>
                  <td>{index}</td>
                  <td>{value.train.name}</td>
                  <td>{value.start.name}</td>
                  <td>{value.dest.name}</td>
                  <td>{value.start_time}</td>
                  <td>{value.arrived}</td>
                  <td>{SetIDR(value.price)}</td>
                  <td>
                    <DeleteButton route_id={value.id} />
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
  return { route: state.route };
};

function mapDispatchToProps(dispatch) {
  return {
    actionGetRoutes: () => dispatch(actionGetRoutes())
  };
}

const AdminRoutesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(RoutesList);

export default AdminRoutesList;
