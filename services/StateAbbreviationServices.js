/**
 * Service file for all admin colleges
 */
import { isEmpty, isNull } from "lodash";

import GenericAPIService from "./GenericRestService";

const GetStatePath = "/StateAbbreviation";

export const FetchAllStates = async (payload) => {
  let response = [];
  try {
    if (!isNull(payload) && !isEmpty(payload)) {
      //TODO: when we are filtering college
    } else {
      response = await GenericAPIService(GetStatePath, "", "GET", "", "json");
    }
  } catch (error) {
    console.log("error while fetching all states", error);
  }
  return response;
};
