// submissions that was rigth, but not fast enough
function arrayManipulation(n, queries) {
    let res = new Array(n), max = 0;
    res.fill(0, 0, n)

    for (let idx = 0; idx < queries.length; idx++) {
        for (let x = queries[idx][0] - 1; x <= queries[idx][1] - 1; x++) {
            res[x] += queries[idx][2];
            max = max < res[x] ? res[x] : max;
        }
    };
    return max;
}

// trying recursion
function arrayManipulation(n, queries) {
    let res = new Array(n), max = 0;
    res.fill(0, 0, n)

    let qtdQueries = queries.length;

    const recurQueries = (idxQ) => {
      if(idxQ === 0) return 0;
      const recurS = (idxQ, start, stop) => {
        if (start === stop) return 0;
        res[x] += queries[idxQ][2]
        return += res[x]
      }
      
    }

    recurQueries(qtdQueries)

    return max;
}

////////////////////////////////////////////////////////////////////////////////
const arraymanipulation = (n, queries) => {
  let res = new Array(n), max = 0, idx = 0;
  res.fill(0,0,n)


  const sum = () => {
    for(let x = queries[idx][0] -1; x <= queries[idx][1] -1; x++) {
      let old = res[x];
      res[x] += queries[idx][2];
      console.assert(res[x] === old + queries[idx][2], `Different sum: ${res[x]} should be ${old + queries[idx][2]}`);
      max = max < res[x] ? res[x] : max;
    }
    idx++;
    if (idx < queries.length) sum();
  }

  sum();

  return max;
}

// const array = [[1,2,100], [2,5,100], [3,4,100]];
// const array = [[1,5,3], [4,8,7], [6,9,1]];
const array = [ [2, 6, 8],
                [3, 5, 7],
                [1, 8, 1],
                [5, 9, 15]]

                [0,0,0,0,0,0,0,0,0,0]

console.time('arraymanipulation');
console.log(arraymanipulation(10, array));
console.timeEnd('arraymanipulation');
