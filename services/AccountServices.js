/**
 * API call for Account Services
 */
import { isEmpty, isNull } from "lodash";

import GenericAPIService from "./GenericRestService";

const RelativePath = "/StudentAccountService";

const FetchAccounts = async (payload) => {
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
    const updateURL = RelativePath + "?" + paramURL;
    response = await GenericAPIService(updateURL, "", "GET", "", "json");
  } catch (error) {
    console.log("error while fetching data from accounts", error);
  }
  return response;
};

export default FetchAccounts;
