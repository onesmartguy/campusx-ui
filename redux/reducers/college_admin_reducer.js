import { CollegeAdminTypes } from "./../action_types/college_admin_types";

const initialState = {
  students: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CollegeAdminTypes.GET_All_STUDENT_SUCCESS: {
      // return {
      //   ...state,
      //   students: [...action.data],
      // };
      return {
        ...action.data,
      };
    }
    case CollegeAdminTypes.GET_All_STUDENT_FAILURE: {
      alert("Error while fetching all students");
      return state;
    }
    default:
      return state;
  }
};
