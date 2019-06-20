function fibonacci(n) {
  return n > 2 ? fibonacci(n -1) + fibonacci(n -2) : 1;
}

// console.log(fibonacci(2));


function fibonacci2(n) {
  let a = [0, 1], x = 1;

  const fib = (num) => {
      while (x < n) {
          x++;
          console.log(a[x - 1] + a[x - 2]);
          a.push(a[x - 1] + a[x - 2]);
      }
  }
  fib(n);
  console.log(a.toString());
  return a[n];
};

console.log(fibonacci2(10));
