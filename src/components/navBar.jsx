import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import Route from "react-router-dom/Route";
import logo1 from "./logo1.png";
import "./navBar.css";

const NavWrapper = styled.div`
  > div:first-child {
    max-width: 1200px;
    margin: 0 auto;
  }
  font-family: "Rockwell";
  .nav {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav > .nav-header {
    display: inline;
  }

  .nav > .nav-header > .nav-title {
    display: inline-block;
    font-size: 22px;
    padding: 10px 10px 10px 10px;
    > a {
      > img {
        width: 200px;
      }
    }
  }

  .nav > .nav-btn {
    display: none;
  }

  .nav > .nav-links {
    display: inline;
    font-size: 18px;
  }

  .nav > .nav-links > a {
    display: inline-block;
    padding: 13px 10px 13px 10px;
    text-decoration: none;
    font-size: 1.5rem;
    cursor: pointer;
    font-weight: 400;
  }

  .nav > .nav-links > a:hover {
    background-color: black;
    color: white;
  }

  .nav > #nav-check {
    display: none;
  }

  @media (max-width: 600px) {
    .nav > .nav-btn {
      display: inline-block;
      position: absolute;
      right: 0px;
      top: 0px;
    }
    .nav > .nav-header > .nav-title > img {
      height: 3rem;
      cursor: pointer;
    }
    .nav > .nav-btn > label {
      display: inline-block;
      width: 50px;
      height: 50px;
      padding: 13px;
      background-color: black;
      color: white;
    }
    .nav > .nav-btn > label:hover {
      background-color: ${props => props.theme.primary};
    }
    .nav > .nav-btn > label > span {
      display: block;
      width: 25px;
      height: 10px;
      border-top: 2px solid ${props => props.theme.secondary};
    }
    .nav > .nav-links {
      position: absolute;
      display: block;
      width: 100%;
      background-color: black;
      height: 0px;
      transition: all 0.3s ease-in;
      overflow-y: hidden;
      top: 50px;
      left: 0px;
      z-index: 5;
    }
    .nav > .nav-links > a {
      display: block;
      width: 100%;
      color: white;
    }
    .nav > #nav-check:not(:checked) + .nav-links {
      height: 0px;
    }
    .nav > #nav-check:checked + .nav-links {
      height: calc(100vh - 50px);
      overflow-y: auto;
    }
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

class NavBar extends Component {
  state = {
    value: 0,
    open: false
  };

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
          <NavWrapper>
            <div>
              <div className="nav">
                <div className="nav-header">
                  <div className="nav-title">
                    <a href="/" prefetch>
                      <img src={logo1} alt="logo" />
                    </a>
                  </div>
                </div>
                <div className="nav-btn" onClick={this.handleToggle}>
                  <label htmlFor="nav-check">
                    <span />
                    <span />
                    <span />
                  </label>
                </div>
                <input type="checkbox" id="nav-check" />
                <div className="nav-links">
                  <a>s Medical Mentor</a>

                  <a>Engineering Mentor</a>

                  <a>About Us</a>

                  <a>Contact Us</a>
                </div>
              </div>
            </div>
          </NavWrapper>

          <Route
            path="/"
            exact
            strict
            render={() => {
              return (
                <div>
                  {" "}
                  <h1>Welcome Home</h1>
                  <GridWrapper>
                    <p className="hello">Hello paragraph 1</p>
                    <p className="cool">Hello there, namaskara</p>
                    <div>Hello i am div</div>
                  </GridWrapper>
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
