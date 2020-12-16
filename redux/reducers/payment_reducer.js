import { PaymentTypes } from "./../action_types/payment_types";

const initialState = {
  cards: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PaymentTypes.GET_CARDS_SUCCESS: {
      return {
        ...action.data,
      };
    }
    case PaymentTypes.GET_CARDS_FAILURE: {
      alert("Error while fetching payments");
      return state;
    }
    default:
      return state;
  }
};
