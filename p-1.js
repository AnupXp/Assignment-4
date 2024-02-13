function calculateMoney(ticketSale) {
  let result = 0;
  const ticketPrice = 120;
  const gateManCost = 500;
  const stuffCost = 50 * 8;
  if (0 >= ticketSale) {
    return "Invalid! Is not a single ticket sold?";
  } else {
    result = ticketSale * ticketPrice - gateManCost - stuffCost;
    return result;
  }
}
