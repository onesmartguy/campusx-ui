import React, { Component } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AccountInformation from "../components/onBoard/college/AccountInformation";
import BusinessInformation from "../components/onBoard/college/BusinessInformation";
import PersonalInformation from "../components/onBoard/college/PersonalInformation";
import BankInformation from "../components/onBoard/shared/BankInformation";
import CreditCardInformation from "../components/onBoard/shared/CreditCardInformation";
import AddressInformation from "../components/onBoard/shared/AddressInformation";
import SnapAlert from "../components/feedbacks/SnapAlert";
import { OnBoardCollege } from "../services/CampusAdminServices";
import { GetQueryStringValue } from "../utilities/HelperMethods";

class CollegeOnboarding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      title: null,
      message: null,
      alertType: "default",
      eventKey: 0,
      termsCheck: false,
      pd: {}, //personal data information
      supd: {}, // signup info data information
      bd: {}, // business data
      addr: {}, // address information
      bacct: {}, // bank account information
      ccard: {}, // credit card information
      paybacc: {}, // pay bank account information
    };
  }

  /** handle terms check click */
  handleTermsCheck(evt) {
    this.setState({ termsCheck: evt.target.checked });
  }

  /**
   * callback method for receiving updated personal information
   */
  addPersonalInfo = (info) => {
    console.log("Personal Information", info);

    this.setState({
      eventKey: 1,
      pd: { ...info },
    });
  };

  /**
   * callback method for receiving updated account information
   */
  addAccountInfo = (info) => {
    console.log("Account Information", info);
    this.setState({
      supd: { ...info },
      eventKey: 2,
    });
  };

  /**
   * callback method for receiving updated business information
   */
  addBusinessInfo = (info) => {
    console.log("Business Information", info);
    this.setState({
      bd: { ...info },
      eventKey: 3,
    });
  };

  /**
   * callback method for receiving updated Address information
   */
  addAddressInfo = (info) => {
    console.log("Address Information", info);
    this.setState({
      addr: { ...info },
      eventKey: 4,
    });
  };

  /**
   * callback method for receiving updated credit card information
   */
  addCreditCardInfo = (info) => {
    console.log("Credit Card Information", info);
    this.setState({
      eventKey: 5,
      ccard: { ...info },
    });
  };

  /**
   * callback method for receiving updated bank information
   */
  addBankInfo = (info) => {
    console.log("Bank Information", info);
    this.setState({
      eventKey: 6,
      bacct: { ...info },
      paybacc: {
        accn: info.accn,
        accron: info.accron,
        accty: info.accty,
      },
    });
  };

  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  };

  AddCollege = async () => {
    // // console.log("state while onboarding", this.state);

    const collegeInfoPayload = {
      ActivationId: GetQueryStringValue("id"),
      CollegeAccountId: GetQueryStringValue("collegeAccId"),
      PersonalData: {
        FirstName: this.state.pd.fn,
        MiddleInitial: this.state.pd.mn,
        LastName: this.state.pd.ln,
        DateOfBirth: this.state.pd.dob,
        SocialSecurityNumber: this.state.pd.ssn,
        SourceEmail: this.state.pd.semail,
        NotificationEmail: this.state.pd.nemail,
        PhoneInformation: {
          DayPhone: this.state.pd.pphone,
          EveningPhone: this.state.pd.sphone,
        },
        ModifiedBy: this.state.pd.semail,
        CollegeAccountId: GetQueryStringValue("collegeAccId"),
      },
      SignUpData: {
        CurrencyCode: this.state.supd.curc,
        tier: this.state.supd.tier,
        ModifiedBy: this.state.pd.semail,
        CollegeAccountId: GetQueryStringValue("collegeAccId"),
      },
      BusinessData: {
        BusinessLegalName: this.state.bd.lbn,
        DoingBusinessAs: this.state.bd.dba,
        EIN: this.state.bd.ein,
        BusinessDescription: this.state.bd.bd,
        MerchantCategoryCode: this.state.bd.mc,
        MonthlyBankCardVolume: parseInt(this.state.bd.bcv),
        AverageTicket: parseInt(this.state.bd.at),
        HighestTicket: parseInt(this.state.bd.ht),
        WebsiteURL: this.state.bd.wu,
        ModifiedBy: this.state.pd.semail,
        CollegeAccountId: GetQueryStringValue("collegeAccId"),
      },
      Addresses: [
        {
          Address1: this.state.addr.address,
          Address2: "",
          ApartmentNumber: this.state.addr.aptn,
          City: this.state.addr.city,
          State: this.state.addr.state,
          Zip: this.state.addr.zip,
          Country: this.state.addr.country,
          Addresskind: this.state.addr.addresskind,
        },
        {
          Address1: this.state.addr.address,
          Address2: "",
          ApartmentNumber: this.state.addr.aptn,
          City: this.state.addr.city,
          State: this.state.addr.state,
          Zip: this.state.addr.zip,
          Country: this.state.addr.country,
          Addresskind: "Default",
        },
        {
          Address1: this.state.addr.address,
          Address2: "",
          ApartmentNumber: this.state.addr.aptn,
          City: this.state.addr.city,
          State: this.state.addr.state,
          Zip: this.state.addr.zip,
          Country: this.state.addr.country,
          Addresskind: "Mailing",
        },
      ],
      BankAccount: {
        AccountCountryCode: this.state.bacct.accode,
        AccountNumber: this.state.bacct.accn,
        RoutingNumber: this.state.bacct.accron,
        AccountOwnershipType: this.state.bacct.accowntyp,
        AccountType: this.state.bacct.accty,
        AccountName: this.state.bacct.accnm,
        BankName: this.state.bacct.accbn,
        ModifiedBy: this.state.pd.semail,
      },
      CreditCard: {
        NameOnCard: this.state.ccard.nm,
        CreditCardNumber: this.state.ccard.accn,
        ExpirationDate: this.state.ccard.expdt,
        CVV: this.state.ccard.cvv,
        ModifiedBy: this.state.pd.semail,
      },
      PaymentBank: {
        AccountNumber: this.state.paybacc.accn,
        RoutingNumber: this.state.paybacc.accron,
        AccountType: this.state.paybacc.accty,
        ModifiedBy: this.state.pd.semail,
      },
    };

    try {
      const response = await OnBoardCollege(collegeInfoPayload);
      if (response.data != null) {
        this.setState({
          showPopup: true,
          title: "Success",
          message: "College onboarding successfully",
          alertType: "success",
        });
      } else {
        this.setState({
          showPopup: true,
          title: "Error",
          message: "Unable to onboard college at this moment.",
          alertType: "danger",
        });
      }
    } catch (error) {
      console.log("error while onboarding", error);
      this.setState({
        showPopup: true,
        title: "Error",
        message: "Unable to onboard college at this moment.",
        alertType: "danger",
      });
    }
  };

  /**
   * render alert for confirmation
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
   * render terms and condition tab
   */
  renderTerms = () => {
    return (
      <div className='flx justify-flxStart align-start pb1 pt2'>
        <div className='row'>
          <div className='col-12'>
            <p>Terms and conditions related information</p>
          </div>
          <div className='col-8'>
            <Form.Group
              as={Row}
              controlId='formPlaintextEmail'
              className='align-center flex-start mb0 mt1'
            >
              <Col sm={2}>
                <Form.Check
                  type='checkbox'
                  aria-label='accepts terms'
                  onChange={this.handleTermsCheck.bind(this)}
                ></Form.Check>
              </Col>
              <Form.Label column sm='8' className='fntXSm fntGYLB mb1'>
                I Accept terms & conditions
              </Form.Label>
            </Form.Group>
          </div>
          <div className='col-8 mb0-5'>
            <div className='flx justify-between align-baseline bot0 width100'>
              <button
                className='btn btn-submit fntXSm bgBlue fntWhite shadow-sm'
                onClick={() => this.AddCollege()}
                disabled={!this.state.termsCheck}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  /**
   * render business address tab
   */
  renderAddress = () => {
    return (
      <AddressInformation
        onBack={null}
        onNext={this.addAddressInfo.bind(this)}
      ></AddressInformation>
    );
  };

  /**
   * render personal details tab
   */
  renderPersonalInfo = () => {
    return (
      <PersonalInformation
        onBack={null}
        onNext={this.addPersonalInfo.bind(this)}
      ></PersonalInformation>
    );
  };

  /**
   * render Accounts info tab
   */
  renderAccountInfo = () => {
    return (
      <AccountInformation
        onBack={null}
        onNext={this.addAccountInfo.bind(this)}
      ></AccountInformation>
    );
  };

  /**
   * render bank details tab
   */
  renderCreditCardInformation = () => {
    return (
      <CreditCardInformation
        onBack={null}
        onNext={this.addCreditCardInfo.bind(this)}
      ></CreditCardInformation>
    );
  };

  /**
   * render bank details tab
   */
  renderBankDetails = () => {
    return (
      <BankInformation
        onBack={null}
        onNext={this.addBankInfo.bind(this)}
      ></BankInformation>
    );
  };

  /**
   * render business information tab
   */
  renderBusinessInfo = () => {
    return (
      <BusinessInformation
        onBack={null}
        onNext={this.addBusinessInfo.bind(this)}
      ></BusinessInformation>
    );
  };

  /**
   * renders a logo
   */
  renderLogo = () => {
    return (
      <div className='logo'>
        <a href='/'>
          <img
            className='brand-logo'
            src='../pages/assets/img/logo-Campusx-01.png'
            alt='school logo'
          />
        </a>
      </div>
    );
  };

  render() {
    return (
      <>
        <section class='flexbox-container pt10'>
          <div class='col-12 d-flex align-items-center justify-content-center'>
            <div class='col-md-10 col-10 p-0'>
              <div class='px-2 py-2 m-0'>
                <div class='card-header border-0 pb-0 onboardCardHeader'>
                  <div class='card-title text-center'>{this.renderLogo()}</div>
                </div>
                <div class='card-content'>
                  <div class='card-body pt0'>
                    <p className='fntCXDB fntXSm'>Update College Information</p>
                    <Tabs
                      id='collegeOnBoarding'
                      activeKey={this.state.eventKey}
                    >
                      <Tab eventKey={0} title='Personal Information'>
                        {this.renderPersonalInfo()}
                      </Tab>
                      <Tab eventKey={1} title='Account Information'>
                        {this.renderAccountInfo()}
                      </Tab>
                      <Tab eventKey={2} title='Business Information'>
                        {this.renderBusinessInfo()}
                      </Tab>
                      <Tab eventKey={3} title='Business Address'>
                        {this.renderAddress()}
                      </Tab>
                      <Tab eventKey={4} title='Credit Card Details'>
                        {this.renderCreditCardInformation()}
                      </Tab>
                      <Tab eventKey={5} title='Bank Details'>
                        {this.renderBankDetails()}
                      </Tab>
                      <Tab eventKey={6} title='Terms & Submit'>
                        {this.renderTerms()}
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className='posRel'>
          {this.state.showPopup ? (
            <div className='confirmationPopContainer'>
              {this.renderAlertMessage()}
            </div>
          ) : null}
        </div>
      </>
    );
  }
}

export default CollegeOnboarding;
