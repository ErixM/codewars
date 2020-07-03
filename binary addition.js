function addBinary(a, b) {
  number = a + b;
  const binary = (number) => {
    let output = "";
    for (let i = 0; number >= 1; i++) {
      number % 2 === 1 ? (output += "1") : (output += "0");
      number = Math.floor(number / 2);
    }
    return output;
  };
  return binary(number);
}
console.log(addBinary(51, 12));
