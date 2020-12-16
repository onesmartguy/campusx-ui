import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   BrowserRouter,
// } from "react-router-dom";

import CollegeOnboarding from "./CollegeOnboarding";

class CollegeOnBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      // <Router>
      <CollegeOnboarding />
      // </Router>
    );
  }
}

export default CollegeOnBoard;
// const collegeonboard = document.getElementById("collegeonboard");

// if (collegeonboard) {
//   ReactDOM.render(<CollegeOnBoard />, collegeonboard);
// }
