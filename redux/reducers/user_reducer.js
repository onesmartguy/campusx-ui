import { UserTypes } from "./../action_types/user_types";

const initialState = {
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UserTypes.GET_USER_SUCCESS: {
      return {
        ...action.data,
      };
    }
    case UserTypes.GET_USER_FAILURE: {
      alert("Error while fetching user");
      return state;
    }
    default:
      return state;
  }
};
