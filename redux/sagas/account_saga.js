import { put, takeLatest } from "redux-saga/effects";

import { AccountTypes } from "../action_types/account_types";
import { LoaderTypes } from "../action_types/loader_types";

import FetchAccounts from "../../services/AccountServices";

function* getAccountService({ payload, callback }) {
  yield put({ type: LoaderTypes.LOADER_START });
  try {
    const res = yield FetchAccounts(payload);
    yield put({
      type: AccountTypes.GET_STUDENTACCOUNT_SUCCESS,
      data: res.data,
    });
    // console.log("account_saga", res.data);
    if (callback) {
      callback(res.data);
    }
  } catch (e) {
    yield put({ type: AccountTypes.GET_STUDENTACCOUNT_FAILURE });
  }
  yield put({ type: LoaderTypes.LOADER_STOP });
}

export default function* AccountSaga() {
  yield takeLatest(AccountTypes.GET_STUDENTACCOUNT_REQUEST, getAccountService);
}
