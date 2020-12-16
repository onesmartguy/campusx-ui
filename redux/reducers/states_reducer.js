import { StatesTypes } from "./../action_types/states_types";

const initialState = {
  states: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case StatesTypes.GET_ALL_STATES_SUCCESS: {
      return {
        ...state,
        states: [...action.data],
      };
    }
    case StatesTypes.GET_ALL_STATES_FAILURE: {
      alert("Error while fetching all states");
      return state;
    }
    default:
      return state;
  }
};
