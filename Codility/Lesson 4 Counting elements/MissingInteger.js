// test: 
// [-2, -4, 0, -5, 1, 2, 3, 4, 7, 8, 9, 10, 5, 1000000];

var last   = 0;
var result = 0;

    if (A.length > 100000) {
        return false;
    }

    A.sort(function(a,b ){
        return a- b;
    });

    for(var x = 0; x < A.length ; x ++) {

        if( parseInt(A[x]) < -1000000 || parseInt(A[x]) > 1000000) {
            return false;
        }

        if( A[x] < 1){
            continue;
        }

        if( A[x] === last +1 ) {
            last = A[x];
        } else if (result === 0) {
            result = last +1;
        }
    }

    result = last+1;

    return result;
};