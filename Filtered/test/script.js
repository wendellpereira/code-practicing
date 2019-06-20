const degree = ({input}) => {
    // let inputString = input.toString().slice(2)
    //     .split('/n')
    //     .map( str => str.replace(/\s/g, ''));
    //
    // let array = Array.from(inputString.toString());
    let array = Array.from(input);
    let map = {};
    array.map((item) => {
        map[item] = (map[item] || 0) +1;
    });

    let number = -1, countArray = [[]];
    for(let x = 0; x < array.length; x++) {
        if(number !== array[x]) {
            countArray.push([array[x], 0]);
            number = array[x];
        }
        // console.log(countArray);
        countArray[countArray.length -1][1]++;
    }

    countArray.sort((x,y)=> x[1] - y[1]);
    return countArray[countArray.length-1][1];
    // console.log(countArray);
    // console.log(map);
}

console.log(degree({input:[1, 2, 2, 3, 1]}));
