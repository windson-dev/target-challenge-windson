const invertString = (string) => {
  let invertedString = '';

  for (let charAhead of string) {
    invertedString = charAhead + invertedString;
  }

  return invertedString;
}

console.log(invertString('abcde'));
