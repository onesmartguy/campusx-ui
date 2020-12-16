import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider, connect } from "react-redux";

import UnAuthHeader from "./components/headers/UnAuthHeader";
import AppFooter from "./components/footers/AppFooter";

import StudentOnBoard from "./views/StudentOnBoard";
import UserOnBoard from "./views/UserOnBoard";
import CollegeOnBoard from "./views/CollegeOnBoard";
import StudentActivation from "./views/StudentActivation";

import Store from "./redux/store";

class OnBoardApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <UnAuthHeader></UnAuthHeader>
        <Router>
          <Switch>
            <Route
              path='/OnBoard/StudentOnBoard'
              component={(props) => <StudentOnBoard {...props} />}
              exact
            />
            <Route
              path='/OnBoard/CollegeOnBoard'
              component={() => <CollegeOnBoard />}
              exact
            />
            <Route
              path='/OnBoard/UserOnBoard'
              component={() => <UserOnBoard />}
              exact
            />
            <Route
              path='/OnBoard/ActivateStudent'
              component={(props) => <StudentActivation {...props} />}
              exact
            />
          </Switch>
        </Router>
        {/* <AppFooter data={user} /> */}
      </>
    );
  }
}

// get the redux state and attach it to map state to props
const mapStateToProps = (state) => ({
  user: state.User,
});

const DefaultOnBoardApp = connect(mapStateToProps, null)(OnBoardApp);
export default DefaultOnBoardApp;

const onboardapp = document.getElementById("onboard");
if (onboardapp) {
  ReactDOM.render(
    <Provider store={Store}>
      <DefaultOnBoardApp />
    </Provider>,
    onboardapp
  );
}
