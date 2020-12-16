import { AccountTypes } from "./../action_types/account_types";

const initialState = {
  services: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AccountTypes.GET_STUDENTACCOUNT_SUCCESS: {
      return {
        ...state,
        services: [...action.data],
      };
    }
    case AccountTypes.GET_STUDENTACCOUNT_FAILURE: {
      alert("Error while fetching account");
      return state;
    }
    default:
      return state;
  }
};
