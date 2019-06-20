const stepPerms(steps) => {
  if(steps === 0) return 1;
  if(steps < 0) return 0;
  return stepPerms(steps -1 ) + stepPerms(steps -2) + stepPerms(steps -3);
}

const array = [];
console.log(stepPerms(array));
