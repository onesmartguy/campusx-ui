/**
 * Generic client service to make api call which included (GET, PUT, POST)
 */
import { set, isEmpty, isNull } from "lodash";
import { SERVICE_ERROR } from "../utilities/Constants";

const BASE_API_URL = window.location.origin;
const BASE_API_RELATIVE_URL = "/api";

/**
 * method to handle response received from server
 * @param {*} response
 */
const HandleGenericResponse = async (response) => {
  console.log("--------REST SERVICE RESPONSE STARTED-----");

  if (response.ok || response.status == 200 || response.status == 204) {
    // console.log("--- get content-type");
    let contentLength = null,
      contentType = null;
    try {
      contentLength =
        response.headers.has("content-length") &&
        response.headers.get("content-length");
      contentType =
        response.headers.has("content-type") &&
        response.headers.get("content-type");
      // console.log(
      //   "content-type and content-length",
      //   contentType,
      //   contentLength
      // );
    } catch (error) {
      console.log("No content type or content length found in response");
      console.log("Response header error", error);
    }
    // console.log("--- Parse response based on contentType");
    if (!isNull(contentType) && contentType === "text/html;charset=UTF-8") {
      console.log("handleResponse as text");
      return response.text();
    } else if (
      !isNull(contentType) &&
      contentType === "application/json; charset=utf-8"
    ) {
      console.log("handleResponse as Json");
      const parsedResponse = response.json();
      console.log("--------REST SERVICE RESPONSE END-----");
      return parsedResponse;
    } else {
      console.log("handleResponse without content type");
      return {
        status: response.status,
        ok: response.ok,
      };
    }
  } else {
    console.log("--------REST SERVICE RESPONSE ERROR -----", response.status);
    throw new Error(response.status);
  }
};

/**
 * method to handle generic response errors
 * @param {*} error
 */
const HandleGenericError = async (error) => {
  const errorObj = { [SERVICE_ERROR]: true, result: "error" };
  if (error.includes(401)) {
    return {
      ...errorObj,
      status: 401,
      message: "Please sign in again.", //dummy values for messages, no need for translations
    };
  } else if (error.includes(403)) {
    return {
      ...errorObj,
      status: 403,
      message: "Unauthorized, You do not have sufficient permission.", //dummy values for messages, no need for translations
    };
  } else if (error.includes(404)) {
    return {
      ...errorObj,
      status: 404,
      message: "Not found.", //dummy values for messages, no need for translations
    };
  } else if (error.includes(500)) {
    return {
      ...errorObj,
      status: 500,
      message: "Please try again after sometime.", // todo: update appropriate url
    };
  } else if (error.includes("Network request failed")) {
    return {
      ...errorObj,
      status: 1001,
      message: "Please check your internet connection.", //dummy values for messages, no need for translations
    };
  } else {
    return {
      ...errorObj,
      status: 503, //update when actual off line capability added
      message: "Something went wrong!", // todo: update appropriate url
    };
  }
};

/**
 * method to make api calls
 * @param {*} apiRelativePath
 * @param {*} token
 * @param {*} method
 * @param {*} params
 * @param {*} contentType
 */
const GenericAPIService = async (
  apiRelativePath,
  token,
  method,
  params,
  contentType
) => {
  console.log("-------------REST SERVICE STARTED----------");
  //TODO: Once Config is set properly it should come from env file
  const url = BASE_API_URL + BASE_API_RELATIVE_URL + apiRelativePath;
  // console.log(url);
  const headers = {};
  const acceptValue =
    "application/json, text/plain, */*, application/xhtml+xml,application/xml;q=0.9"; // TODO: See what accept values can be passed
  const contentValue =
    contentType === "form"
      ? "multipart/form-data" // application/x-www-form-urlencoded;charset=UTF-8
      : contentType === "access_token"
      ? "application/x-www-form-urlencoded"
      : "application/json";

  if (contentType !== "form") {
    set(headers, "Accept", acceptValue);
    set(headers, "Content-Type", contentValue);
  }

  if (token === "auth_token") {
    const bearer_token = await getStorageItem("access_token");
    set(headers, "Authorization", `Bearer ${bearer_token}`);
  }

  const reqBody = {
    method,
    headers,
  };

  // TODO - verify empty objects are not being passed.
  if (
    (!isNull(params) && !isEmpty(params) && method === "POST") ||
    (!isNull(params) && !isEmpty(params) && method === "PUT")
  ) {
    if (contentType === "json") {
      reqBody.body = JSON.stringify(params);
    }
  } else {
    if (method === "POST" || method === "PUT") {
      reqBody.body = params;
    }
  }

  // console.log("Api url", url);
  // console.log("Api reqBody", reqBody);

  try {
    const response = await fetch(url, reqBody);
    console.log("acutal response from api", response);
    const parsedResponse = await HandleGenericResponse(response);
    // console.log('internal parsed response', parsedResponse);
    console.log("-------------REST SERVICE ENDED ----------");
    return {
      status: response.status,
      result: "ok",
      data: parsedResponse,
    };
  } catch (error) {
    console.log("-------------REST SERVICE ENDED Error----------");
    console.log("Error while fetching data", error);

    // TODO - Update with appropriate messages based on error code
    return HandleGenericError(error ? error.toString() : 500);
  }
};

export default GenericAPIService;
