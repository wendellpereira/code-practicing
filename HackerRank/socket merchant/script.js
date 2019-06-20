function sockMerchant(n, ar) {
  const colors = {};
  let matches = 0;
  for (let i = 0; i < n; i++) {
    if (colors[ar[i]]) {
      matches++;
      colors[ar[i]] = 0;
    } else {
      colors[ar[i]] = 1;
    }
    console.log(`item: ${ar[i]}`);
    console.log({ colors });
    console.log(`matches: ${matches}`);
  }
  return matches;
}
console.info(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
obj = {3:1, 2:0};
console.log(`obj: ${obj}`);
