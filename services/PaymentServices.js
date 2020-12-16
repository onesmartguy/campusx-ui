/**
 * API call for Card Services
 */
import { isEmpty, isNull } from "lodash";
import GenericAPIService from "./GenericRestService";

const RelativePath = "/StudentAccount";
const TransactionsPath = "/StudentTransactionDetails";
const CardsPath = "/CreditCard";

const FetchPaymentCards = async (payload) => {
  let response = [];
  let paramURL = "";
  try {
    // this needs to be done with get calls and not post or put calls.
    // as of now get apis are accepting parameters in query string instead of body
    if (!isNull(payload) && !isEmpty(payload)) {
      const keys = Object.keys(payload);
      keys.forEach((key) => {
        paramURL = paramURL + `${key}=${payload[key]}&`;
      });
    }
    paramURL = paramURL.slice(0, -1);
    const updateURL = RelativePath + "?" + paramURL;
    response = await GenericAPIService(updateURL, "", "GET", "", "json");
  } catch (error) {
    console.log("error while fetching data from payment methods", error);
  }
  return response;
};

export const AddCard = async (payload) => {
  let response = [];
  try {
    response = await GenericAPIService(CardsPath, "", "POST", payload, "json");
  } catch (error) {
    console.log("error while updating new card", error);
  }
  return response;
};

export const PaywithCC = async (payload) => {
  let response = [];
  try {
    response = await GenericAPIService(
      TransactionsPath,
      "",
      "POST",
      payload,
      "json"
    );
  } catch (error) {
    console.log("error while updating new card", error);
  }
  return response;
};

export const RemoveCard = async (payload) => {
  let response = [];
  let paramURL = "";
  try {
    // this needs to be done with get calls and not post or put calls.
    // as of now get apis are accepting parameters in query string instead of body
    if (!isNull(payload) && !isEmpty(payload)) {
      const keys = Object.keys(payload);
      keys.forEach((key) => {
        paramURL = paramURL + `${key}=${payload[key]}`;
      });
    }
    const updateURL = CardsPath + "?" + paramURL;
    response = await GenericAPIService(updateURL, "", "DELETE", "", "json");
  } catch (error) {
    console.log("error while removing card", error);
  }
  return response;
};

export const MakePrimaryCard = async (payload) => {
  let response = [];
  let paramURL = "";
  try {
    // // this needs to be done with get calls and not post or put calls.
    // // as of now get apis are accepting parameters in query string instead of body
    if (!isNull(payload) && !isEmpty(payload)) {
      const keys = Object.keys(payload);
      keys.forEach((key) => {
        paramURL = paramURL + `${key}=${payload[key]}&`;
      });
    }
    paramURL = paramURL.slice(0, -1);
    const updateURL = CardsPath + "?" + paramURL;
    response = await GenericAPIService(updateURL, "", "PUT", "", "json");
  } catch (error) {
    console.log("error while making primary card", error);
  }
  return response;
};

export default FetchPaymentCards;
