import React, { Component } from "react";
import { connect } from "react-redux";
import Pagination from "react-js-pagination";
import * as BsIcons from "react-icons/bs";
import _ from "lodash";

import { StatementTypes } from "../redux/action_types/statement_types";

class Statements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      selectedAccountService: "0",
    };
  }

  /**
   * helper method to parse the statements response to parsed model to display statement
   *
   */
  parseData() {
    const { statement } = this.props;
    console.log("parsed data", statement);
    const dataList =
      statement && statement.Items && statement.Items.length > 0
        ? statement.Items
        : [];

    if (dataList !== undefined && dataList && dataList.length > 0) {
      const parsedList = _(dataList)
        // .reverse()
        .groupBy((x) => x.SemsterDateText)
        .map((value, key) => ({
          category: key,
          categoryItems: value,
        }))
        .value();
      return parsedList;
    } else {
      return [];
    }
  }

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
        studentAccountId: user.studentAccountId,
        accountServiceTypeId: value,
      };
      try {
        this.props.dispatch({
          type: StatementTypes.GET_STATEMENT_REQUEST,
          payload: payload,
        });
      } catch (error) {
        console.log("unable to filter history records at this moment.", error);
      }
    }
  };

  handlePageChange(pageNumber) {
    //TODO: paging functionality
    this.setState({ activePage: pageNumber });
  }

  /**
   * get statement data for this student
   */
  async fetchServicesAsync() {
    try {
      this.props.dispatch({
        type: StatementTypes.GET_STATEMENT_REQUEST,
        payload: {},
      });
    } catch (error) {
      console.log("unable to get statements at this moment.", error);
    }
  }

  componentDidMount() {
    this.fetchServicesAsync();
  }

  /**
   * method to render each individual category
   * @param {*} item
   * @param {*} index
   */
  renderCategoryItem = (item, index) => {
    const itemKey = `categoryItem${index}`;
    const { StatementAccountService } = item;
    const { AccountServiceTypeName } = StatementAccountService;

    const displayServiceName =
      AccountServiceTypeName && AccountServiceTypeName !== ""
        ? AccountServiceTypeName
        : "";

    return (
      <div className='card-body pv0' key={itemKey}>
        <div className='statementTableContain bordBot2 pv1 '>
          <div className='statementTableWrap'>
            <p className='fntBlack fntSemiBold mb0'>
              {StatementAccountService.MonthYearText}
              <span className='fntLight'>- {displayServiceName}</span>
            </p>
          </div>
          <div className='fntBlack fntSemiBold mb0 flx align-center justify-flexEnd fntSm'>
            {/*<div className='pr1'>VIEW</div>
            <span>|</span>*/}
            <div className='pl1'>DOWNLOAD PDF</div>
          </div>
        </div>
      </div>
    );
  };

  renderCategory = (list, index) => {
    const toggleTarget = `#collapse${index}`;
    const toggleKey = `collapse${index}`;
    const categoryItems = list.categoryItems;
    const categoryKey = `category${index}`;

    return (
      <div className='card mt1' key={categoryKey}>
        <div className='card-header ph0 pv0' id='headingOne'>
          <div
            className='statementsHeader cursPoint width100 ph1 pv1 fntBold flx align-center bordRadius3'
            data-toggle='collapse'
            data-target={toggleTarget}
            aria-expanded='true'
            aria-controls={toggleKey}
          >
            <span className='statementsIcon fa fa-caret-down mr1 fntLg'></span>
            {list.category}
          </div>
        </div>

        <div
          id={toggleKey}
          className='collapse show'
          aria-labelledby='headingOne'
          data-parent='#accordion'
        >
          {categoryItems &&
            categoryItems.length > 0 &&
            categoryItems.map((item, index) =>
              this.renderCategoryItem(item, index)
            )}
        </div>
      </div>
    );
  };

  render() {
    const { services, statement } = this.props;
    const parseStatementCategory = this.parseData();
    const totalRecords =
      statement && statement.TotalCount ? statement.TotalCount : 0;

    return (
      <div className='mv2 mh2'>
        <div className='row pc bgWhite bordRadius3 shadow'>
          <div className='ph2 pv2 width100'>
            <div className='statementsTitle pb2 flx align-enter justify-between ph1'>
              <div>
                <p className='balanceTitle fntGray mb0'>
                  <span className='fal fa-file-search mr1'></span> STATEMENTS
                </p>
              </div>
              <div className='filterStatements flx align-center statementsBy'>
                <div className='fntGray fntBold mr1'> Filter By: </div>
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

            <div id='accordion' className='statementsAccordian'>
              {parseStatementCategory &&
                parseStatementCategory.length > 0 &&
                parseStatementCategory.map((groupItem, index) =>
                  this.renderCategory(groupItem, index)
                )}
            </div>
            <div className='pt5 flx justify-center'>
              {totalRecords && totalRecords > 0 && (
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
                  totalItemsCount={totalRecords}
                  pageRangeDisplayed={5}
                  onChange={this.handlePageChange.bind(this)}
                />
              )}
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
  statement: state.Statement,
});

export default connect(mapStateToProps, null)(Statements);
