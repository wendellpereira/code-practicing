function repeatedString(s, n) {
  if (s.length === 1 && s === 'a') return n;
  if (s.indexOf('a') < 0) return 0;

  const times = Math.floor(n / s.length);

  const base = times * s.length;
  const rest = n - base;

  let letterArray = Array.from(s);
  letterArray = letterArray .filter(letter => letter === 'a');
  const cBase = letterArray.length;

  const sRest = s.slice(0, rest);
  let restArray = Array.from(sRest).filter( item => item === 'a');
  const cRest = restArray.length;

  return (times * cBase) + cRest;
}

console.info(repeatedString('ava', 10));
// console.info(repeatedString('a', 1000000000000));
// console.info(repeatedString('abcac', 10));
// console.info(repeatedString('x', 987435987));
// console.info(repeatedString('kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm',
 // 736778906400));
