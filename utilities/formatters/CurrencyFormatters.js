/**
 * currency formatter file
 */

/**
 * formats the amount to us format and appends 2 decimal digits
 */
export const AmountFormatter = (amount) => {
  let formattedAmount = "$0.00";
  try {
    if (amount) {
      formattedAmount = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
    }
  } catch (error) {
    console.log("Amount Formatter error in currency", error);
  }

  return formattedAmount;
};

export const CardFormatter = (card) => {
  let formattedCard = "";
  try {
    if (card) {
      formattedCard = card.replace(/[^\w]/g, "").replace(/\d(?=\d{4})/g, "*");
    }
  } catch (error) {
    console.log("Card Formatter error", error);
  }
  return formattedCard;
};
