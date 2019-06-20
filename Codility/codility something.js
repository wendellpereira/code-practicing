        //*****************************************************************************//
        
        console.log('');
        console.log('******* codility begin *******');
        var A;
        // A = [-1, 3, -4, 5, 1, -6, 2, 1];
        // A = [2, 2, -1, 1, 3];
        // A = [2, 4, -1, 3, 3];∫
        // A = [4, 5, -2, 3, 3, 4, -2];
        A = [4, 5, -2, 3, 3, 4, -2, 8];
        var res = -1;
    
        var sumSplit = function (A, iBegin, iEnd) {
            var sum = 0;
            for ( var x = iBegin; x <= iEnd; x++) {
                sum = sum +  A[x];
                // console.log('       * A[x]: ' + A[x]);
                // console.log('       * sum:  ' + sum);
            }
            return sum;
        };
        
        var topDownSplitSum = function (A, iBegin, P, iEnd) {
            if ( P >= iEnd ) { return -1; }
            if ( iBegin === P ) { return -1; }
            // console.log('   + P : ' + P);
            // console.log('   + A : ' + A);
            var sumA = sumSplit(A, iBegin, P -1);
            var sumB = sumSplit(A, P +1, iEnd -1);
            
            // console.log(sumA);
            // console.log(sumB);
            if ( sumA === sumB ) {
                console.log( '-> equilibrium index: ' + P);
                res = P;
            }
            
            topDownSplitSum(A, iBegin, P +1, iEnd );
            
            return res;
        };
    
        // copyArray(A, 0, 8, B);
        var result = topDownSplitSum(A, 0, 1, A.length);
        console.log('');
        console.log(' Equilibrium indexes: ' + result);
    
    
        console.log('');
        console.log('******* codility end *******');