import { put, takeLatest } from "redux-saga/effects";

import { StatesTypes } from "../action_types/states_types";
import { LoaderTypes } from "../action_types/loader_types";

import { FetchAllStates } from "../../services/StateAbbreviationServices";

function* getAllStates({ payload }) {
  yield put({ type: LoaderTypes.LOADER_START });
  try {
    const res = yield FetchAllStates(payload);
    yield put({
      type: StatesTypes.GET_ALL_STATES_SUCCESS,
      data: res.data,
    });
    // console.log("account_saga", res.data);
    // if (callback) {
    //   callback(res.data);
    // }
  } catch (e) {
    yield put({ type: StatesTypes.GET_ALL_STATES_FAILURE });
  }
  yield put({ type: LoaderTypes.LOADER_STOP });
}

export default function* StatesSaga() {
  yield takeLatest(StatesTypes.GET_ALL_STATES_REQUEST, getAllStates);
}
