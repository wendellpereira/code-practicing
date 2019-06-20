        console.log('');
        console.log('******* codility begin *******');
        console.log('');

        var numberSearch = function(a,b ){
            return parseInt(a) - parseInt(b);
        };

        var AA = [
            [1],
            [1, 2],
            [1, 2, 1, 3, 3, 6, 4, 4, 7, 7, 8, 8],
            [1, 2, 1, 3, 3, 6, 5, 4, 4, 7, 7, 8, 8]
        ];


        var perm = function(A) {

            var last = 0;
            A.sort(numberSearch());

            for(var x = 0; x < A.length ; x ++) {

                if( parseInt(A[x]) < 1 || parseInt(A[x]) > 1000000000) {
                    console.log('Inavlid element!');
                    return false;
                }

                if( A[x]  === last+1 ) {
                    last = A[x];
                } else {
                    return 0
                }

            }

            return 1;
        };

        for (var j = 0; j< AA.length; j ++) {
            var x = perm(AA[j]);
            console.log('Array: ' + AA[j]);
            console.log('The result: ' + x);
        }

        console.log('');
        console.log('******* codility end *******');
