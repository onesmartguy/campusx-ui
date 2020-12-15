import Head from 'next/head'
import SiteLayout from '@layouts/SiteLayout'
import './login.module.scss'
export default function Home() {
    return (
        <SiteLayout>
    <div className="pre-loader"></div>
    <div className="app-content content">
        <div className="content-wrapper">
            <div className="content-header row p-0">
                <div className="loginNavbar">
                    <div>NEED HELP?</div>
                    <div>FIND YOUR SCHOOL</div>
                    <div>SUPPORT</div>
                </div>
            </div>
            <div className="content-body">
                <div className='sectionContainer'>
                    <div className="col-4">
                        <section className="flexbox-container">
                            <div className="col-12 d-flex align-items-center justify-content-center">
                                <div className="p-0">
                                    <div className="px-2 py-2 m-0">
                                        <div className="card-header border-0 pb-0">
                                            <div className="card-title pb-4">
                                                <img src="/img/logo-Campusx-01.png" className="logoSize" alt="CampusX" />
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <div className="card-body">
                                                <p className='activateSubHeader'>CONNECTING YOU TO POSSIBILITIES</p>
                                                <p className='activateContent'>Access all campus services from one place</p>
                                                <button
                                                    type="button" 
                                                    id="ActivateButton" 
                                                    className="btn btn-primary btn-submit btn-block btn-lg">
                                                    ACTIVATE YOUR ACCOUNT
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="col-1">
                        <div className="divider"></div>
                    </div>
                    <div className="col-4">
                        <section className="flexbox-container">
                            <div className="col-12 d-flex align-items-center justify-content-center">
                                <div className="p-0">
                                    <div className="px-2 py-2 m-0">
                                        <div className="card-header border-0 pb-0">
                                            <div className="card-title text-center pb-4">
                                                <img src="/img/logo-Campusx-01.png" className="logoSize" alt="CampusX" />
                                            </div>
                                            {/* <!--<h6 className="card-subtitle line-on-side text-muted text-center font-small-3 pt-2">
                                                <span>Login to your Account</span>
                                            </h6>--> */}
                                        </div>
                                        <div className="card-content">
                                            <div className="card-body">
                                                <form className="form-horizontal">
                                                    <fieldset className="form-group position-relative has-icon-left">
                                                        <input type="email" className="form-control input-lg" id="username" placeholder="School Email Address" tabindex="1" required data-validation-required-message="Please enter your email address." />
                                                        {/* <!--<div className="form-control-position">
                                                            <i className="ft-user"></i>
                                                        </div>--> */}
                                                        <div className="help-block font-small-3"></div>
                                                    </fieldset>
                                                    <fieldset className="form-group position-relative has-icon-left">
                                                        <input type="password" className="form-control input-lg" id="password" placeholder="Password" tabindex="2" required data-validation-required-message="Please enter valid passwords." />
                                                        {/* <!--<div className="form-control-position">
                                                            <i className="la la-key"></i>
                                                        </div>--> */}
                                                        <div className="help-block font-small-3"></div>
                                                    </fieldset>
                                                    <div className="alert alert-block alert-warning cAlert fade in m-0 p-0">
                                                        <div className="p-2">
                                                            <button type="button" className="close" data-dismiss="alert">×</button>
                                                            <strong><span className="MyMessage"></span></strong>
                                                        </div>
                                                    </div>
        
                                                    <button type="button" id="loginButton" className="btn btn-primary btn-submit btn-block btn-lg">SIGN IN</button>
                                                    <div className="form-group row mt-5">
                                                        <div className="col-md-12 col-12 text-center">
                                                            <a href="recover-password.html" className="card-link">Forgot Password?</a>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="card-footer border-0 d-none">
                                            <p className="card-subtitle line-on-side text-muted text-center font-small-3 mx-2 my-1">
                                                <span>Don't have an account yet?</span>
                                            </p>
                                            <a href="register.html" className="btn btn-outline-info btn-block mt-2"><i className="ft-user"></i> Register</a>
                                        </div>
                                        <div className="d-none" id="yourBrowser"></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>                
            </div>
        </div>
    </div>
    <a href="#" id="overviewLink" className="d-none"></a>

    <footer className="footer fixed-bottom footer-light navbar-shadow">
        <p className="clearfix blue-grey lighten-2 text-sm-center mb-0 px-2">
            <span className="float-md-left d-block d-md-inline-block">
                Copyright  &copy; 2020
                <a className="text-bold-800 grey darken-2" href="http://www.payk12.com/" target="_blank">CampusX</a>
                , All rights reserved.
                </span>
        </p>
    </footer>
        </SiteLayout>
    )
}
