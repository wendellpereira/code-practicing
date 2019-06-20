/**
 * 2nd try
 **/
let solution = function (A) {
    if (A.length === 0 ) return 0;
    A.sort(function(a,b){return a-b;});
    let seq = A[0], distinct = 0;
    A.forEach( function (elem) {
        if (seq !== elem) {
            distinct++;
            seq = elem;
        }
    });
    return distinct;
};

// let testValue = [3,1,2,4,3];
// let testValue = [1,0,0,0,0,1,0,0];
// let testValue = [2,4,6,8,10];
// let testValue = [2,4,6,8,10];
let testValue = [2,1,1,2,3,1];

console.time('distinct numbers time');
console.info( 'result: ', solution(testValue) );
console.timeEnd('distinct numbers time');

/**
 * 1st try
 **/
var arr;
arr = [1, 3, 3, 4, 4,5,6,6,7,8,13,24,4,24, -1000000];

function solution(A) {
    if (A.length > 100000) return 0;
    if (A.length === 0)    return 0;

    A.sort( function(a,b) {return a-b;} );
    console.info('array principal: ' + A);

    var dist = 1;
    var seq = A[0];

    for ( var x = 0 ; x < A.length ; x ++ ) {
        if ( A[x] < -1000000 || A[x] > 1000000 ) return 0; 
        if (seq != A[x]) {
            dist ++;
            seq = A[x];
        }
    }
    return dist;
}


console.info(solution(arr))
