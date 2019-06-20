function generateNewFolderName(existingFolders) {
  // Write your code here
  if (existingFolders.length == 0) return false;
  let array = existingFolders,
      count = 2;

  for (var i = 1; i < array.length; i++) {
    if(existingFolders.indexOf(array[i] != i)) {
      array[i] = array[i] + '(' + count + ')';
      count++;
    }
  }
  return Array(array);
}

console.log(generateNewFolderName(["New Folder", "New Folder"]));
