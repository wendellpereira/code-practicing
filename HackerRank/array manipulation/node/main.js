'use strict';

const fs = require('fs');

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

// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
    let res = new Array(n), max = 0, idx = 0;
    res.fill(0, 0, n)

    console.log('teste');

    const sum = () => {
        for (let x = queries[idx][0] - 1; x <= queries[idx][1] - 1; x++) {
            let old = res[x];
            res[x] += queries[idx][2];
            console.assert(res[x] === old + queries[idx][2], `Different sum: ${res[x]} should be ${old + queries[idx][2]}`);
            max = max < res[x] ? res[x] : max;
        }
        idx++;
        if (idx < queries.length) sum();
        console.info( idx);
    }
    sum();
    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let queries = Array(m);

    for (let i = 0; i < m; i++) {
        queries[i] = readLine().split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    let result = arrayManipulation(n, queries);

    ws.write(result + "\n");

    ws.end();
}
