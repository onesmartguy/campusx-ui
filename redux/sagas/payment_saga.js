import { put, takeLatest } from "redux-saga/effects";

import { PaymentTypes } from "../action_types/payment_types";
import { LoaderTypes } from "../action_types/loader_types";

import FetchPaymentCards, {
  AddCard,
  PaywithCC,
  RemoveCard,
  MakePrimaryCard,
} from "../../services/PaymentServices";
import AddStudentFunds, {
  DeductStudentFunds,
} from "../../services/StudentService";

function* getPaymentCards({ payload }) {
  yield put({ type: LoaderTypes.LOADER_START });
  try {
    const res = yield FetchPaymentCards(payload);
    yield put({
      type: PaymentTypes.GET_CARDS_SUCCESS,
      data: res.data,
    });
    // console.log("payment_saga", res.data);
  } catch (e) {
    yield put({ type: PaymentTypes.GET_CARDS_FAILURE });
  }
  yield put({ type: LoaderTypes.LOADER_STOP });
}

function* updateFundsToBalance({ payload, callback }) {
  yield put({ type: LoaderTypes.LOADER_START });
  try {
    const res = yield AddStudentFunds(payload);
    yield put({
      type: PaymentTypes.UPDATE_FUND_SUCCESS,
      data: res.data,
    });

    if (callback) {
      callback(res);
    }
    // console.log("add fund", res.data);
  } catch (e) {
    // yield put({ type: PaymentTypes.UPDATE_FUND_FAILURE });
    callback({ result: "error" });
  }
  yield put({ type: LoaderTypes.LOADER_STOP });
}

function* updateCards({ payload, callback }) {
  yield put({ type: LoaderTypes.LOADER_START });
  try {
    const res = yield AddCard(payload);
    yield put({
      type: PaymentTypes.UPDATE_CARD_SUCCESS,
      data: res.data,
    });

    if (callback) {
      callback(res);
    }
    // console.log("add fund", res.data);
  } catch (e) {
    yield put({ type: PaymentTypes.UPDATE_CARD_FAILURE });
    callback({ result: "error" });
  }
  yield put({ type: LoaderTypes.LOADER_STOP });
}

function* deductFundsFromBalance({ payload, callback }) {
  yield put({ type: LoaderTypes.LOADER_START });
  try {
    const res = yield DeductStudentFunds(payload);
    yield put({
      type: PaymentTypes.DEDUCT_FUND_SUCCESS,
      data: res.data,
    });

    if (callback) {
      callback(res);
    }
    // console.log("add fund", res.data);
  } catch (e) {
    yield put({ type: PaymentTypes.DEDUCT_FUND_FAILURE });
    callback({ result: "error" });
  }
  yield put({ type: LoaderTypes.LOADER_STOP });
}

function* payWithCC({ payload, callback }) {
  yield put({ type: LoaderTypes.LOADER_START });
  try {
    const res = yield PaywithCC(payload);
    yield put({
      type: PaymentTypes.PAY_WITH_CC_SUCCESS,
      data: res.data,
    });

    if (callback) {
      callback(res);
    }
    // console.log("add fund", res.data);
  } catch (e) {
    yield put({ type: PaymentTypes.PAY_WITH_CC_FAILURE });
    callback({ result: "error" });
  }
  yield put({ type: LoaderTypes.LOADER_STOP });
}

function* removeCard({ payload, callback }) {
  yield put({ type: LoaderTypes.LOADER_START });
  try {
    const res = yield RemoveCard(payload);
    yield put({
      type: PaymentTypes.REMOVE_CARD_SUCCESS,
      data: res.data,
    });

    if (callback) {
      callback(res);
    }
  } catch (e) {
    yield put({ type: PaymentTypes.REMOVE_CARD_FAILURE });
    callback({ result: "error" });
  }
  yield put({ type: LoaderTypes.LOADER_STOP });
}

function* makePrimaryCard({ payload, callback }) {
  yield put({ type: LoaderTypes.LOADER_START });
  try {
    const res = yield MakePrimaryCard(payload);
    yield put({
      type: PaymentTypes.PRIMARY_CARD_SUCCESS,
      data: res.data,
    });

    if (callback) {
      callback(res);
    }
  } catch (e) {
    yield put({ type: PaymentTypes.PRIMARY_CARD_FAILURE });
    callback({ result: "error" });
  }
  yield put({ type: LoaderTypes.LOADER_STOP });
}

export default function* PaymentSaga() {
  yield takeLatest(PaymentTypes.GET_CARDS_REQUEST, getPaymentCards);
  yield takeLatest(PaymentTypes.UPDATE_FUND_REQUEST, updateFundsToBalance);
  yield takeLatest(PaymentTypes.UPDATE_CARD_REQUEST, updateCards);
  yield takeLatest(PaymentTypes.DEDUCT_FUND_REQUEST, deductFundsFromBalance);
  yield takeLatest(PaymentTypes.PAY_WITH_CC_REQUEST, payWithCC);
  yield takeLatest(PaymentTypes.REMOVE_CARD_REQUEST, removeCard);
  yield takeLatest(PaymentTypes.PRIMARY_CARD_REQUEST, makePrimaryCard);
}
