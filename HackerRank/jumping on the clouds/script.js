function jumpingOnClouds(n, c) {
  let actualCloud = 0;
  let jumps = 0;

  while (actualCloud < n -1) {
    if (c[actualCloud +2] === 1) actualCloud++
    else actualCloud = actualCloud + 2;
    jumps++;
  }
  return jumps;
}

console.info(jumpingOnClouds(6, [0, 0, 0, 0, 1, 0]));
// console.info(jumpingOnClouds(7, [0, 0, 1, 0, 0, 1, 0, 0]));
