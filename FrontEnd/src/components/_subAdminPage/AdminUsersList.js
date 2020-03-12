import React, { Component } from "react";
import { connect } from "react-redux";

import { Button } from "react-bootstrap";

import { actionGetUsers } from "../../_actions/User";

class UsersList extends Component {
  componentDidMount() {
    this.props.actionGetUsers();
  }

  render() {
    const { data: users } = this.props.user;
    console.log(users);
    return (
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-5">
              <h2>
                Users <b>List</b>
              </h2>
            </div>
          </div>
        </div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map(function(value, index) {
              return (
                <tr key={(index = index + 1)}>
                  <td>{index}</td>
                  <td>{value.name}</td>
                  <td>{value.email}</td>
                  <td>{value.gender}</td>
                  {value.level === "admin" ? (
                    <td>
                      <span className="status text-success">&bull;</span> Admin
                    </td>
                  ) : (
                    <td>
                      <span className="status text-warning">&bull;</span> User
                      Only
                    </td>
                  )}
                  <td>
                    <Button>Details</Button>
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
  return { user: state.user };
};

function mapDispatchToProps(dispatch) {
  return {
    actionGetUsers: () => dispatch(actionGetUsers())
  };
}

const AdminUsersList = connect(mapStateToProps, mapDispatchToProps)(UsersList);

export default AdminUsersList;
