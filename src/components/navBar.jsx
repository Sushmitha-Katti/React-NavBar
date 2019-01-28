import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Route from "react-router-dom/Route";
import logo1 from "./logo1.png";
import "./navBar.css";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      value: 0
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }

  resizeHeaderOnScroll = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop;

    if (distanceY > 0) {
      this.setState({
        value: 1
      });
    } else {
      this.setState({ value: 0 });
    }
  };

  handlescroll = () => {
    if (this.state.value === 0) {
      console.log("We are here");
      return "navbar sticky-top  navbar-expand-sm navbar-light navlarger";
    } else {
      return "navbar sticky-top  navbar-expand-sm navbar-light navsmaller";
    }
  };

  render() {
    return (
      <Router>
        <div>
          <nav className={this.handlescroll()}>
            <div className="d-flex flex-row bd-highlight p-1 ">
              <div className="p-4 bd-highlight" />
              <a className="navbar-brand p-4 bd-highlight">
                <img
                  src={logo1}
                  width="195"
                  height="49.5"
                  class="d-inline-block align-top"
                  alt="Navbar"
                />
              </a>

              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon" />
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                >
                <ul className="navbar-nav mr-auto ">
                  <div className="p-4 bd-highlight" />
                  <li className="nav-item">
                    <div className="p-4 bd-highlight">
                      <Link className="navhover" to="/">
                        {" "}
                        Home{" "}
                      </Link>
                    </div>
                  </li>

                  <li className="nav-item">
                    <div className="p-4 bd-highlight">
                      <Link className="navhover" to="/store">
                        {" "}
                        Store{" "}
                      </Link>
                    </div>
                  </li>

                  <li className="nav-item">
                    <div className="p-4 bd-highlight">
                      <Link className="navhover" to="/service&repairs">
                        {" "}
                        Service & Repairs{" "}
                      </Link>
                    </div>
                  </li>

                  <li className="nav-item">
                    <div className="p-4 bd-highlight">
                      <Link className="navhover" to="/rental">
                        {" "}
                        Rental{" "}
                      </Link>
                    </div>
                  </li>

                  <li className="nav-item">
                    <div className="p-4 bd-highlight">
                      <Link className="navhover" to="/aboutus">
                        {" "}
                        About Us{" "}
                      </Link>
                    </div>
                  </li>

                  <li className="nav-item">
                    <div className="p-4 bd-highlight">
                      <Link className="navhover" to="/blog">
                        {" "}
                        Blog
                      </Link>
                    </div>
                  </li>

                  <li className="nav-item">
                    <div className="p-4 bd-highlight">
                      <Link className="navhover" to="/contactus">
                        {" "}
                        Contact Us
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Route
            path="/"
            exact
            strict
            render={() => {
              return (
                <div>
                  {" "}
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>
                  <h1>Welcome Home</h1>{" "}
                </div>
              );
            }}
          />
          <Route
            path="/store"
            exact
            strict
            render={() => {
              return <p> Welcome store </p>;
            }}
          />

          <Route
            path="/service&repairs"
            exact
            strict
            render={() => {
              return <h1> Welcome sr </h1>;
            }}
          />
          <Route
            path="/rental"
            exact
            strict
            render={() => {
              return <p> Welcome R </p>;
            }}
          />
          <Route
            path="/aboutus"
            exact
            strict
            render={() => {
              return <p> Welcome As </p>;
            }}
          />
          <Route
            path="/blog"
            exact
            strict
            render={() => {
              return <p> Welcome B </p>;
            }}
          />
          <Route
            path="/contactus"
            exact
            strict
            render={() => {
              return <p> Welcome C </p>;
            }}
          />
        </div>
      </Router>
    );
  }
}

export default NavBar;
