import { CampusAdminTypes } from "./../action_types/campus_admin_types";

const initialState = {
  colleges: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CampusAdminTypes.GET_All_COLLEGE_SUCCESS: {
      return {
        ...state,
        colleges: [...action.data],
      };
    }
    case CampusAdminTypes.GET_All_COLLEGE_FAILURE: {
      alert("Error while fetching college");
      return state;
    }
    default:
      return state;
  }
};
