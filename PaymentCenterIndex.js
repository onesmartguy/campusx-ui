import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
  Redirect,
} from "react-router-dom";
import { Provider, connect } from "react-redux";

import AppHeader from "./components/headers/AppHeader";
import AppFooter from "./components/footers/AppFooter";
import AppLegalFooter from "./components/footers/AppLegalFooter";
import PaymentCenterNav from "./shared/PaymentCenterNav";
import PaymentCenterOverview from "./views/PaymentCenterOverview";
import Accounts from "./views/Accounts";
import Wallet from "./views/Wallet";
import PaymentHistory from "./views/PaymentHistory";
import Statements from "./views/Statements";

import { UserTypes } from "./redux/action_types/user_types";
import { AccountTypes } from "./redux/action_types/account_types";
import { PaymentTypes } from "./redux/action_types/payment_types";

import Store from "./redux/store";

/*import './styles/appStyles.sass';*/

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.fetchServicesAsync();
  }

  async fetchServicesAsync() {
    try {
      this.props.dispatch({
        type: UserTypes.GET_USER_REQUEST,
        callback: (res) => {
          if (res && res.studentAccountId) {
            this.props.dispatch({
              type: AccountTypes.GET_STUDENTACCOUNT_REQUEST,
              payload: {
                studentAccountId: res.studentAccountId,
              },
            });

            this.props.dispatch({
              type: PaymentTypes.GET_CARDS_REQUEST,
              payload: {
                studentAcctId: res.studentAccountId,
                collegeAcctId: res.collegeAccountId,
              },
            });
          }
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { user } = this.props;
    const userRole = user && user.defaultRole ? user.defaultRole : "";
    return (
      <Router>
        <div>
          {userRole && userRole === "7" && (
            <>
              <AppHeader data={user}></AppHeader>
              <div className='campusXContent mb5'>
                <PaymentCenterNav />
                <Switch>
                  <Route
                    path='/PaymentCenter/Overview'
                    component={(props) => <PaymentCenterOverview {...props} />}
                    exact
                  />
                  <Route
                    path='/PaymentCenter/Accounts'
                    component={() => <Accounts />}
                    exact
                  />
                  <Route
                    path='/PaymentCenter/Ewallet'
                    component={() => <Wallet response={this.state} />}
                    exact
                  />
                  <Route
                    path='/PaymentCenter/History'
                    component={PaymentHistory}
                    exact
                  />
                  <Route
                    path='/PaymentCenter/Statements'
                    component={Statements}
                    exact
                  />
                </Switch>
                <AppLegalFooter />
              </div>
              <AppFooter data={user} />
            </>
          )}
        </div>
      </Router>
    );
  }
}

// get the redux state and attach it to map state to props
const mapStateToProps = (state) => ({
  user: state.User,
});

const DefaultStudentApp = connect(mapStateToProps, null)(App);
export default DefaultStudentApp;

const paymentCenter = document.getElementById("root");

if (paymentCenter) {
  ReactDOM.render(
    <Provider store={Store}>
      <BrowserRouter>
        <DefaultStudentApp />
      </BrowserRouter>
    </Provider>,
    paymentCenter
  );
}
