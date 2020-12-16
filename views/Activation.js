import React, { Component } from "react";

import SnapAlert from "../components/feedbacks/SnapAlert";
import { StartActivation } from "../services/StudentService";

class Activation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastName: false,
      email: null,
      studentID: null,
      showPopup: false,
      title: null,
      message: null,
      alertType: "default",
    };
  }

  handlelastName = (event) => {
    this.setState({ lastName: event.target.value });
  };

  handleStudentID = (event) => {
    this.setState({ studentID: event.target.value });
  };

  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  onStartActivation = async () => {
    // TODO: AS of now we don't have student id so it is accepting null.
    if (
      this.state.email &&
      this.state.email !== "" &&
      this.state.lastName &&
      this.state.lastName !== ""
    ) {
      const payload = {
        LastName: this.state.lastName,
        StudentId: this.state.studentID ? this.state.studentID : "",
        SchoolEmail: this.state.email,
      };
      try {
        const activationResponse = await StartActivation(payload);
        if (activationResponse && activationResponse.result === "ok") {
          this.props.history.push("/OnBoard/StudentOnBoard");
        }
        this.setState({
          lastName: "",
          email: "",
          studentID: "",
        });
      } catch (error) {
        console.log("error while activation", error);
      }
    } else {
      return;
    }
  };

  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup,
    });
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
  renderCardContent = () => {
    return (
      <>
        <p className='fntCXDB fntXSm'>
          Please verify the following to activate your account
        </p>
        {/* <form class='form-horizontal'> */}
        <div className='flx flx-col pb1'>
          <label className='fntDarkGray fntSemiBold fntXSm mb0-5'>
            Last Name
          </label>
          <input
            className='acInput adminInput'
            type='text'
            onChange={this.handlelastName}
          />
        </div>
        <div className='flx flx-col pb1'>
          <label className='fntDarkGray fntSemiBold fntXSm mb0-5'>
            Student ID
          </label>
          <input
            className='acInput adminInput'
            type='text'
            onChange={this.handleStudentID}
          />
        </div>
        <div className='flx flx-col pb1'>
          <label className='fntDarkGray fntSemiBold fntXSm mb0-5'>
            School Email Address
          </label>
          <input
            className='acInput adminInput'
            type='email'
            onChange={this.handleEmail}
          />
        </div>

        <div className='flx justify-between align-baseline bot0 width100 mt2'>
          <button
            className='btn btn-CX-submit fntSemiBold width100 shadow-sm fntXSm'
            onClick={() => this.onStartActivation()}
          >
            Start Activation
          </button>
        </div>
        {/* </form> */}
      </>
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
            <div class='col-md-4 col-10 p-0'>
              <div class='px-2 py-2 m-0'>
                <div class='card-header border-0 pb-0 onboardCardHeader'>
                  <div class='card-title text-center'>{this.renderLogo()}</div>
                </div>
                <div class='card-content'>
                  <div class='card-body pt0'>{this.renderCardContent()}</div>
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

export default Activation;
