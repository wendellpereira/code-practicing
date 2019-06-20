// O(N^2)
const sumsUp = (nums, target) => {
  for (var i = 0; i < nums.length; i++) {
    for (var x = 0; x < nums.length; x++) {
      if(i !== x && nums[i] + nums[x] === target) {
        const res = new Array(i, x);
        return res;
      };
    }
  }
  return false;
}

console.log(sumsUp([10,15,3,7], 17));


/////////////////////////////////////////// O(N)
const sumsUpReturn = (nums, target) => {
  let array = [];
  for (item of nums) {
    if (array.includes(target - item))
      return true;
    array.push(item);
  }
  return false;
}

console.log(sumsUpReturn([3,2,4], 6));
