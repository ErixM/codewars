function squareDigits(num) {
  let s = String(num).split("");
  console.log(s);
  let sum = "";
  for (let number of s) {
    let numb = Number(number);
    let power = numb * numb;
    sum += String(power);
  }
  return Number(sum);
}
console.log(squareDigits(9119));
