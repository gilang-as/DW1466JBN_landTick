import React, { Component } from "react";
import { connect } from "react-redux";

import { actionCheckAuth } from "../../_actions/Auth";
import { Button, Row, Col } from "react-bootstrap";
import FormSearchModal from "./FormSearchModal";
import { SetIDR } from "../../helper/Curency";

class Table extends Component {
  componentDidMount = () => {
    this.props.actionCheckAuth();
  };
  render() {
    const tickets = this.props.tickets;
    const adult = this.props.adult;
    const child = this.props.child;
    const date_start = this.props.date_start;
    const auth = this.props.auth.authentication;
    return (
      <tbody>
        {tickets ? (
          tickets.map(function(value, index) {
            return (
              <tr key={(index = index + 1)}>
                <td>{index}</td>
                <td>
                  <Row>
                    <Col md lg="3">
                      <h4>{value.train_name}</h4>
                      <h6>{value.train_category}</h6>
                    </Col>
                    <Col md lg="2">
                      <h4>{value.start_time}</h4>
                      <h6>{value.station_start}</h6>
                    </Col>
                    <Col md lg="2">
                      <h4>{value.arrived}</h4>
                      <h6>{value.station_destination}</h6>
                    </Col>
                    <Col md lg="2">
                      <h4>
                        {" "}
                        {value.remaining_seats
                          ? value.remaining_seats
                          : value.train_seats}
                      </h4>
                    </Col>
                    <Col md lg="3">
                      <b>{SetIDR(value.price)}</b>
                      <br />
                      {auth ? (
                        <FormSearchModal
                          data_ticket={value}
                          adult={adult}
                          child={child}
                          id_ticket={value.id}
                          date_start={date_start}
                        />
                      ) : (
                        <></>
                      )}
                    </Col>
                  </Row>
                </td>
              </tr>
            );
          })
        ) : (
          <h1>LOADING</h1>
        )}
      </tbody>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.auth };
};

function mapDispatchToProps(dispatch) {
  return {
    actionCheckAuth: () => dispatch(actionCheckAuth())
  };
}

const SearchTable = connect(mapStateToProps, mapDispatchToProps)(Table);

export default SearchTable;
