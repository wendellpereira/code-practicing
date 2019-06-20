process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    // now we can read/parse input

    let inputString = input.slice(2)
        .split('/n')
        .map( str => str.replace(/\s/g, ''));

    let array = Array.from(inputString.toString());
    let map = {};
    array.map((item) => {
        map[item] = (map[item] || 0) +1;
    })

    console.log(map);
});
