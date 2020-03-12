import React, { Component } from "react";
import { connect } from "react-redux";

import { Button, Modal, Alert, Spinner, Form } from "react-bootstrap";

import { actionUpdateTrain, actionGetTrains } from "../../_actions/Train";
import { FaPencilAlt } from "react-icons/fa";

class DeleteModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      name: "",
      category: "",
      seats: ""
    };
  }
  componentDidMount = () => {
    const { name, category, seats } = this.props.data;
    this.setState({
      name,
      category,
      seats
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = async e => {
    e.preventDefault();
    const datatrain = { id: this.props.data.id, data: this.state };
    await this.props.actionUpdateTrain(datatrain);
    // console.log(this.state );
    // console.log(this.props.train.update_train.status);
    if (this.props.train.update_train.status) {
      this.modalClose();
      await this.props.actionGetTrains();
    }
  };

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
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-5">
                    <h2>
                      Train <b>Update</b>
                    </h2>
                  </div>
                  <div className="col-sm-7">
                    <Button
                      className="btn btn-primary"
                      onClick={this.modalClose}
                    >
                      <span>Back</span>
                    </Button>
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
                    Update
                  </Button>
                </Form.Group>
              </Form>
            </div>
          </Modal.Body>
        </Modal>
        <Button variant="light" onClick={this.modalShow}>
          <FaPencilAlt />
        </Button>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    train: state.train
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actionUpdateTrain: data => dispatch(actionUpdateTrain(data)),
    actionGetTrains: () => dispatch(actionGetTrains())
  };
}

const TrainUpdateModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteModal);

export default TrainUpdateModal;
