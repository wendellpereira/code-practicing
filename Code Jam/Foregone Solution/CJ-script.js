process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function mySolution(n, testCases) {
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


function main() {
    const n = readLine();

    let testCases = Array(n);

    for (let i = 0; i < n; i++) {
        testCases[i] = readLine();
    }

    let result = mySolution(n, testCases);

    for (var i = 0; i < result.length; i++) {
        console.log('Case #' + (i +1) + ': '
            + result[i][1] + ' '
            + result[i][2] + ' ');
    }
}
