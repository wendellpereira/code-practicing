const checkMagazine = (magazine, note) => {
   let map = {}, replicable = true;

   magazine.map((item) => {
      map[item] = (map[item] || 0) +1;
   });

   note.map((i) => {
       map[i] = (map[i] || 0) - 1;
       if(map[i] < 0) {
         replicable = false;
       }
   });
   console.info(replicable ? 'Yes' : 'No');
}


const magazine = ['two','times','three','is','not','four'];
const note = ['two','times','two','is','four'];

// const magazine = ['give', 'me', 'one',  'grand', 'today', 'night'];
// const note = ['give', 'one', 'grand',  'today'];

checkMagazine(magazine, note);
