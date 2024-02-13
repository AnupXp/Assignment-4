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
