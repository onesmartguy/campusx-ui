﻿const PaymentTypes = {
  // Payment Card types
  GET_CARDS_REQUEST: "GET_CARDS_REQUEST",
  GET_CARDS_SUCCESS: "GET_CARDS_SUCCESS",
  GET_CARDS_FAILURE: "GET_CARDS_FAILURE",

  // Add Fund types
  UPDATE_FUND_REQUEST: "UPDATE_FUND_REQUEST",
  UPDATE_FUND_SUCCESS: "UPDATE_FUND_SUCCESS",
  UPDATE_FUND_FAILURE: "UPDATE_FUND_FAILURE",

  // Deduct Fund types
  DEDUCT_FUND_REQUEST: "DEDUCT_FUND_REQUEST",
  DEDUCT_FUND_SUCCESS: "DEDUCT_FUND_SUCCESS",
  DEDUCT_FUND_FAILURE: "DEDUCT_FUND_FAILURE",

  // Add Card types
  UPDATE_CARD_REQUEST: "UPDATE_CARD_REQUEST",
  UPDATE_CARD_SUCCESS: "UPDATE_CARD_SUCCESS",
  UPDATE_CARD_FAILURE: "UPDATE_CARD_FAILURE",

  // Remove Card types
  REMOVE_CARD_REQUEST: "REMOVE_CARD_REQUEST",
  REMOVE_CARD_SUCCESS: "REMOVE_CARD_SUCCESS",
  REMOVE_CARD_FAILURE: "REMOVE_CARD_FAILURE",

  //Primary Card Actions
  PRIMARY_CARD_REQUEST: "PRIMARY_CARD_REQUEST",
  PRIMARY_CARD_SUCCESS: "PRIMARY_CARD_SUCCESS",
  PRIMARY_CARD_FAILURE: "PRIMARY_CARD_FAILURE",

  // pay with Credit Card
  PAY_WITH_CC_REQUEST: "PAY_WITH_CC_REQUEST",
  PAY_WITH_CC_SUCCESS: "PAY_WITH_CC_SUCCESS",
  PAY_WITH_CC_FAILURE: "PAY_WITH_CC_FAILURE",
};

export { PaymentTypes };
