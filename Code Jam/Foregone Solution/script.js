/// My Solution - trying to divide by 4
function writeCheck4(testCases) {
  let result = [], itemArray = [];
  for (let item = 0; item < testCases.length; item++) {
      let substArray = [];
      itemArray = Array.from( BigInt(testCases[item]).toString());
      if(itemArray[0] == 4) substArray[0] = 3;
      for (let dig = 1; dig < itemArray.length; dig++) {
        if(itemArray[dig] == 4) substArray.push(5)
        else substArray.push(itemArray[dig]);
      }

      let subst = BigInt(''.concat(...substArray));
      result.push([item, BigInt(testCases[item]) - subst, subst]);
  }
  return result;
}

/// My Solution in CodeJam
function writeCheck(testCases) {
  let result = [];
  for (let item = 1; item <= testCases.length; item++) {
    for (let i = 1; i < testCases[item]; i++) {
      let x = testCases[item] -i;
      if(x.toString().includes(4) || i.toString().includes(4)) continue;
      array.push([item, x, i]);
      break;
    }
  }
  return result;
}


const tc = [4, 3, 14, 940, 430, 4444, 4453, 98744333, 4650982134984, 9873478492344987168765432, 1000400000];
const result = writeCheck4(tc);
console.log(result);
for (var i = 0; i < result.length; i++) {
  console.log('Case#' + (i +1) + ': '
    + result[i][1] + ' '
    + result[i][2] + ' ');
    console.log(tc[i]);
  console.assert(result[i][1] + result[i][2] == tc[i], result[i][1] + ' + ' + result[i][2] + ' differs from ' + tc[i]) ;

}
