import React, { Component } from 'react';


class LegalFooter extends React.Component {

    render() {
        return (
            <div className="latePayment mt5">
                <div className="tac fntBlue latePayTitle fntXBold"><p>LATE PAYMENT INFORMATION</p></div>
                <div className="mxW65 magAuto">
                    <div><p className="fntBlack fntSm"><span className="fntBold">Deadline Penalty:</span> A <span className="fntBold">$50</span> Fee Deadline Penalty will be assessed on outstanding Student Fee Balances on the day following the fee payment deadline for each semester.</p></div>
                    <div><p className="fntBlack fntSm"><span className="fntBold">Monthly Late Fees:</span> A monthly late fee at the rate of <span className="fntBold">21% per annum</span> (1.75% per month or $10 whichever is greater) will be assessed at the beginning of the month on any outstanding balance on the student account.</p></div>
                </div>
            </div>
        );
    }
}

export default LegalFooter