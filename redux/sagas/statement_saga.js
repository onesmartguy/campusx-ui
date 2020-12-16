import { put, takeLatest } from "redux-saga/effects";

import { StatementTypes } from "../action_types/statement_types";
import { LoaderTypes } from "../action_types/loader_types";

import FetchStatements from "../../services/StatementService";

function* getAllStudentStatements({ payload }) {
  yield put({ type: LoaderTypes.LOADER_START });
  try {
    const res = yield FetchStatements(payload);
    yield put({ type: StatementTypes.GET_STATEMENT_SUCCESS, data: res.data });
    // console.log("statement_saga", res.data);
  } catch (e) {
    yield put({ type: StatementTypes.GET_STATEMENT_FAILURE });
  }
  yield put({ type: LoaderTypes.LOADER_STOP });
}

export default function* StatementSaga() {
  yield takeLatest(
    StatementTypes.GET_STATEMENT_REQUEST,
    getAllStudentStatements
  );
}
