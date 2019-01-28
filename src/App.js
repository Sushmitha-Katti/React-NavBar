import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar";
import { BrowserRouter as Router } from "react-router-dom/Route";
class App extends Component {
  render() {
    return (
      <div className={App}>
        <NavBar />
      </div>
    );
  }
}

export default App;
