function checkForFactor(base, factor) {
  {
    if (base % factor == 0)
      return true
  }
  return false;
}

console.log(checkForFactor(70, 7));
console.log(checkForFactor(10, 7));