import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import home from "./Home";
import Store from "./store";
import Rental from "./rental";
import Service from "./service";
import Contact from "./contact";
import Blog from "./blog";
import About from "./aboutus";

class NavRoute extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact strict component={home} />
          <Route path="/store" exact strict component={Store} />
          <Route path="/service&repairs" exact strict component={Service} />
          <Route path="/rental" exact strict component={Rental} />
          <Route path="/aboutus" exact strict component={About} />
          <Route path="/blog" exact strict component={Blog} />
          <Route path="/contactus" exact strict component={Contact} />
        </div>
      </Router>
    );
  }
}

export default NavRoute;
