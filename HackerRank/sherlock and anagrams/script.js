const sherlockAndAnagrams = (s) => {
  let map = new Map(), strArray = Array.from(s);
  strArray.map(item => {
    map[item] = (map[item] || 0) +1;
  })
  // if(map.getValues().contain)

}

console.log(sherlockAndAnagrams('cdcd'));
