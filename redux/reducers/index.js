import { combineReducers } from "redux";
import UserReducer from "./user_reducer";
import AccountReducer from "./account_reducer";
import HistoryReducer from "./history_reducer";
import PaymentReducer from "./payment_reducer";
import StatementReducer from "./statement_reducer";
import CampusAdminReducer from "./campus_admin_reducer";
import StatesReducer from "./states_reducer";
import CollegeAdminReducer from "./college_admin_reducer";

const RootReducer = combineReducers({
  User: UserReducer,
  Account: AccountReducer,
  History: HistoryReducer,
  Payment: PaymentReducer,
  Statement: StatementReducer,
  Colleges: CampusAdminReducer,
  States: StatesReducer,
  Students: CollegeAdminReducer,
});

export default RootReducer;
