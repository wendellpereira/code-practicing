/**
 * 1ª vez que fiz. 100%, mas solução muito complicada:
 **/

var arr =[1,2];

function solution(A) {
    var missing=1;
    // write your code in JavaScript (Node.js 8.9.4)
    if ( A.length < 0 || A.length > 100000) { return missing; }

    A.sort( function(a,b) {return a-b;} );
    console.info('array principal: ' + A);

    if(A[0] != 1) {
        return 1; //'A do not starts with 1: ' + A[0]; // missing first one
    }
    if(A[0] < 1) {
        return missing; //'A elemnt is out of range: ' + A[0];
    }

    if (A[A.length-1] != A.length + 1) {
         return A.length + 1 //'The elements of A are NOT all distinct;'; // missign last one
    }

    for (var x = 0; x < A.length; x++) {
        if ( A[x] < 1 || A[x] > A.length +1) { 
            return missing; //'A element is out of range: ' + A[x]; 
        }
        if(x>0 && A[x] != A[x-1] + 1) {
            missing = A[x-1]+1;
        }    
    }
    return missing;
}

console.info(solution(arr))

/**
 * 2ª vez que fiz, solução muito mais simples e eficiente:
 **/

 let solution = function (A) {

    if ( A.length === 0 ) { return 1 }

    let count = 1;
    A.sort(function(a,b) { return a - b; } );

    for ( let j = 0; j <= A.length -1; j++ ) {
        if ( A[j] !== count ) { return count; }
        count++;
    }
    return count;
};
// let testValue = [9,1,2,3,4,5];
// let testValue = [3,8,9,7,6,1,2];
// let testValue = [2,3,1,5];
// let testValue = [];
// let testValue = [1,2,3,4];
let testValue = [1];
console.info( 'result: ', solution(testValue) );
