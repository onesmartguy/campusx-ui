import { put, takeLatest } from "redux-saga/effects";

import { HistoryTypes } from "../action_types/history_types";
import { LoaderTypes } from "../action_types/loader_types";

import FetchHistoryRecords, {
    FilterHistoryRecords,
    SearchHistoryRecords
} from "../../services/HistoryService";


function* getAllHistoryRecords({ callback }) {
  yield put({ type: LoaderTypes.LOADER_START });
  try {
    const res = yield FetchHistoryRecords();
    yield put({ type: HistoryTypes.GET_HISTORY_SUCCESS, data: res.data });
    // console.log("history_saga", res.data);
    if (callback) {
      callback(res.data);
    }
  } catch (e) {
    yield put({ type: HistoryTypes.GET_HISTORY_FAILURE });
  }
  yield put({ type: LoaderTypes.LOADER_STOP });
}

function* getFilteredHistoryRecords({ payload, callback }) {
  yield put({ type: LoaderTypes.LOADER_START });
  try {
    const res = yield FilterHistoryRecords(payload);
    yield put({ type: HistoryTypes.FILTER_HISTORY_SUCCESS, data: res.data });
    console.log("filter_history_saga", res.data);
    if (callback) {
      callback(res.data);
    }
  } catch (e) {
    yield put({ type: HistoryTypes.FILTER_HISTORY_FAILURE });
  }
  yield put({ type: LoaderTypes.LOADER_STOP });
}

function* getSearchHistoryRecords({ payload, callback }) {
    yield put({ type: LoaderTypes.LOADER_START });
    try {
        const res = yield SearchHistoryRecords(payload);
        yield put({ type: HistoryTypes.SEARCH_HISTORY_SUCCESS, data: res.data });
        console.log("search_history_saga", res.data);
        if (callback) {
            callback(res.data);
        }
    } catch (e) {
        yield put({ type: HistoryTypes.SEARCH_HISTORY_FAILURE });
    }
    yield put({ type: LoaderTypes.LOADER_STOP });
}

export default function* HistorySaga() {
  yield takeLatest(HistoryTypes.GET_HISTORY_REQUEST, getAllHistoryRecords);
  yield takeLatest(
    HistoryTypes.FILTER_HISTORY_REQUEST,
    getFilteredHistoryRecords
    );
    yield takeLatest(
        HistoryTypes.SEARCH_HISTORY_REQUEST,
        getSearchHistoryRecords
    );
}

