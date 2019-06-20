console.log('');
        console.log('******* codility begin - Voracious Fishes *******');
        console.log('');

        var A, B, D, iCount;
        A = [4, 3, 2, 1, 5];
        B = [0, 1, 0, 0, 0];
        D = new Array(A.length);
        iCount = 0;
        
        // Dead fishes
        for ( var d = 0; d < A.length; d ++ ) { D[d] = 1 }
        
        // alowed values
        for ( var x = 0; x < A.length; x ++ ) {
            if ( A[x] < 0 || A[x] > 1000000000 ) { return }
            if ( !B[x] in [1,0] ) { return }
        }
    
        for ( var f = 0; f < A.length; f ++ ) {
            if ( f > 0 && B[f] !== B[f +1] ) { // diff direction
                if ( A[f] > A[f +1] )
                    { D[f +1] = 0; } // actual is bigger
                else if ( A[f] < A[f +1] )
                    { D[f ]   = 0; } // next is bigger
            }
        }

            console.log( D.length );
        for ( var c = 0; c < D.length ; c ++ ) {
            console.log( 'contou');
            console.log( 'D[c]: ' + D[c] );
            console.log( 'c: ' + c );
            
            if ( D[c] === 1 ) { iCount ++ }
        }
        
        console.log('A: ' + A);
        console.log('B: ' + B);
        console.log('D: ' + D);
        
        console.log( iCount );
        
        console.log('');
        console.log('******* codility end - Voracious Fishes *******');