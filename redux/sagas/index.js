import { all } from "redux-saga/effects";

import UserSaga from "./user_saga";
import AccountSaga from "./account_saga";
import HistorySaga from "./history_saga";
import PaymentSaga from "./payment_saga";
import StatementSage from "./statement_saga";
import CampusAdminSaga from "./campus_admin_saga";
import StatesSaga from "./states_saga";
import CollegeAdminSaga from "./college_admin_saga";

export default function* RootSaga() {
  yield all([
    UserSaga(),
    AccountSaga(),
    PaymentSaga(),
    HistorySaga(),
    StatementSage(),
    CampusAdminSaga(),
    StatesSaga(),
    CollegeAdminSaga(),
  ]);
}
