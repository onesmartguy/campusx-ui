import React, { Component } from 'react';


class Header extends React.Component {

    render() {
        return (
            <div className="posFix campusXHeader ph2 pv1 width100 bgWhite shadow-sm boisBar">
                <div className="flx justify-between align-center">
                    <div className="col-4">
                        LOGO
                    </div>
                    <div className="flx align-center col-8">
                        <div className="flx align-center width100 justify-flexEnd mr2">
                            <p className="fntBold mb0 mr1">WELCOME, </p>
                            <span className="fa fa-caret-down mt0-5"></span>
                        </div>
                        <div>
                            <span className="fal fa-user-circle campusXUser"></span>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

export default Header