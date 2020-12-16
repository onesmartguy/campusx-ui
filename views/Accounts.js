import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import AccountServices from "../components/AccountServices";

class Accounts extends React.Component {
  render() {
    const { services, payment } = this.props;

    return (
      <div className=''>
        <div className='flx row pc col-12'>
          {services && services.length > 0 ? (
            services.map((service) => {
              return (
                <AccountServices accountservices={service} payments={payment} />
              );
            })
          ) : (
            <p>No Service available at this point</p>
          )}
        </div>
      </div>
    );
  }
}

// get the redux state and attach it to map state to props
const mapStateToProps = (state) => ({
  services: state.Account.services,
  payment: state.Payment,
});

export default connect(mapStateToProps, null)(Accounts);

// const accounts = document.getElementById("payment-center-accounts");

// if (accounts) {
//   ReactDOM.render(<AccountServices />, accounts);
// }
