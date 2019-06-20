function countingValleys(n, s) {

  let hikerLevel = 0;
  let countValley = 0;
  let initValley = false, initMountain = false;

  for (let i = 0; i < n; i++) {
    if (s[i] === 'U') hikerLevel++;
    else hikerLevel--;

    if (hikerLevel < 0) initValley   = true;
    if (hikerLevel > 0) initMountain = true;

    if (hikerLevel === 0 && initValley) countValley++;

    if (hikerLevel === 0) { initValley = false; initMountain = false; }
  }
  return countValley;
}

console.info(countingValleys(26, 'UDDDUDUUUUDDDUDUDDDUUUUUDD'));
