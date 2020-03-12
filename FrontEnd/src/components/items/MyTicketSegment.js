import React, { Component } from "react";
import { Row, Col, Card, Badge, Table, Image } from "react-bootstrap";
import QRCODE from "qrcode.react";
import ModalPayNow from "./ModalPayNow";
class MyTicket extends Component {
  render() {
    console.log(this.props.data);
    const { id, date, status, user, route, identity } = this.props.data;
    const { start_time, arrived, train, start, dest } = route;
    const { name: train_name, category: train_category } = train;
    const { name: start_name, code: start_code, area: start_area } = start;
    const { name: dest_name, code: dest_code, area: dest_area } = dest;
    return (
      <Col md lg="12">
        <Card>
          <div className="ticket-frame">
            <Row>
              <Col md lg="9">
                <Row>
                  <Col md lg="4">
                    <h3>{train_name}</h3>
                    <br />
                    <h6>{train_category}</h6>
                    <br />
                    {status === "pending" ? (
                      <Badge variant="warning">{status}</Badge>
                    ) : status === "unpaid" ? (
                      <Badge variant="danger">{status}</Badge>
                    ) : (
                      <Badge variant="success">{status}</Badge>
                    )}
                    <br />
                  </Col>
                  <Col md lg="4">
                    <h3>
                      {start_name} ({start_code})
                    </h3>
                    <br />
                    <h6>{start_area}</h6>
                    <br />
                    <h6>{start_time}</h6>
                    <br />
                  </Col>
                  <Col md lg="4">
                    <h3>
                      {dest_name} ({dest_code})
                    </h3>
                    <br />
                    <h6>{dest_area}</h6>
                    <br />
                    <h6>{arrived}</h6>
                    <br />
                  </Col>
                </Row>
              </Col>
              <Col md lg="3" className="myticket-title">
                <h3>Train</h3>
                <small>
                  <b>{date}</b>
                </small>
                <br />
                <QRCODE
                  id={id}
                  value={id}
                  size={100}
                  className="barcode-myticket"
                />
              </Col>
              <Col md lg="12">
                <Row>
                  <Col md lg="10">
                    <Table responsive="sm">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Type ID</th>
                          <th>Identity</th>
                          <th>Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        {identity.map(function(value, index) {
                          return (
                            <tr key={(index = index + 1)}>
                              <td>{index}</td>
                              <td>{value.category}</td>
                              <td>{value.identity}</td>
                              <td>{value.name}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </Col>
                  <Col md lg="2">
                    <ModalPayNow data={id} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Card>
      </Col>
    );
  }
}

export default MyTicket;
