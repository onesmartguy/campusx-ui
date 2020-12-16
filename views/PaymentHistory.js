import React, { Component } from "react";
import { connect } from "react-redux";
import Pagination from "react-js-pagination";
import * as BsIcons from "react-icons/bs";
import _ from "lodash";

import { HistoryTypes } from "../redux/action_types/history_types";

import { AmountFormatter } from "../utilities/formatters/CurrencyFormatters";

import {
  MonthDateFormat,
  GetYearFormat,
} from "../utilities/formatters/DateTimeFormatters";

class PaymentHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      selectedAccountService: "0",
      selectedDate: "0",
      searchHistory: "",
    };
  }

  handlePageChange(pageNumber) {
    //TODO: paging functionality ToDo
    this.setState({ activePage: pageNumber });
  }

  /**
   * returns true if selected filter is true
   * @param {*} event
   */
  isSelectedDateFilter = (itemValue) => {
    if (itemValue) {
      return this.state.selectedDate === itemValue;
    }
  };

  /**
   * handle onchange for account services
   * @param {*} event
   */
  onChangeDate = (event) => {
    const value = event && event.target ? event.target.value : "";
    // default selection
    this.setState({
      selectedDate: value,
    });

    // default fetch all history records
    if (value === "0" && this.state.selectedAccountService === "0") {
      this.fetchServicesAsync();
    } else {
      // filter for specific selection
      const { user } = this.props;
      const payload = {
        StudentAccountId: user.studentAccountId,
        Days: parseInt(value),
        AccountServiceId:
          this.state.selectedAccountService !== "0"
            ? this.state.selectedAccountService
            : null,
      };
      try {
        this.props.dispatch({
          type: HistoryTypes.FILTER_HISTORY_REQUEST,
          payload: payload,
        });
      } catch (error) {
        console.log("unable to filter history records at this moment.", error);
      }
    }
  };

  /**
   * handle onchange for account services
   * @param {*} event
   */
  onChangeServices = (event) => {
    const value = event && event.target ? event.target.value : "";
    this.setState({
      selectedAccountService: value,
    });

    // default fetch all history records
    if (value === "0" && this.state.selectedDate === "0") {
      this.fetchServicesAsync();
    } else {
      // filter for specific selection
      const { user } = this.props;
      let payload;
      payload = {
        StudentAccountId: user.studentAccountId,
        AccountServiceId: value,
        Days: this.state.selectedDate,
        Page: this.state.activePage,
        PageSize: 100,
      };
      try {
        this.props.dispatch({
          type: HistoryTypes.FILTER_HISTORY_REQUEST,
          payload: payload,
        });
      } catch (error) {
        console.log("unable to filter history records at this moment.", error);
      }
    }
  };

  onChangeSearch = (event) => {
    const value = event && event.target ? event.target.value : "";
    console.log("search event", value, event);
    this.setState({
      searchHistory: value,
    });

    // default fetch all history records
    if (
      value === "0" &&
      this.state.selectedDate === "0" &&
      this.state.searchHistory === ""
    ) {
      this.fetchServicesAsync();
    } else {
      // filter for specific selection
      const { user } = this.props;
      let payload;
      payload = {
        StudentAccountId: user.studentAccountId,
        AccountServiceId: this.state.selectedAccountService,
        Days: this.state.selectedDate,
        SearchTerm: value,
        Page: this.state.activePage,
        PageSize: 100,
      };
      try {
        this.props.dispatch({
          type: HistoryTypes.SEARCH_HISTORY_REQUEST,
          payload: payload,
        });
      } catch (error) {
        console.log("unable to filter history records at this moment.", error);
      }
    }
  };

  /**
   * get statement data for this student
   */
  async fetchServicesAsync() {
    try {
      this.props.dispatch({
        type: HistoryTypes.GET_HISTORY_REQUEST,
      });
    } catch (error) {
      console.log("unable to get history at this moment.", error);
    }
  }

  componentDidMount() {
    this.fetchServicesAsync();
  }

  /**
   * render method to display each history record
   */
  renderHistoryRecord = (record, index) => {
    let title =
      record && record.AccountServiceName ? record.AccountServiceName : "";
    const transactionYear =
      record && record.DatePaid ? GetYearFormat(record.DatePaid) : "-";
    title = `${title} ${transactionYear}`;
    const transactionMonthDate =
      record && record.DatePaid ? MonthDateFormat(record.DatePaid) : "-";
    const transactionAmount =
      record && record.Amount
        ? AmountFormatter(record.Amount)
        : AmountFormatter();
    const recordKey = `historyrecord${index}`;

    return (
      <div
        className='flx align-center justify-between bordBot2 pv1 '
        key={recordKey}
      >
        <div>
          <p className='fntBlack fntSemiBold mb0'>{title}</p>
          <p className='fntGray fntSemiBold mb0'>{transactionMonthDate}</p>
        </div>
        <div className='fntBlack fntSemiBold mb0'>{transactionAmount}</div>
      </div>
    );
  };

  render() {
    const { services, history } = this.props;

    return (
      <div className='mv2 mh2'>
        <div className='row pc bgWhite bordRadius3 shadow'>
          <div className='ph2 pv2 width100'>
            <div className='pb2'>
              <p className='balanceTitle fntGray mb0'>
                <span className='fal fa-history mr1'></span> HISTORY
              </p>
            </div>
            <div className='pb3 filterStatementsContain'>
              <div className='filterStatementsWrap'>
                <div className='filterStatements filterBy'>
                  <label className='fntGray fntBold filterLabel'>
                    {" "}
                    Filter By:{" "}
                  </label>
                  <select
                    className='shadow-sm'
                    onChange={this.onChangeDate.bind(this)}
                  >
                    <option
                      key={0}
                      value='0'
                      selected={this.isSelectedDateFilter("0")}
                    >
                      Select Duration
                    </option>
                    <option
                      key={1}
                      value='1'
                      selected={this.isSelectedDateFilter("1")}
                    >
                      Today
                    </option>
                    <option
                      key={2}
                      value='2'
                      selected={this.isSelectedDateFilter("2")}
                    >
                      Yesterday
                    </option>
                    <option
                      key={3}
                      value='7'
                      selected={this.isSelectedDateFilter("3")}
                    >
                      Last 7 Days
                    </option>
                    <option
                      key={4}
                      value='30'
                      selected={this.isSelectedDateFilter("4")}
                    >
                      Last 30 Days
                    </option>
                    <option
                      key={5}
                      value='60'
                      selected={this.isSelectedDateFilter("4")}
                    >
                      Last 60 Days
                    </option>
                    <option
                      key={5}
                      value='90'
                      selected={this.isSelectedDateFilter("4")}
                    >
                      Last 3 Months
                    </option>
                    <option
                      key={5}
                      value='180'
                      selected={this.isSelectedDateFilter("4")}
                    >
                      Last 6 Months
                    </option>
                  </select>
                </div>
                <div className='filterStatements serviceType'>
                  <select
                    className='shadow-sm'
                    onChange={this.onChangeServices.bind(this)}
                  >
                    <option key={0} value='0'>
                      Service Type
                    </option>
                    {services &&
                      services.length > 0 &&
                      services.map(
                        (service) =>
                          service.AccountServiceId && (
                            <option
                              key={service.AccountServiceId}
                              value={service.AccountServiceId}
                            >
                              {service.AccountServiceTypeName}
                            </option>
                          )
                      )}
                  </select>
                </div>
              </div>
              <div className='filterStatements historySearch'>
                <label className='fntGray fntBold filterLabel'>Search:</label>
                <input
                  onChange={this.onChangeSearch.bind(this)}
                  className='shadow-sm'
                  type='text'
                  placeholder=''
                />
              </div>
            </div>
            <div className='ph2'>
              {history &&
                history.length > 0 &&
                history.map((record, index) =>
                  this.renderHistoryRecord(record, index)
                )}
            </div>
            <div className='pt5 flx justify-center'>
              <Pagination
                activePage={this.state.activePage}
                hideDisabled={true}
                itemClassFirst={`first-page`}
                firstPageText={<BsIcons.BsChevronDoubleLeft />}
                prevPageText={"Previous"}
                itemClassPrev={`previous-page`}
                nextPageText={"Next"}
                itemClassNext={"next-page"}
                lastPageText={<BsIcons.BsChevronDoubleRight />}
                itemClassLast={"last-page"}
                itemsCountPerPage={10}
                totalItemsCount={450}
                pageRangeDisplayed={5}
                onChange={this.handlePageChange.bind(this)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// get the redux state and attach it to map state to props
const mapStateToProps = (state) => ({
  services: state.Account.services,
  user: state.User,
  history:
    state.History && state.History.historyItems
      ? state.History.historyItems
      : [],
});

export default connect(mapStateToProps, null)(PaymentHistory);
