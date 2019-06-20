function  matchingStrings(strings, queries) {
  return queries.map((curr, idx, array) => {
      let count = 0;
      for (var i = 0; i < strings.length; i++) {
          if (strings[i] === curr) count++;
      }
      return count;
  });
}

// str = ['aba','baba','aba','xzxb'];
// qry = ['aba','xzxb','ab'];

str = ['abcde','sdaklfj','asdjf','na','basdn','sdaklfj','asdjf','na','asdjf','na','basdn','sdaklfj','asdjf'];
qry = ['abcde','sdaklfj','asdjf','na','basdn'];

console.info(`Result: `);
console.info(matchingStrings(str, qry));
