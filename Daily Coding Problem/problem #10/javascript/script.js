const scheduler = (fn, n) => {
  setTimeout(function () {
    fn.apply();
  }, n);
};

scheduler(() => {console.log('two seconds.');}, 2000);
scheduler(() => {console.log('four seconds.');}, 4000);
scheduler(() => {console.log('three seconds.');}, 3000);
scheduler(() => {console.log('one seconds.');}, 1000);
scheduler(() => {console.log('half seconds.');}, 500);
