import { put, takeLatest } from "redux-saga/effects";

import { CollegeAdminTypes } from "../action_types/college_admin_types";
import { LoaderTypes } from "../action_types/loader_types";

import {
  FetchAllStudents,
  GroupUploadCSV,
} from "../../services/CollegeAdminServices";

function* getAllStudents({ payload, callback }) {
  yield put({ type: LoaderTypes.LOADER_START });
  try {
    // console.log("make get all student api call", payload);
    const res = yield FetchAllStudents(payload);
    yield put({
      type: CollegeAdminTypes.GET_All_STUDENT_SUCCESS,
      data: res.data,
    });
    // console.log("college_admin_saga", res.data);
    if (callback) {
      callback(res.data);
    }
  } catch (e) {
    yield put({ type: CollegeAdminTypes.GET_All_STUDENT_FAILURE });
  }
  yield put({ type: LoaderTypes.LOADER_STOP });
}

function* groupStudentUpload({ payload, callback }) {
  yield put({ type: LoaderTypes.LOADER_START });
  try {
    const res = yield GroupUploadCSV(payload);
    yield put({
      type: CollegeAdminTypes.GROUP_UPLOAD_STUDENTS_SUCCESS,
      data: res.data,
    });
    if (callback) {
      callback(res);
    }
    // console.log("add branding", res.data);
  } catch (e) {
    yield put({ type: CollegeAdminTypes.GROUP_UPLOAD_STUDENTS_FAILURE });
    callback({ result: "error" });
  }
  yield put({ type: LoaderTypes.LOADER_STOP });
}

export default function* CollegeAdminSaga() {
  yield takeLatest(CollegeAdminTypes.GET_All_STUDENT_REQUEST, getAllStudents);
  yield takeLatest(
    CollegeAdminTypes.GROUP_UPLOAD_STUDENTS_REQUEST,
    groupStudentUpload
  );
}
