import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppHeader from "./components/headers/AppHeader";
import AppFooter from "./components/footers/AppFooter";
import Campusx from "./views/Campusx";
import College from "./views/College";
import Department from "./views/Department";
import Marketplace from "./views/Marketplace";

import { UserTypes } from "./redux/action_types/user_types";

import Store from "./redux/store";

class AdminApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.fetchServicesAsync();
  }

  async fetchServicesAsync() {
    try {
      this.props.dispatch({
        type: UserTypes.GET_USER_REQUEST,
      });
    } catch (error) {
      console.log("unable to fetch user information", error);
    }
  }

  render() {
    const { user } = this.props;
    const userRole = user && user.defaultRole ? user.defaultRole : "";
    return (
      <>
        <AppHeader data={user}></AppHeader>
        <Router>
          <Switch>
            <Route path='/Admin/Campusx' component={() => <Campusx />} />
            <Route path='/Admin/College' component={() => <College />} />
            <Route path='/Admin/Department' component={() => <Department />} />
            <Route
              path='/Admin/Marketplace'
              component={() => <Marketplace />}
            />
          </Switch>
        </Router>
        <AppFooter data={user}></AppFooter>
      </>
    );
  }
}

// get the redux state and attach it to map state to props
const mapStateToProps = (state) => ({
  user: state.User,
});

const DefaultAdminApp = connect(mapStateToProps, null)(AdminApp);

export default DefaultAdminApp;

const adminapp = document.getElementById("admin");
if (adminapp) {
  ReactDOM.render(
    <Provider store={Store}>
      <DefaultAdminApp />
    </Provider>,
    adminapp
  );
}
