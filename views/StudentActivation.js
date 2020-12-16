import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";

import Activation from "./Activation";

class StudentActivation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const props = this.props;
    return (
      // <Router>
      <Activation {...props} />
      // </Router>
    );
  }
}

export default StudentActivation;

const activatestudent = document.getElementById("activatestudent");

if (activatestudent) {
  ReactDOM.render(<StudentActivation />, activatestudent);
}
