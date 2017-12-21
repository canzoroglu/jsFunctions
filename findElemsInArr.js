//Param1: array to be searched
//Param2, Param3, ..., elements to be searched in the given array
//Returns a map object whose structure is:
// Map{{param2: [pos1, pos2]} => 2, {param3: [pos1]} => 1}
let findElemsInArr = {
  findElements(arr, ...args){
    let elMap = new Map(); //key is posElObj, value is count
    args.forEach(el => {
      //let count = 0; //count for the searched elements
      let elPos = []; //array of postions of the searched elements
      let posElObj = {}; //key is searched el value is positions
      arr.forEach((e, i) => {
        if(e === el){
          elPos.push(i);
          //count++;
        }
      });
      posElObj[el] = elPos;
      elMap.set(posElObj, elPos.length);
    });
    return elMap;
  }
};