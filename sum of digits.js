function digital_root(n) {
  if (n < 10) {
    return n;
  } else {
    let s = String(n);
    let sp = s.split("");
    let sum = 0;
    for (let number of sp) {
      let num = Number(number);
      sum += num;
    }
    return digital_root(sum);
  }
}
