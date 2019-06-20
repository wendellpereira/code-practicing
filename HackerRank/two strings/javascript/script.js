const twoStrings = ({str1, str2}) => {
    let strMap = {},
      share = false,
      str1Map = Array.from(str1),
      str2Map = Array.from(str2);

    str1Map.map( item => {
      strMap[item] = (strMap[item] || 0) +1;
    })

    for (let i = 0; i < str2.length; i++) {
      if(strMap[str2[i]]) {
        share = true;
        break;
      }
    }

    return share ? 'YES' : 'NO';
}

console.log(twoStrings({str1:'fill', str2:'hello'}));
