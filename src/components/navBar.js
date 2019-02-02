import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";
import Route from "react-router-dom/Route";
import logo1 from "./logo1.png";
import NavRoute from "./newRoute";

const NavWrapper = styled.div`
    > div:first-child {
      width: 100%;
     
    
    }
    font-family: "Arial, Helvetica, sans-serif;";
    .nav {
      width: 100%;
      position: fixed;
      top:0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: black;
      height: 100px;
      justify-content: flex-start;
      
    }
    .navsmaller {
      height:70px;
      position:fixed;
      
     
    }
  
    .nav > .nav-header {
      padding: 0 70px ;
      display: inline;
    }
  
    .nav > .nav-header > .nav-title {
      display: inline-block;
      font-size: 22px;
      padding: 10px 10px 10px 10px !important;
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
      margin-left: 2rem
      text-align: center;
      font-size: 14px;
      
     
      
    }
  
    .nav > .nav-links > a {
      font-family: "arial";
      color: #f7bb2f
      display: inline-block;
      margin-right: 1rem;
      margin-left: 1rem;
      margin-top:0px;
      text-decoration: none;
      font-size: 1.1rem;
      cursor: pointer;
      font-weight: 400;
      position: relative;
    }
    .nav > .nav-links > a:hover {
    color: #f7bb2f;
    text-decoration: none;
    }
  
    .nav > .nav-links > a:before {
      content: "";
      visibility: Hidden
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: 0;
      left: 0;
      background-color: #f7bb2f;
    -webkit-transform: scaleX(0);
    transform: scaleX();
    -webkit-transition: all 0.4s linear 0s;
    transition: all 0.4s linear 0s;
  }
  .nav > .nav-links > a:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  
  }
      
    }
  
    .nav > #nav-check {
      display: none;
  }
  
  
    @media (max-width: 800px) {
      
  
      .nav > .nav-header {
        padding: 0 10% ;
  
      }
      
      .nav > .nav-header > .nav-title > a> img {
        
        width: 10rem;
        height: 2rem;
        cursor: pointer;
        left:0;
       
        
      }
      .nav > .nav-btn {
        display: inline-block;
        position: absolute;
        left: 75%;
        top:auto;
      }
       
      .nav > .nav-btn > label {
        display: inline-block;
        width: 50px;
        height: 50px;
        padding: 13px;
        background-color: #0001;
        color: #f7bb2f;
        border-radius:5%;
       
      }
      
      .nav > .nav-btn > label > span {
        display: block;
        width: 25px;
        height: 10px;
        border-top: 2px solid #f7bb2f;
      }
      .nav > .nav-links {
        position: absolute;
        display: block;
        margin-left:0;
        width: 100%;
        background-color: black;
        height: 0px;
        transition: all 0.3s ease-in;
        overflow-y: hidden;
        top: 50px;
        left: 0;
        z-index: 2;
      }
      .nav > .nav-links > a {
        display: block;
        width:
        color: #f7bb2f;
        left:0;
        right : 0;
      }
      .nav > #nav-check:not(:checked) + .nav-links {
        height: 0px;
      }
      .nav > #nav-check:checked + .nav-links {
        height: auto;
        overflow-y: hidden;
      
      }
    }
    @media ( max-width: 600px){
    .nav > .nav-header > .nav-title > a> img {
        
        width: 6rem;
        height: 2rem;
        cursor: pointer;
        left:0;
        
      }
  
  }
  `;

class NavBar extends Component {
  state = {
    value: 0
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
      return "nav";
    } else {
      return "nav navsmaller";
    }
  };
  render() {
    return (
      <div>
        <NavWrapper>
          <div>
            <div className={this.handlescroll()}>
              <div className="nav-header">
                <div className="nav-title">
                  <a href="/" prefetch>
                    <img src={logo1} alt="logo" />
                  </a>
                </div>
              </div>
              <div className="nav-btn">
                <label htmlFor="nav-check">
                  <span />
                  <span />
                  <span />
                </label>
              </div>
              <input type="checkbox" id="nav-check" />
              <div className="nav-links">
                <a href="/">Home</a>

                <a href="/store">Store</a>

                <a href="/service&repairs">Service and Repairs</a>

                <a href="/rental">Rental</a>
                <a href="/aboutus">About Us</a>

                <a href="/blog">Blog</a>

                <a href="/contactus">Contact Us</a>
              </div>
            </div>
          </div>
        </NavWrapper>
        <NavRoute />
      </div>
    );
  }
}

export default NavBar;
