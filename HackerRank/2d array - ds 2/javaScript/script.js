function hourglassSum(arr) {
  let max = -37;
  for (var i = 0; i < 4; i++) {
    for (var j = 1; j < 5; j++) {
      let sum = arr[i][j-1] + arr[i][j] + arr[i][j+1];
      sum += arr[i+1][j];
      sum += arr[i+2][j-1] + arr[i+2][j] + arr[i+2][j+1];

      console.log(arr[i][j-1] + " " + arr[i][j] + " " + arr[i][j+1]);
      console.log(arr[i+1][j]);
      console.log(arr[i+2][j-1] + " " + arr[i+2][j] + " " + arr[i+2][j+1]);
      console.log(`sum: ${sum}`);
      console.log('------------');
      max = sum > max ? sum : max;
    }
  }
  return max;
}

let arr = new Array(6).fill(null).map( item => new Array(6).fill(null) );
arr[0] = [-1,  1, -1,  0,  0, 0];
arr[1] = [0 , -1,  0,  0,  0, 0];
arr[2] = [-1, -1, -1,  0,  0, 0];
arr[3] = [0 , -9,  2, -4, -4, 0];
arr[4] = [-7,  0,  0, -2,  0, 0];
arr[5] = [0 ,  0, -1, -2, -4, 0];

// for (let i = 0; i < 6; i++) {
//     for (let j = 0; j < 6; j++) {
//         arr[i][j] = Math.round( Math.random() * 10 );
//     }
// }

console.info(`Result: ${hourglassSum(arr)}`);
