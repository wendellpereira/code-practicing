const isPalindrome = (str) => {
  let itIs = new Boolean(), strArr = Array.from(str);
  for (var i = 0; i < strArr.length; i++) {
    itIs = strArr[i] === strArr[strArr.length - 1 - i] && itIs ? true : false;
  }
  return itIs;
};

console.log(isPalindrome('racecar'));


const isPalindromeR = (str) => {
    if(str.length < 2) return true;
    if (str[0] != str[str.length - 1]) return false;
    return isPalindromeR(str.slice(1, arr.length -1));
};

console.log(isPalindromeR('racecar'));
