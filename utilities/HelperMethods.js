import queryString from "query-string";
import Payment from "payment";
import _ from "lodash";

/**
 *  Gets Query String value by name from URL
 */
export const GetQueryStringValue = (key) => {
  let query_token = null;
  try {
    /**
     * retrieve the query string parameter and set it to query token
     */
    const values = queryString.parse(window.location.search);
    if (values) {
      query_token = values[key];
    }
  } catch (error) {
    console.log("Get query String Value Error", error);
  }

  return query_token;
};

/**
 *  Gets credit card type based on number
 */
export const GetCardType = (number) => {
  let cardType = "";
  try {
    if (number && number.length > 10) {
      cardType = Payment.fns.cardType(number);
    }
  } catch (error) {
    console.log("Get card type error", error);
  }

  return cardType;
};

export const SortServicesBasedOnDueDate = (services) => {
  let parsedServices = [];

  if (services && services.length > 0) {
    parsedServices = _.sortBy(services, "DueDate");
  }

  return parsedServices;
};

export const SortArrayBasedOnKey = (list, key, order) => {
  let parsedList = [];

  if (list && list.length > 0) {
    parsedList = _.sortBy(list, key);
  }

  if (order && order === "DSC") {
    parsedList = parsedList.reverse();
  }

  return parsedList;
};

export const GetArrayValueBasedOnKey = (list, key, value, returnKeyValue) => {
  let parsedValue = "";
  let parsedIndex = -5;

  // find first array object with matched key and value
  if (list && list.length > 0) {
    parsedIndex = _.findIndex(list, key, value);
  }

  if (parsedIndex !== -5 && parsedIndex > -1) {
    parsedValue = list[parsedIndex][returnKeyValue];
  }

  return parsedValue;
};
