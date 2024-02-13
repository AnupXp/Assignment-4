function monthlySavings(arr, livingCost) {
  let sum = 0;
  if (Array.isArray(arr) === true && typeof livingCost === "number") {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 3000) {
        sum = sum + arr[i] - (arr[i] * 20) / 100;
      } else {
        sum = sum + arr[i];
      }
    }
  } else {
    return "invalid input";
  }
  const income = sum - livingCost;
  if (income >= 0) {
    return income;
  } else {
    return "earn more";
  }
}
