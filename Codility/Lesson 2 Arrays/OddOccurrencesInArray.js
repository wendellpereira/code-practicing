let solution = function (A) {

    A.sort(function (a,b) { return a-b; } );
    let x = 0;

    while( x < A.length +1 ) {
        if (A[x] === A[x +1]) {x += 2}
        else {
            return A[x];
        }
    }
};

// let testValue = [9,3,9,3,9,7,9];
// let testValue = [9,3,9,3,9,7,9, 7, 8];
// let testValue = [9,3,9];
// let testValue = [9,3,9,1];
let testValue = [9,3,9,1,1];
console.info( 'result: ', solution(testValue) );