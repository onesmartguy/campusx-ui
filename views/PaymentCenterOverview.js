import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as BsIcons from "react-icons/bs";

import AccountBalance from "../components/AccountBalance";
import {
  DefaultDateFormat,
  MonthDateFormat,
} from "../utilities/formatters/DateTimeFormatters";
import { AmountFormatter } from "../utilities/formatters/CurrencyFormatters";
import { SortServicesBasedOnDueDate } from "../utilities/HelperMethods";

class PaymentCenterOverview extends Component {
  constructor(props) {
    super(props);
  }

  handleViewMoreBtnClick = () => {
    if (this.props && this.props.history) {
      this.props.history.push("/PaymentCenter/Accounts");
    }
  };

  renderMealCard = () => {
    return (
      <div className='col-lg-4 col-md-6 flx width100 ph0'>
        <div className='card mv2 mh2 shadow posRel width100 campusXCard boisBar'>
          <div className='pv2 ph2 height100 flx flx-col'>
            <div>
              <div className='fntCXDG fntSm'>
                MEAL PLANS <BsIcons.BsChevronRight className='chevronOV' />
              </div>
            </div>
            <div className='posRel overviewCard flx justify-center flx-col'>
              <div className='fntBlue fntXXLg fntSemiBold'>BOIS 90</div>
              <div className='fntMd fntBlack mb0-5'>90 Meals + $300 Flex</div>
            </div>
            <div className='flx justify-center align-baseline'>
              <button className='btn btn-payment'>BUY MEAL PLAN</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  renderPaymentUtilitiesItem = (item, index) => {
    const item_key = `inlineUtility_item_${index}`;
    const itemDate = MonthDateFormat(item.DueDate);
    const itemAmount = AmountFormatter(item.FeeAmount);
    return (
      <div className='flx align-center justify-between mb1' key={item_key}>
        <div className='fntMd fntSemiBold fntBlack upCTitle'>
          {item.AccountServiceTypeName}{" "}
          <span className='fntXSm'>({itemDate})</span>
        </div>
        <div className='fntBlack fntMd fntSemiBold upCCost'>{itemAmount}</div>
      </div>
    );
  };

  renderPaymentUtilitiesCard = (services) => {
    return (
      <div className='col-lg-4 col-md-6 flx width100 ph0'>
        <div className='card mv2 mh2 shadow posRel width100 campusXCard boisBar'>
          <div className='pv2 ph2 height100 flx flx-col'>
            <div>
              <div className='fntCXDG fntSm'>
                UPCOMING PAYMENTS
                <BsIcons.BsChevronRight className='chevronOV' />
              </div>
            </div>
            <div className='posRel overviewCard flx justify-center flx-col'>
              {services &&
                services.length > 0 &&
                services.map((item, index) => {
                  if (index !== 0 && index < 4) {
                    return this.renderPaymentUtilitiesItem(item, index);
                  }
                })}
            </div>
            <div className='flx justify-center align-baseline'>
              <button
                className='btn btn-payment'
                onClick={this.handleViewMoreBtnClick}
              >
                VIEW MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  renderFirstPaymentCard = (services) => {
    const firstService = services[0];
    const firstServiceDate = DefaultDateFormat(firstService.DueDate);
    const firstServiceAmount = AmountFormatter(firstService.FeeAmount);

    return (
      <div className='col-lg-4 col-md-6 flx width100 ph0'>
        <div className='card mv2 mh2 shadow posRel width100 campusXCard boisBar'>
          <div className='pv2 ph2 height100 flx flx-col'>
            <div>
              <div className='fntCXDG fntSm mb2'>
                NEXT PAYMENT DUE
                <BsIcons.BsChevronRight className='chevronOV' />
              </div>
            </div>
            <div className='posRel overviewCard flx justify-center flx-col'>
              <div className='fntMd fntBlue'>{firstServiceDate}</div>
              <div className='fntCLg fntBlack mb1 npTitle'>
                {firstService.AccountServiceTypeName}
              </div>
              <div className='fntBlack fntXXLg fntSemiBold tac'>
                {firstServiceAmount}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { services } = this.props;
    const updateServices = SortServicesBasedOnDueDate(services);

    return (
      <div className=''>
        <AccountBalance styleName='col-lg-6 mv2' abContain='mh2' />
        <div className=''>
          <div className='flx row pc col-12'>
            {this.renderMealCard()}
            {updateServices &&
              updateServices.length > 0 &&
              this.renderFirstPaymentCard(updateServices)}
            {updateServices &&
              updateServices.length > 0 &&
              this.renderPaymentUtilitiesCard(updateServices)}
          </div>
        </div>
      </div>
    );
  }
}

// get the redux state and attach it to map state to props
const mapStateToProps = (state) => ({
  services: state.Account.services,
});

export default connect(mapStateToProps, null)(PaymentCenterOverview);
