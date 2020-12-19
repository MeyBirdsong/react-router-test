import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import MenuPage from "./components/MenuPage";
import AboutPage from "./components/AboutPage";
import Speciality from "./components/Speciality";
import NavBarPage from "./NavBarPage";

class Routes extends Component {
  render() {
    return (
      <Router>
        <NavBarPage />
        <div>
          <hr />
          <Route name="Home" exact path="/" component={HomePage} />
          <Route name="Menu" path="/menu" component={MenuPage} />
          <Route name="About" path="/about" component={AboutPage} />
          <Route name="Speciality" path="/speciality" component={Speciality} />
          
        </div>
      </Router>
    );
  }
}

export default Routes;