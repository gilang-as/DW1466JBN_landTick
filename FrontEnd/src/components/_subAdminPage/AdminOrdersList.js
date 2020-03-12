import React, { Component } from "react";
import { connect } from "react-redux";

import { actionGetTransactions } from "../../_actions/Transaction";
import { Button } from "react-bootstrap";
import { SetIDR } from "../../helper/Curency";
import AdminOrderStatusSelect from "./AdminOrderStatusSelect";
class OrdersList extends Component {
  componentDidMount() {
    this.props.actionGetTransactions();
  }
  render() {
    const { data: transactions } = this.props.transaction;
    console.log(transactions);
    return (
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-5">
              <h2>
                Orders <b>List</b>
              </h2>
            </div>
          </div>
        </div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Date Created</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(function(value, index) {
              return (
                <tr key={(index = index + 1)}>
                  <td>{index}</td>
                  <td>{value.user.name}</td>
                  <td>{value.date}</td>
                  <td>{SetIDR(value.price)}</td>
                  <td>{value.status}</td>
                  <td>
                    {" "}
                    <AdminOrderStatusSelect data={value.id} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="clearfix">
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { transaction: state.transaction };
};

function mapDispatchToProps(dispatch) {
  return {
    actionGetTransactions: () => dispatch(actionGetTransactions())
  };
}

const AdminOrderList = connect(mapStateToProps, mapDispatchToProps)(OrdersList);

export default AdminOrderList;
