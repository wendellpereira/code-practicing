  /** Condility */
        console.log('');
        console.log('******* codility begin formula *******');
        console.log('');

        var numberSearch = function(a,b ){
            return parseInt(a) - parseInt(b);
        };

        var AA = [
            [1, 4, 2],
            [1, 6, 3],
            [11,345,17],
            [10,10,5],
            [10,10,7],
            [10,10,20],
            [0,0,11],
            [1,1,11]
        ];

        function solutionA(A, B, K) {
            return (B+1-A) / K ;
        }

        for (var t = 0; t< AA.length; t ++) {
            var xa = solutionA(AA[t][0], AA[t][1], AA[t][2]);
            console.log('Array: ' + AA[t]);
            console.log('The result: ' + xa );
            console.log('The result: ' + Math.round(xa) );
        }

        console.log('');
        console.log('******* codility end *******');
        /** Condility */

        console.log('');
        console.log('******* codility begin all numbers *******');
        console.log('');

        function solutionB(A, B, K) {

            var iCount = 0 ;
            var yCount = 0 ;

            var sum = function (q,w) {
                yCount++;
                if( q % w === 0) { iCount++; }
                if(q === B) { return; }
                sum(++A, K);
            };

            sum(A,K);
            return [iCount, yCount];
        }

        for (var j = 0; j< AA.length; j ++) {
            var x = solutionB(AA[j][0], AA[j][1], AA[j][2]);
            console.log('Array: ' + AA[j]);
            console.log('The result: ' + x[0]);
            console.log('times: ' + x[1]);
        }

        console.log('');
        console.log('******* codility end *******');