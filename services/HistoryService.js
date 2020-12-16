/**
 * API call for History
 */
import GenericAPIService from "./GenericRestService";
import { isEmpty, isNull } from "lodash";

const RelativePath = "/TransactionHistory";
const searchPath = "/search";

const FetchHistoryRecords = async (payload) => {
  let response = [];
  try {
    response = await GenericAPIService(RelativePath, "", "GET", "", "json");
  } catch (error) {
    console.log("error while fetching history", error);
  }
  return response;
};

export const FilterHistoryRecords = async (payload) => {
  let response = [];
  try {
    response = await GenericAPIService(
      RelativePath,
      "",
      "POST",
      payload,
      "json"
    );
  } catch (error) {
    console.log("error while fetching filtering history", error);
  }
  return response;
};

//Search History API
export const SearchHistoryRecords = async (payload) => {
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
    const updateURL = RelativePath + searchPath + "?" + paramURL;
    response = await GenericAPIService(updateURL, "", "GET", "", "json");
  } catch (error) {
    console.log("error while fetching Search history", error);
  }
  return response;
};

export default FetchHistoryRecords;
