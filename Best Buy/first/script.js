function differentTeamsFor(skills) {
 //create array for skills
 let res = [0,0,0,0,0];

 //fill with right skill
 for (let x = 0; x < skills.length; x++) {
     if (skills[x] === 'p') res[0]++;
     if (skills[x] === 'c') res[1]++;
     if (skills[x] === 'm') res[2]++;
     if (skills[x] === 'b') res[3]++;
     if (skills[x] === 'z') res[4]++;
     console.assert(res[4] < res[3], `The zoology skill is not less then bhotanic: b: ${res[3]} and z: ${res[4]}`);
 };
 console.info(res);

 // compare the counts
 res.sort();
 return res[0];
}

function differentTeamsForEach(skills) {
 //create array for skills
 let res = [0,0,0,0,0];

 //fill with right skill
 const skillsArr = [...skills, 'T'];

 skillsArr.forEach( curr => {
     if (curr === 'p') res[0]++;
     if (curr === 'c') res[1]++;
     if (curr === 'm') res[2]++;
     if (curr === 'b') res[3]++;
     if (curr === 'z') res[4]++;
     console.assert(res[4] < res[3], `The zoology skill is not less then bhotanic: b: ${res[3]} and z: ${res[4]}`);
 });
 console.info(res);

 // compare the counts
 res.sort();
 return res[0];
}

const testStr = 'zpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmbpcmb';

const tF = performance.now();
console.log(differentTeamsFor(testStr));
const tFe = performance.now();
const Fper = tFe-tF;
console.info('Performance for loop: %s millesconds', Fper);

const tFE = performance.now();
console.log(differentTeamsForEach(testStr));
const tFEe = performance.now();
const FePer = tFEe-tFE;
console.info('Performance forEach loop: %s millesconds', FePer);

console.info(Fper < FePer
  ? `For loop is the winner with ${Fper} ms Diff: ${FePer - Fper}`
  : `ForEach is the winner with ${FePer} ms Diff: ${Fper - FePer}`);
