import React, { Component } from "react";
import { connect } from "react-redux";

import { Button, Modal, Alert, Spinner, Form } from "react-bootstrap";

import { actionUpdateStation, actionGetStations } from "../../_actions/Station";
import { FaPencilAlt } from "react-icons/fa";

class DeleteModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      name: "",
      code: "",
      area: ""
    };
  }
  componentDidMount = () => {
    const { name, code, area } = this.props.data;
    this.setState({
      name,
      code,
      area
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = async e => {
    e.preventDefault();
    const datastation = { id: this.props.data.id, data: this.state };
    await this.props.actionUpdateStation(datastation);
    // console.log(this.state );
    // console.log(this.props.station.update_station.status);
    if (this.props.station.update_station.status) {
      this.modalClose();
      await this.props.actionGetStations();
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
                      Station <b>Update</b>
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
    station: state.station
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actionUpdateStation: data => dispatch(actionUpdateStation(data)),
    actionGetStations: () => dispatch(actionGetStations())
  };
}

const StationUpdateModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteModal);

export default StationUpdateModal;
