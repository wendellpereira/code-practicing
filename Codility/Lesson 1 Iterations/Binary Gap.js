let solution = function (N) {

    // não testar os casos de limite no codility!!!
    // if ( N < 1 || N > 147483647 ) { return -1; }


    let binary, count = 0, max = 0, x = 0;
    binary = N.toString(2);
    console.info('binary: ', binary);

    while( x < binary.length +1 ) {
        let digit = binary.slice(x, x +1);

        if ( digit === '0' ) { count++; }
        else if ( digit === '1' ) {
            max = count > max ? count : max;
            count = 0;
            // console.info('max: ', max);
        }
        // console.info('count: ', count);
        x++;
    }

    return max;
};

let testValue = 1610612737;
console.info( 'result: ', solution(testValue) );