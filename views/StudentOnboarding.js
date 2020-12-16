import React, { Component } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import UserInformation from "../components/shared/UserInformation";
import BankInformation from "../components/onBoard/shared/BankInformation";
import CreditCardInformation from "../components/onBoard/shared/CreditCardInformation";
import SnapAlert from "../components/feedbacks/SnapAlert";
import { AddUser } from "../services/UserServices";

class StudentOnboarding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      title: null,
      message: null,
      alertType: "default",
      eventKey: 0,
      termsCheck: false,
    };
  }

  /** handle terms check click */
  handleTermsCheck(evt) {
    this.setState({ termsCheck: evt.target.checked });
  }

  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  };

  /**
   * callback method for receiving updated user information
   */
  addUserInfo = (info) => {
    console.log("User Information", info);
    this.setState({
      eventKey: 1,
    });
  };

  /**
   * callback method for receiving updated credit card information
   */
  addCreditCardInfo = (info) => {
    console.log("Credit Card Information", info);
    this.setState({
      eventKey: 2,
    });
  };

  /**
   * callback method for receiving updated bank information
   */
  addBankInfo = (info) => {
    console.log("Bank Information", info);
    this.setState({
      eventKey: 3,
    });
  };

  AddStudent = async () => {
    const studentInfo = {
      // id: Math.floor(Math.random() * 100) + 1,
      isActive: true,
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    };

    const response = await AddUser(studentInfo);
    if (response.data != null) {
      this.setState({
        showPopup: true,
        title: "Success",
        message: "Student added successfully",
        alertType: "success",
      });
      // TODO: Integrate the Start activation api
      this.props.history.push("/pages/login.html");
    } else {
      this.setState({
        showPopup: true,
        title: "Error",
        message: "Unable to add student at this moment.",
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
   * render card content
   */
  renderStudentInformation = () => {
    return (
      <UserInformation
        onBack={null}
        onNext={this.addUserInfo.bind(this)}
        variant='student'
      ></UserInformation>
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
                onClick={() => this.AddStudent()}
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
                    <p className='fntCXDB fntXSm'>Update Your Information</p>
                    <Tabs
                      id='studentOnBoarding'
                      activeKey={this.state.eventKey}
                    >
                      <Tab eventKey={0} title='Student Information'>
                        {this.renderStudentInformation()}
                      </Tab>

                      <Tab eventKey={1} title='Credit Card Details'>
                        {this.renderCreditCardInformation()}
                      </Tab>
                      <Tab eventKey={2} title='Bank Details'>
                        {this.renderBankDetails()}
                      </Tab>
                      <Tab eventKey={3} title='Terms & Submit'>
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

export default StudentOnboarding;
