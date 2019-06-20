const makePalindrome = (string) => {
  // function that checks if a string is a palindrome
  const isPalindrome = (str) => {
      return  str === str.reverse();
  };

  // determines if will add characters at the end or at the begin
  // due to the alphabetical order.
  let addEnd = string[0] < string[string.length -1],
      // position of the character which will be added
      x = addEnd ? string.length -2 : 1;

  let strArray = Array.from(string);

  //adds a character while it is not a palindrome
  while (!isPalindrome(strArray)) {
    if (addEnd) {
      strArray.push(string[x]);
      x--;
    } else {
      strArray.unshift(string[x]);
      x++;
    }
  }
  return strArray.join('');
};

console.log(makePalindrome('race'));
