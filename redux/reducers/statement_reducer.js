import { StatementTypes } from "./../action_types/statement_types";

const initialState = {
  statements: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case StatementTypes.GET_STATEMENT_SUCCESS: {
      // return {
      //   ...state,
      //   statements: [...action.data],
      // };
      return {
        ...action.data,
      };
    }
    case StatementTypes.GET_STATEMENT_FAILURE: {
      alert("Error while fetching statements");
      return state;
    }
    default:
      return state;
  }
};
