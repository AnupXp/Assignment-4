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
