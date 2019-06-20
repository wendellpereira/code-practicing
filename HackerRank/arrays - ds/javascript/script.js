function reverseArrayFor(a) {
    let result = [], x = 0;
    for (var i = a.length -1; i > -1; i--) {
      result[x] = a[i];
      x++;
    }
    return result;
}

function reverseArrayReverse(a) {
  return a.reverse();
}

function reverseArrayMap(a) {
    return a.map((cur, idx, array) => array[array.length - idx -1] );
}

arr = [5,4,3,2,1];
console.info(`Result: `);
console.info(reverseArrayMap(arr));
