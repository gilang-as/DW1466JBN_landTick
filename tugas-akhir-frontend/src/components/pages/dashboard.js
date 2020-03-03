import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import TicketFragment from "../_items/ticket-fragment";
import SearchBox from "../_items/home-search";

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="false">
          <Typography
            component="div"
            style={{ backgroundColor: "#cfe8fc", height: "200px" }}
          />
        </Container>
        <Container maxWidth="md" style={{ paddingBottom: "20px" }}>
          <SearchBox />
        </Container>
        <Container maxWidth="md">
          <TicketFragment />
          <TicketFragment />
        </Container>
      </React.Fragment>
    );
  }
}

export default Dashboard;
