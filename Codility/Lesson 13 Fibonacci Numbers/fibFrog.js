let fibonacciDynamic = function(n){
    let fib = [];
    fib[0] = 0;
    fib[1] = 1;
    for ( let x = 2; x < n+1; x++ ) {
        fib[x] = fib[x -1] + fib[x -2];
    }
    return fib;
};

let checkFibNumber = function(n, fibArray) {
    for ( let j = 0; j <= fibArray.length -1; j++ ) {
        if (fibArray[j] >= n )
            return fibArray[j];
    }
};

let solution = function (A) {

    const fib = fibonacciDynamic(26);
    let last = 0, count = 0, lastReach = 0;

    for ( let x = 0; x <= A.length -1; x++ ) {
        if ( A[x] === 1 ) {
            //check fib number >= x - last
            let fibNumber = checkFibNumber( x+1 - last, fib);
            console.info('fib Number: ', fibNumber);
            if (fibNumber >= x) {
                while (fibNumber > x) {
                    if (A[x] === 1) {
                        lastReach = x;
                        x++;
                    }
                }
                last = last !== lastReach ? lastReach +1 : x +1;
            } else
                last = x +1;

            count++;
        }
    }
    if (A[A.length -1] === 0) count++;
    count = count === 0 ? 1 : count;
    return count;
};

let testValue =[];
testValue[0] = [0,0,0,1,1,0,1,0,0,0,0];
testValue[1] = [];
testValue[2] = [0];
testValue[3] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
testValue[4] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
for (let y = 0; y <= testValue.length -1; y++) {
    console.time('frogFib time');
    console.info('result: ', solution(testValue[y]));
    console.timeEnd('frogFib time');
}
