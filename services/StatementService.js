/**
 * API call for Statements
 */
import { isEmpty, isNull } from "lodash";

import GenericAPIService from "./GenericRestService";

const RelativePath = "/TransactionStatement";

const FetchStatements = async (payload) => {
  let response = [];
  let paramURL = "";
  try {
    if (!isNull(payload) && !isEmpty(payload)) {
      // this needs to be done with get calls and not post or put calls.
      // as of now get apis are accepting parameters in query string instead of body
      const keys = Object.keys(payload);
      keys.forEach((key) => {
        paramURL = paramURL + `${key}=${payload[key]}&`;
      });
      paramURL = paramURL.slice(0, -1);
      const updateURL = RelativePath + "?" + paramURL;
      response = await GenericAPIService(updateURL, "", "GET", "", "json");
    } else {
      response = await GenericAPIService(RelativePath, "", "GET", "", "json");
    }
  } catch (error) {
    console.log("error while fetching transaction", error);
  }
  return response;
};

export default FetchStatements;
