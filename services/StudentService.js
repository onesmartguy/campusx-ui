/**
 * API call for Payment Gateway Student Funds
 */
import GenericAPIService from "./GenericRestService";

const RelativePath = "/StudentAvailableFunds";
const RelativePathSA = "/Activation";

/**
 * Add to available funds
 * @param {*} payload
 */
const AddStudentFunds = async (payload) => {
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
    console.log("error while updating funds in students funds", error);
  }
  return response;
};

/**
 * Pay from available funds
 * @param {*} payload
 */
export const DeductStudentFunds = async (payload) => {
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
    console.log("error while updating funds in students funds", error);
  }
  return response;
};

/**
 * Start Activation for a student
 * @param {*} payload
 */
export const StartActivation = async (payload) => {
  let response = [];
  try {
    response = await GenericAPIService(
      RelativePathSA,
      "",
      "POST",
      payload,
      "json"
    );
  } catch (error) {
    console.log("error while start activation for student", error);
  }
  return response;
};

export default AddStudentFunds;
