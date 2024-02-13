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
