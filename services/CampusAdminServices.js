/**
 * API call for campus admin services
 */
import { isEmpty, isNull } from "lodash";

import GenericAPIService from "./GenericRestService";

const CollegeAccountPath = "/CollegeAccount";
const AddCollegePath = "/CreateCollegeAccount";
const AddBrandingPath = "/UploadLogo";
const UpdateCollegePath = "/UpdateCollegeAccount";

export const FetchAllColleges = async (payload) => {
  let response = [];
  try {
    if (!isNull(payload) && !isEmpty(payload)) {
      //TODO: when we are filtering college
    } else {
      response = await GenericAPIService(
        CollegeAccountPath,
        "",
        "GET",
        "",
        "json"
      );
    }
  } catch (error) {
    console.log("error while fetching all colleges", error);
  }
  return response;
};

/**
 * service method to add college
 */
export const AddCollege = async (payload) => {
  let response = [];
  try {
    response = await GenericAPIService(
      AddCollegePath,
      "",
      "POST",
      payload,
      "json"
    );
  } catch (error) {
    console.log("error while adding new college", error);
  }
  return response;
};

/**
 * service method to add college
 */
export const AddBranding = async (payload) => {
  let response = [];
  try {
    response = await GenericAPIService(
      AddBrandingPath,
      "",
      "POST",
      payload,
      "form"
    );
  } catch (error) {
    console.log("error while adding brand info to college", error);
  }
  return response;
};

/**
 * update college account information
 * @param {*} payload
 */
export const UpdateCollege = async (payload) => {
  let response = [];
  try {
    response = await GenericAPIService(
      UpdateCollegePath,
      "",
      "PUT",
      payload,
      "json"
    );
  } catch (error) {
    console.log("error while editing college info", error);
  }
  return response;
};

/**
 * service method to onboard college
 */
export const OnBoardCollege = async (payload) => {
  let response = [];
  try {
    response = await GenericAPIService(
      CollegeAccountPath,
      "",
      "POST",
      payload,
      "json"
    );
  } catch (error) {
    console.log("error while onboarding new college", error);
  }
  return response;
};
