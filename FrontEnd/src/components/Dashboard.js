import React, { Component } from "react";
import { connect } from "react-redux";

import { actionCheckAuth } from "../_actions/Auth";

import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import Carousel from "nuka-carousel";

import FormSearch from "./items/FormSearch";

class Dash extends Component {
  componentDidMount = () => {
    this.props.actionCheckAuth();
  };
  render() {
    const d = new Date();
    const time = d.getHours();
    return (
      <>
        <div className="home-banner">
          <Container className="home-banner-container">
            <Row>
              <Col sm={7}>
                <Jumbotron className="home-banner-text">
                  <h1>
                    {time < 11
                      ? "Good Morning"
                      : time < 18
                      ? "Good Afternoon"
                      : "Good Evening"}
                    , Guest!
                  </h1>
                  <p>
                    Looking to travel around the world with benefits? Log in or
                    Register to enjoy.
                  </p>
                </Jumbotron>
              </Col>
              <Col sm={5}>
                <Carousel className="slider-home">
                  <img
                    alt="slide 1"
                    src="https://tvlk.imgix.net/imageResource/2020/03/02/1583154618675-fe8dc049d2386d11be3157ebaacb5d11.jpeg"
                  />
                  <img
                    alt="slide 2"
                    src="https://tvlk.imgix.net/imageResource/2020/03/04/1583322213544-f056e69331698e10015ca8f83a4c940e.png"
                  />
                  <img
                    alt="slide"
                    src="https://tvlk.imgix.net/imageResource/2020/02/28/1582868618968-44b6a161eef6ed7bec06fbb2704f4720.jpeg"
                  />
                </Carousel>
              </Col>
            </Row>
          </Container>
        </div>
        <FormSearch />
      </>
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

const Dashboard = connect(mapStateToProps, mapDispatchToProps)(Dash);

export default Dashboard;
