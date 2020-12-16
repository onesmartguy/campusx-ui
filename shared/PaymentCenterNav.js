import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import * as AiIcons from 'react-icons/ai';

class PaymentCenterNav extends React.Component {
    constructor() {
        super();
        this.state = {
            showMenu: false
        };
    }

    handleMobileClick = () => {
        this.setState({ showMenu: !this.state.showMenu});
    };

    render() {
        const showMenu = this.state.showMenu;
      return (
      <div className="posRel linkContain">
              <AiIcons.AiOutlineMenu className="mobileMenu shadow cursPoint" onClick={() => this.handleMobileClick() }/>
              <div className={`campusXNavWrap flx justify-between ${showMenu ? 'showMenu' : null}`}>
            <div className='linkWrap'>
              <NavLink
                className='fntCXDB fntNav fntSemiBold campusXNavTitle'
                activeClassName='bordBBlue'
                to='/PaymentCenter/Overview'
              >
                OVERVIEW
              </NavLink>
            </div>
            <div className='linkWrap'>
              <NavLink
                className='fntCXDB fntNav fntSemiBold campusXNavTitle'
                activeClassName='bordBBlue'
                to='/PaymentCenter/Accounts'
              >
                ACCOUNTS
              </NavLink>
            </div>
            <div className='linkWrap'>
              <NavLink
                className='fntCXDB fntNav fntSemiBold campusXNavTitle'
                activeClassName='bordBBlue'
                to='/PaymentCenter/Ewallet'
              >
                WALLET
              </NavLink>
            </div>
            <div className='linkWrap'>
              <NavLink
                className='fntCXDB fntNav fntSemiBold campusXNavTitle'
                activeClassName='bordBBlue'
                to='/PaymentCenter/History'
              >
                HISTORY
              </NavLink>
            </div>
            <div className='linkWrap'>
              <NavLink
                className='fntCXDB fntNav fntSemiBold campusXNavTitle'
                activeClassName='bordBBlue'
                to='/PaymentCenter/Statements'
              >
                STATEMENTS
              </NavLink>
            </div>
          </div>
      </div>
    );
  }
}

export default PaymentCenterNav;
