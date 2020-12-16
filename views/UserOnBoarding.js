import React, { Component } from "react";

import UserInformation from "../components/shared/UserInformation";
import SnapAlert from "../components/feedbacks/SnapAlert";

import { GetQueryStringValue } from "../utilities/HelperMethods";
import { OnBoardUser } from "../services/UserServices";

class UserOnboarding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      title: null,
      message: null,
      alertType: "default",
    };
  }

  /**
   * callback method for receiving updated bank information
   */
  addUserInfo = (info) => {
    this.onSaveClick(info);
  };

  onSaveClick = async (info) => {
    const userInfo = {
      id: GetQueryStringValue("id"),
      isActive: true,
      email: info.email,
      password: info.pwd,
      firstName: info.fn,
      lastName: info.ln,
    };

    try {
      const response = await OnBoardUser(userInfo);

      if (response.data != null) {
        this.setState({
          showPopup: true,
          title: "Success",
          message: "User added successfully",
          alertType: "success",
        });
      } else {
        this.setState({
          showPopup: true,
          title: "Error",
          message: "Unable to add user at this moment.",
          alertType: "danger",
        });
      }
    } catch (error) {
      console.log("error while onboarding user", error);
      this.setState({
        showPopup: true,
        title: "Error",
        message: "Unable to add user at this moment.",
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

  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  };

  /**
   * render card content
   */
  renderCardContent = () => {
    return (
      <UserInformation
        onBack={null}
        onNext={this.addUserInfo.bind(this)}
        variant='user'
      ></UserInformation>
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

export default UserOnboarding;
