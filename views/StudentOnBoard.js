import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";

import StudentOnboarding from "./StudentOnboarding";

class StudentOnBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const props = this.props;
    return (
      // <Router>
      <StudentOnboarding {...props} />
      // </Router>
    );
  }
}

export default StudentOnBoard;
// const studentonboard = document.getElementById("studentonboard");

// if (studentonboard) {
//   ReactDOM.render(<StudentOnBoard />, studentonboard);
// }
