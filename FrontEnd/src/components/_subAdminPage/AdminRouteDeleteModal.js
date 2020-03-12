import React, { Component } from "react";
import { connect } from "react-redux";

import { Button, Modal, Alert, Spinner } from "react-bootstrap";

import { actionDeleteRoute, actionGetRoutes } from "../../_actions/Route";
import { FaTrashAlt } from "react-icons/fa";

class DeleteModal extends Component {
  componentDidMount = () => {};
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  modalClose = () => {
    this.setState({
      modal: false
    });
  };

  modalShow = () => {
    this.setState({
      modal: true
    });
  };

  // on form submit...
  handleDelete = async e => {
    e.preventDefault();
    await this.props.actionDeleteRoute(this.props.route_id);
    // console.log(this.props.route.delete_route.status);
    if (this.props.route.delete_route.status) {
      this.modalClose();
      await this.props.actionGetRoutes();
    }
  };

  render() {
    // const { loading, message, message_status } = this.props.auth;
    return (
      <>
        <Modal
          show={this.state.modal}
          onHide={this.modalClose}
          animation={false}
        >
          <Modal.Body>
            {/* {message ? (
              <Alert variant={message_status}>{message}</Alert>
            ) : (
              <></>
            )} */}
            {false ? (
              <Button className="btn btn-danger btn-block" disabled>
                <Spinner animation="border" size="sm" variant="light" />
              </Button>
            ) : (
              <>
                <Button
                  type="button"
                  onClick={this.handleDelete}
                  className="btn btn-danger btn-block"
                >
                  Are you sure to deleted this data?
                </Button>
                <br />
                <br />
                <Button
                  id="btn-false"
                  variant="light"
                  className="btn btn-block"
                  onClick={this.modalClose}
                >
                  Cancel
                </Button>
              </>
            )}
          </Modal.Body>
        </Modal>
        <Button variant="light" onClick={this.modalShow}>
          <FaTrashAlt />
        </Button>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    route: state.route
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actionDeleteRoute: data => dispatch(actionDeleteRoute(data)),
    actionGetRoutes: () => dispatch(actionGetRoutes())
  };
}

const RouteDeleteModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteModal);

export default RouteDeleteModal;
