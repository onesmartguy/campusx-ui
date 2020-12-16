import { put, takeLatest } from "redux-saga/effects";

import { CampusAdminTypes } from "../action_types/campus_admin_types";
import { LoaderTypes } from "../action_types/loader_types";

import {
  FetchAllColleges,
  AddCollege,
  AddBranding,
  UpdateCollege,
} from "../../services/CampusAdminServices";

function* getAllColleges({ payload, callback }) {
  yield put({ type: LoaderTypes.LOADER_START });
  try {
    // console.log("make get all collge api call", payload);
    const res = yield FetchAllColleges(payload);
    yield put({
      type: CampusAdminTypes.GET_All_COLLEGE_SUCCESS,
      data: res.data,
    });
    // console.log("campus_admin_saga", res.data);
    if (callback) {
      callback(res.data);
    }
  } catch (e) {
    yield put({ type: CampusAdminTypes.GET_All_COLLEGE_FAILURE });
  }
  yield put({ type: LoaderTypes.LOADER_STOP });
}

function* addCollege({ payload, callback }) {
  yield put({ type: LoaderTypes.LOADER_START });
  try {
    const res = yield AddCollege(payload);
    yield put({
      type: CampusAdminTypes.ADD_COLLEGE_SUCCESS,
      data: res.data,
    });

    if (callback) {
      callback(res);
    }
    // console.log("add college", res.data);
  } catch (e) {
    yield put({ type: CampusAdminTypes.ADD_COLLEGE_FAILURE });
    callback({ result: "error" });
  }
  yield put({ type: LoaderTypes.LOADER_STOP });
}

function* addBrandingInfo({ payload, callback }) {
  yield put({ type: LoaderTypes.LOADER_START });
  try {
    const res = yield AddBranding(payload);
    yield put({
      type: CampusAdminTypes.ADD_BRANDING_SUCCESS,
      data: res.data,
    });
    if (callback) {
      callback(res);
    }
    // console.log("add branding", res.data);
  } catch (e) {
    yield put({ type: CampusAdminTypes.ADD_BRANDING_FAILURE });
    callback({ result: "error" });
  }
  yield put({ type: LoaderTypes.LOADER_STOP });
}

function* updateCollege({ payload, callback }) {
  yield put({ type: LoaderTypes.LOADER_START });
  try {
    const res = yield UpdateCollege(payload);
    yield put({
      type: CampusAdminTypes.UPDATE_COLLEGE_SUCCESS,
      data: res.data,
    });

    if (callback) {
      callback(res);
    }
    // console.log("update college", res.data);
  } catch (e) {
    yield put({ type: CampusAdminTypes.UPDATE_COLLEGE_FAILURE });
    callback({ result: "error" });
  }
  yield put({ type: LoaderTypes.LOADER_STOP });
}

export default function* CampusAdminSaga() {
  yield takeLatest(CampusAdminTypes.GET_All_COLLEGE_REQUEST, getAllColleges);
  yield takeLatest(CampusAdminTypes.ADD_COLLEGE_REQUEST, addCollege);
  yield takeLatest(CampusAdminTypes.ADD_BRANDING_REQUEST, addBrandingInfo);
  yield takeLatest(CampusAdminTypes.UPDATE_COLLEGE_REQUEST, updateCollege);
}
