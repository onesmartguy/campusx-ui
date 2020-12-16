/**
 * API call for Users information
 */
import GenericAPIService from "./GenericRestService";

const RelativePath = "/User";

const FetchUserInformation = async () => {
  let response = [];
  try {
    response = await GenericAPIService(RelativePath, "", "GET", "", "json");
  } catch (error) {
    console.log("error while fetching user details", error);
  }
  return response;
};

/**
 * Add user
 * @param {*} payload
 */
export const AddUser = async (payload) => {
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
    console.log("error while adding user", error);
  }
  return response;
};

/**
 * onBoard User
 * @param {*} payload
 */
export const OnBoardUser = async (payload) => {
  let response = [];
  try {
    response = await GenericAPIService(
      RelativePath,
      "",
      "PUT",
      payload,
      "json"
    );
  } catch (error) {
    console.log("error while onboarding  students", error);
  }
  return response;
};

export default FetchUserInformation;
