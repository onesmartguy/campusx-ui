import { HistoryTypes } from "./../action_types/history_types";

const initialState = {
  historyItems: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HistoryTypes.GET_HISTORY_SUCCESS: {
      return {
        ...state,
        historyItems: [...action.data],
      };
    }
    case HistoryTypes.FILTER_HISTORY_SUCCESS: {
      return {
        ...state,
        historyItems: [...action.data],
      };
    }
    case HistoryTypes.GET_HISTORY_FAILURE: {
      alert("Error while fetching history");
      return state;
    }
    case HistoryTypes.FILTER_HISTORY_FAILURE: {
      alert("Error while filtering payment history");
      return state;
    }
    default:
      return state;
  }
};
