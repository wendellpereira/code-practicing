const getMaxElementIndexes = (a, rotate) => {
  const maxInArr = (array) => {
    let max = 0;
    for (var i = 0; i < array.length; i++) {
      max = array[i] > max ? array[i] : max
    }
    return max;
  }

  let maxPosArray = [], newTest = [],
      maxPos = a.indexOf(maxInArr(a));
  for (let i = 0; i < rotate.length; i++) {

    let newArray = [];
    if (rotate[i] >= a.length) {
      newArray = a.slice(rotate[i] % a.length).concat(a.slice(0, rotate[i] % a.length));
      newTest.push(maxPos - (rotate[i] % a.length));
    }
    else {
      newArray = a.slice(rotate[i]).concat(a.slice(0, rotate[i]));
      newTest.push(maxPos - rotate[i]);
    }

    maxPosArray.push( newArray.indexOf(maxInArr(newArray)) );
  }
  console.log(newTest);
  return maxPosArray;
}

const a = [1,2,4,3];
const rotate = [1,3];

console.log(getMaxElementIndexes(a, rotate));
