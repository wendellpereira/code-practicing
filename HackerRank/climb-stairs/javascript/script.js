const climbOne = (n) => {
    if(n === 0) return 1;
    if(n < 0) return 0;
    return climbOne(n -1) + climbOne(n -2);
}

console.log('climbOne: ', climbOne(7));

////////////////////////////////////////////
let count = 0;
const climbG = (n, sets) => {
  const climb = (n, step) => {
    if(n === 0) return 1;
    if(n < 0) return 0;
    return count + climb(n -step, step);
  }

  for (var i = 0; i < sets.length; i++) {
    climb(n, sets[i]);
  }
  return count;
}

console.log('climbG: ', climbG(4, [1,2]));

////////////////////////////////////////////
const climbM = (n) => {
  return (Math.floor(n / 2) + n % 2) + (Math.floor(n / 1) + n % 1);
}

console.log('climbM: ', climbM(7));
