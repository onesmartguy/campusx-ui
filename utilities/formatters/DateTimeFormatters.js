import moment from "moment";

const DefaultFormat = "MM/DD/YYYY";
const MonthYear = "MM/YYYY";
const YearMonth = "YYYY-MM";
const MonthDate = "MM/DD";
const Year = "YYYY";

export const DefaultDateFormat = (date) => {
  if (date) {
    try {
      return moment(date).format(DefaultFormat);
    } catch (e) {
      console.log("error in date time formatter", e);
    }
  }
};

export const MonthYearFormat = (date) => {
  if (date) {
    try {
      return moment(date).format(MonthYear);
    } catch (e) {
      console.log("error in date time formatter", e);
    }
  }
};

export const MonthDateFormat = (date) => {
  if (date) {
    try {
      return moment(date).format(MonthDate);
    } catch (e) {
      console.log("error in date time formatter", e);
    }
  }
};

export const GetYearFormat = (date) => {
  if (date) {
    try {
      return moment(date).format(Year);
    } catch (e) {
      console.log("error in date time formatter", e);
    }
  }
};

export const YearMonthFormat = (date) => {
  if (date) {
    try {
      return moment(date).format(YearMonth);
    } catch (e) {
      console.log("error in date time formatter", e);
    }
  }
};
