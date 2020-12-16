import React, { Component } from "react";
import Cards from "react-credit-cards";
import { connect } from "react-redux";

import AddCreditCard from "../components/paymentcenter/AddCreditCard";
import AccountBalance from "../components/AccountBalance";
import SnapAlert from "../components/feedbacks/SnapAlert";

import { MonthYearFormat } from "../utilities/formatters/DateTimeFormatters";
import { CardFormatter } from "../utilities/formatters/CurrencyFormatters";
import { GetCardType, SortArrayBasedOnKey } from "../utilities/HelperMethods";

import { PaymentTypes } from "../redux/action_types/payment_types";

import "react-credit-cards/lib/styles.scss";

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appendedCompsCount: 0,
      showPopup: false,
      showAddCardPopup: false,
      title: null,
      message: null,
      alertType: "default",
    };
  }

  handleADDClick = () => {
    this.setState({
      appendedCompsCount: this.state.appendedCompsCount + 1,
      showAddCardPopup: true,
    });
  };

  cancelClick = () => {
    this.setState({
      appendedCompsCount: this.state.appendedCompsCount - 1,
      showAddCardPopup: false,
    });
  };

  /** method to toggle popup */
  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  };

  /**
   * callback method to display appropriate alerts
   * based on response
   * @param {*} res
   */
  addCardSubmit = (res) => {
    this.setState({
      showPopup: true,
      title: res.title,
      message: res.message,
      alertType: res.alertType,
    });
  };

  /**
   *  handles remove card submit functionality
   */
  RemoveCard = async (accountNumber) => {
    const { user } = this.props;

    this.props.dispatch({
      type: PaymentTypes.REMOVE_CARD_REQUEST,
      payload: {
        creditCardId: accountNumber,
      },
      callback: (res) => {
        if (res && res.result === "ok") {
          this.props.dispatch({
            type: PaymentTypes.GET_CARDS_REQUEST,
            payload: {
              studentAcctId: user.studentAccountId,
              collegeAcctId: user.collegeAccountId,
            },
          });
          this.setState({
            showPopup: true,
            title: "Success",
            message: "Card Removed successfully.",
            alertType: "success",
          });
        } else {
          this.setState({
            showPopup: true,
            title: "Error",
            message: "Unable to remove card at this moment.",
            alertType: "danger",
          });
        }
      },
    });
  };

  /**
   *  handles Make Primary Card
   */
  MakePrimary = async (accountNumber) => {
    const { user } = this.props;

    this.props.dispatch({
      type: PaymentTypes.PRIMARY_CARD_REQUEST,
      payload: {
        creditCardId: accountNumber,
        studentAccountId: user.studentAccountId,
      },
      callback: (res) => {
        if (res && res.result === "ok") {
          this.props.dispatch({
            type: PaymentTypes.GET_CARDS_REQUEST,
            payload: {
              studentAcctId: user.studentAccountId,
              collegeAcctId: user.collegeAccountId,
            },
          });
          this.setState({
            showPopup: true,
            title: "Success",
            message: "Make primary card successfully.",
            alertType: "success",
          });
        } else {
          this.setState({
            showPopup: true,
            title: "Error",
            message: "Unable to make card at this moment.",
            alertType: "danger",
          });
        }
      },
    });
  };

  getAppendedComponents = () => {
    return (
      <div className='flx align-center pt1'>
        <div className='posRel row pc align-center width100'>
          <AddCreditCard
            onAddCardCancel={this.cancelClick.bind(this)}
            onAddCardSubmit={this.addCardSubmit.bind(this)}
            variant='large'
            cardContentClass=''
            cardFooterClass='flx justify-between align-baseline pt1 width100'
          ></AddCreditCard>
        </div>
      </div>
    );
  };

  /**
   * renders alert
   */
  renderAlertMessage = () => {
    return (
      <SnapAlert
        variant={this.state.alertType}
        message={this.state.message}
        onClose={this.togglePopup.bind(this)}
        dismissible={true}
      ></SnapAlert>
    );
  };

  /**
   * renders card on wallet screen
   * @param {*} card
   */
  renderWalletCard = (card, index) => {
    const cardKey = `carditem_${index}`;
    let primaryActionText =
      card && card.IsPrimaryCard ? "PRIMARY" : "MAKE PRIMARY";

    const expiry = card.ExpirationDate
      ? MonthYearFormat(card.ExpirationDate)
      : "/";

    // get the corresponding cardType
    const cardType = GetCardType(card.CreditCardNumber);
    // mask the card number to be displayed.
    const cardNumber = CardFormatter(card.CreditCardNumber);

    return (
      card.CreditCardNumber &&
      card.CreditCardNumber.length > 10 && (
        <div className='pv2 bordBot2' key={cardKey}>
          <div className='dynamCardContain flx justify-between align-center row'>
            <div className='dynamCardWrap'>
              <Cards
                cvc={card.CVV}
                name={card.NameOnCard}
                number={cardNumber}
                expiry={expiry}
                preview={true}
                issuer={cardType}
              />
            </div>
            <div className='dynamCardWrap cardActionContain'>
              <div className='cardActionWrap flx align-center fntGray'>
                <div
                  className={
                    card && card.IsPrimaryCard
                      ? "fntSm fntCXGYL cardAction"
                      : "fntSm  fntCXLB  cardAction cursPoint"
                  }
                  onClick={
                    card && card.IsPrimaryCard
                      ? () => {
                          return;
                        }
                      : () => this.MakePrimary(card.CreditCardId)
                  }
                >
                  {primaryActionText}
                </div>
                <span className='pl2 pr2'>|</span>
                <div
                  className='fntSm fntCXLB cardAction cursPoint'
                  onClick={() => this.RemoveCard(card.CreditCardId)}
                >
                  REMOVE
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    );
  };

  render() {
    const { payment } = this.props;

    const cards =
      payment && payment.CreditsCards && payment.CreditsCards.length > 0
        ? payment.CreditsCards
        : [];
    const walletCards = SortArrayBasedOnKey(cards, "IsPrimaryCard", "DSC");

    return (
      <div className='mv2 mh2'>
        <div className='row pc bgWhite bordRadius3 shadow'>
          <div className='col-lg-8 col-md-12 accountBalanceWrap'>
            <div className='ph2 pv3'>
              <div className='pb2'>
                <div className='flx row pc align-center'>
                  <div className='col-9 ph0'>
                    <p className='eWalletTitle fntCXLB mb0'>
                      <span className='fntCXLB fal fa-money-check-alt mr1'></span>
                      MANAGE PAYMENT METHODS
                    </p>
                  </div>
                  <div className='col-3'>
                    <button
                      onClick={this.handleADDClick.bind(this)}
                      className='btn btn-submit width100 shadow-sm'
                    >
                      ADD CARD
                    </button>
                  </div>
                </div>
              </div>

              {walletCards &&
                walletCards.length > 0 &&
                walletCards.map((card, index) =>
                  this.renderWalletCard(card, index)
                )}

              {this.state.showPopup ? (
                <div className='confirmationPopContainer'>
                  {this.renderAlertMessage()}
                </div>
              ) : null}

              {this.state.showAddCardPopup && (
                <div className='confirmationPopContainer'>
                  <div className='bgWhite pt3 pb1-5 ph2 posRel shadow bordRadius3 addCardWrap'>
                    <div className='posRel confirmationContent '>
                      <div className='addIconWrap posAbs bgBlue shadow'>
                        <span className='fal fa-money-check-alt addCardIcon fntWhite'></span>
                      </div>
                      <div className='fntXLg fntBold tac fntGray confirmationTitle'>
                        Add New Card
                      </div>
                      {this.getAppendedComponents()}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <AccountBalance
            styleName='width100'
            abContain='col-lg-4 col-md-12 ph0 ewalletAB'
          />
        </div>
      </div>
    );
  }
}

// get the redux state and attach it to map state to props
const mapStateToProps = (state) => ({
  payment: state.Payment,
  user: state.User,
});

export default connect(mapStateToProps, null)(Wallet);
