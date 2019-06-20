/** Condility */
        // console.log('******* merge sort begin *******');
        // console.log('');
        // var At, Bt;
        // At = [7, 2, -3, 6, 1, 6]; Bt = [];
        //
        // var copyArrayT = function (At, iBegin, iEnd, Bt) {
        //     for ( var x = iBegin; x < iEnd; x++ ) {
        //         Bt[x] = At[x];
        //     }
        // };
        //
        // var topDownMergeT = function (At, iBegin, iMiddle, iEnd, Bt) {
        //     var i = iBegin;
        //     var j = iMiddle;
        //     console.log('       * j: ' +  j);
        //     for ( var k = iBegin; k < iEnd; k++ ) {
        //         if ( i < iMiddle && (j >= iEnd || At[i] <= At[j]) ) {
        //             Bt[k] = At[i];
        //             i = i + 1;
        //         } else {
        //             Bt[k] = At[j];
        //             j = j + 1;
        //         }
        //     }
        //     console.log('       * At : '+ At);
        //     console.log('       * Bt : '+ Bt);
        // };
        //
        // var topDownSplitMergeT = function (Bt, iBegin, iEnd, At) {
        //     if ( iEnd - iBegin < 2 ) { return; }
        //     var iMiddle = Math.round( ( iEnd + iBegin ) / 2 );
        //     console.log('   + iMiddle : ' + iMiddle);
        //     console.log('   + At : ' + At);
        //     topDownSplitMergeT(At, iBegin, iMiddle, Bt);
        //     topDownSplitMergeT(At, iMiddle, iEnd, Bt);
        //
        //     topDownMergeT(Bt, iBegin, iMiddle, iEnd, At);
        // };
        //
        // var topDownMergeSortT = function (At, Bt, n) {
        //     copyArrayT(At, 0, n, Bt);
        //     topDownSplitMergeT(Bt, 0, n, At);
        // };
        //
        // console.log('At : '+ At);
        // topDownMergeSortT(At, Bt, 6);
        // console.log('At : '+ At);
        // console.log('Bt : '+ Bt);
        //
        // console.log('');
        // console.log('******* merge sort end *******');
        // console.log('');
        
        //*****************************************************************************//
        
        console.log('');
        console.log('******* codility begin - count Li and Ol *******');
        console.log('');
    
        var iCountUl, iCountOl, dCount;
        iCountUl = 0;
        iCountOl = 0;
        var jqxhr;
    
        console.log( $(document).find('.ng-scope').length );
    
        for ( var x = 0; x < $(document).find('.comment-list').length; x ++ ) {
            dCount = document.getElementsByClassName('comment-list')[x]['data-count'];
    
            document.getElementsByClassName('comment-list')[x].innerHTML = 'Loading...';
            
            jqxhr = $.ajax( "https://www.example.com/comments?count=" + dCount )
                .done(function() {
                    console.log( "success" );
                    // catch the response
                })
                .fail(function() {
                    console.log( "error" );
                })
                .always(function() {
                    console.log( "complete" );
                });
            
            for ( var res = 0; res < dCount; res ++ ) {
                // render thes div's
                
            }
        }
        
        
        console.log('');
        console.log('******* codility begin - count Li and Ol *******');
        /** Condility */
        