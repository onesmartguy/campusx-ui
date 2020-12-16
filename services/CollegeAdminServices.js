/**
 * API call for college admin services
 */
import { isEmpty, isNull } from "lodash";

import GenericAPIService from "./GenericRestService";

const GetAllStudentsPath = "/StudentAccount";
const GroupUploadPath = "/UploadStudentAccounts";
const CollegeAccountPath = "/CollegeAccount";
const GetStudentsPath = "/students";

export const FetchAllStudents = async (payload) => {
  let response = [];
  let paramURL = "";
  let collegeId = "";
  try {
    if (!isNull(payload) && !isEmpty(payload)) {
      //TODO: when we are filtering students
      const keys = Object.keys(payload);
      keys.forEach((key) => {
        if (key !== "collegeAcctId") {
          paramURL = paramURL + `${key}=${payload[key]}&`;
        } else {
          collegeId = payload[key];
        }
      });
      paramURL = paramURL.slice(0, -1);
      const updateURL =
        CollegeAccountPath + GetStudentsPath + `/${collegeId}` + "?" + paramURL;
      response = await GenericAPIService(updateURL, "", "GET", "", "json");
    } else {
      // response = await GenericAPIService(
      //   CollegeAccountPath,
      //   "",
      //   "GET",
      //   "",
      //   "json"
      // );
    }
  } catch (error) {
    console.log("error while fetching all students", error);
  }
  return response;
};

/**
 * service method to upload students csv
 */
export const GroupUploadCSV = async (payload) => {
  let response = [];
  try {
    response = await GenericAPIService(
      GroupUploadPath,
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
