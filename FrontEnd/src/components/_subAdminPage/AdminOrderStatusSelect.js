import React, { Component } from "react";
import { connect } from "react-redux";

import { Button } from "react-bootstrap";

import {
  actionUpdateTransaction,
  actionGetTransactions
} from "../../_actions/Transaction";
import { FaClipboardCheck } from "react-icons/fa";

class DeleteModal extends Component {
  // on form submit...
  handleUpdate = async e => {
    e.preventDefault();
    const data = {
      id: this.props.data,
      data: {
        status: "paid"
      }
    };
    // console.log(this.props.data);
    await this.props.actionUpdateTransaction(data);
    if (this.props.transaction.update_transaction.status) {
      await this.props.actionGetTransactions();
    }
  };

  render() {
    // const { loading, message, message_status } = this.props.auth;
    return (
      <Button variant="light" onClick={this.handleUpdate}>
        <FaClipboardCheck />
      </Button>
    );
  }
}

const mapStateToProps = state => {
  return {
    transaction: state.transaction
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actionUpdateTransaction: data => dispatch(actionUpdateTransaction(data)),
    actionGetTransactions: () => dispatch(actionGetTransactions())
  };
}

const RouteDeleteModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteModal);

export default RouteDeleteModal;
