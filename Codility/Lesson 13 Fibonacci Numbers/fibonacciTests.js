let fibonacci = function (n) {
    if (n <= 1)
        return n;
    else
        return fibonacci(n-1) + fibonacci(n-2);
};

let solution = function (n) {
    let result = [];
    for ( let x = 0; x <= n; x++ ) {
        result.push(fibonacci(x));
    }
    return result;
};

let fibonacciDynamic = function(n){
    let fib = [];
    fib[0] = 0;
    fib[1] = 1;
    for ( let x = 2; x < n+1; x++ ) {
        fib[x] = fib[x -1] + fib[x -2];
    }
    return fib;
};

console.time('fibonacci time');
console.info( 'result: ', solution(32) );
console.timeEnd('fibonacci time');

console.time('fibonacciDynamic time');
console.info( 'result: ', fibonacciDynamic(32) );
console.timeEnd('fibonacciDynamic time');