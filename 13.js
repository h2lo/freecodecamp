function typeValidation(variable, type) {
  if ((typeof (variable)) === 'number') {
    return true;
  }
  return false;
}

console.log(typeValidation(42, "number"));
console.log(typeValidation("42", "number"));