let solution = function (A, K) {

    console.info('Array A: ', A)

    if ( A.length === K ) { return A }

    if ( A.length === 0 ) { return A }

    for( let x = 1; x < K +1; x++ ) {
        let swap = A[ A.length -1 ];
        for ( let j = A.length -1; j >= 1; j-- ) {
            A[j] = A[j -1];
            console.info('j: ', j)
            console.info('A[j-1]: ', A[j-1])
        }
        A[0] = swap;
        console.info('Array A*: ', A)
    }
    return A;
};

// let testValue = [3,8,9,7,6];
let testValue = [1, 2, 3, 4];
// let testValue = [];
console.info( 'result: ', solution(testValue, 4) );