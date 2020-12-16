import { put, takeLatest } from "redux-saga/effects";

import { UserTypes } from "../action_types/user_types";
import { LoaderTypes } from "../action_types/loader_types";

import FetchUserInformation from "../../services/UserServices";

function* getUserDetails({ callback }) {
  yield put({ type: LoaderTypes.LOADER_START });
  try {
    const res = yield FetchUserInformation();
    yield put({ type: UserTypes.GET_USER_SUCCESS, data: res.data });
    // console.log("user_saga", res.data);
    if (callback) {
      callback(res.data);
    }
  } catch (e) {
    yield put({ type: UserTypes.GET_USER_FAILURE });
  }
  yield put({ type: LoaderTypes.LOADER_STOP });
}

export default function* UserSaga() {
  yield takeLatest(UserTypes.GET_USER_REQUEST, getUserDetails);
}
