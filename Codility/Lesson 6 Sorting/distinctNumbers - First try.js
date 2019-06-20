console.log('');
console.log('******* codility begin *******');
console.log('');

var A, B, dist, reg;
A = [1, 3, 3, 4, 4,5,6,6,7,8,13,24,4,24, -1000000];
A = [2, 1, 1, 2, 3, 1,5,6,7,8,6];
B = [];
dist = 0;

for ( var x = 0; x < A.length -1 && x < 100000; x ++ ) {
    if ( A[x] < -1000000 || A[x] > 1000000 ) { continue }
    if ( B.indexOf(A[x]) === -1 ) {
        dist ++;
        B.push( A[x] );
    }
}

console.log('A: ' + A);
console.log('B: ' + B);

console.log( dist );

console.log('');
console.log('******* codility end *******');
/** Condility */