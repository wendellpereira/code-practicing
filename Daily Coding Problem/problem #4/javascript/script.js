/*******************************
 * Using swap
 **/
function miss_positive(array) {
  if(!array) return 1;
  for (let i = 0; i < array.length; i++) {
    while (i + 1 !== array[i] && 0 < array[i] && array[i] < array.length) {
      let t = array[i];
      // swap
      array[i] = array[t -1];
      array[t - 1] = t;

      if(array[i] === array[t -1]) break;
    }
  }
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== i +1) return i +1;
  }
  return array.length +1;
}

// const array2 = [-1,3,1,4,-2];
const array2 = [-2,1,2,10,4,5,6,3];
console.log('miss_positive: ', miss_positive(array2));

/*******************************
 * Using sort
 **/
// function missingInteger(array) {
//   let min = Number.NEGATIVE_INFINITY;
//   array.sort((x,y) => {
//     if (x > y && (y+1) !== x && (y+1) > min && (y+1 !== 0) && array.indexOf(y+1) === -1) min = y+1;
//     if (y > x && (x+1) !== y && (x+1) > min && (x+1 !== 0) && array.indexOf(x+1) === -1) min = x+1;
//     return x - y;
//   });
//   min = min === Number.NEGATIVE_INFINITY ? array[array.length -1] +1 : min;
//   return min;
// }
//
// // const array = [-1,3,1,4,-2];
// const array = [-2,1,3,4,6];
// console.info('missingInteger: ', missingInteger(array));
