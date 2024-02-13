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

function checkName(name) {
  if (typeof name === "string") {
    name = name.toLowerCase();
    const array = ["a", "y", "i", "e", "o", "u", "w"];
    const lastLetter = name[name.length - 1];
    if (array.includes(lastLetter)) {
      return "Good Name";
    } else {
      return "Bad Name";
    }
  } else {
    return "Invalid ! Please insert a string.";
  }
}

function deleteInvalids(array) {
  if (Array.isArray(array) === true) {
    const mod = [];
    for (const element of array) {
      if (typeof element === "number" && isNaN(element) !== true) {
        mod.push(element);
      }
    }
    return mod;
  } else {
    return "Invalid! Please input only Array.";
  }
}

function password(obj) {
  if (
    obj.name !== undefined &&
    obj.birthYear !== undefined &&
    obj.siteName !== undefined
  ) {
    const modify = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
    const yourPass = modify + "#" + obj.name + "@" + obj.birthYear;
    return yourPass;
  } else {
    return "invalid !";
  }
}

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
