import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";

import UserOnboarding from "./UserOnBoarding";

class UserOnBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      // <Router>
      <UserOnboarding />
      // </Router>
    );
  }
}

export default UserOnBoard;

// const useronboard = document.getElementById("useronboard");

// if (useronboard) {
//   ReactDOM.render(<UserOnBoard />, useronboard);
// }
