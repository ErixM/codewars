function addBinary(a, b) {
  let number = Number(a) + Number(b);
  let binary = [];
  while (number > 0) {
    if (number % 2 === 0) binary.unshift(0);
    else binary.unshift(1);
    number = Math.floor(number / 2);
  }
  return binary.join("");
}
