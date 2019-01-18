let lottoModule = (function(){
  //function to create result array of a given lotto type
  //min, max are minimum and maximum numbers for given lotto and amount is required amount of numbers in one draw
  function lotto(min, max, amount){
    let result = [];
    while(result.length < amount){
      let num = min + Math.round(Math.random() * (max - min));
      if(result.indexOf(num) === - 1){
        result.push(num);
      }
    }
    return result;
  }
  //function for make given amount of draw for given loto and returns
  //sorted array of arrays of according to occurence frequency of the obtained numbers in the draws
  //sortLotto(100) -> [[2, 23], [11, 25], ..] -> here 2 is drawed number and 23 is number of its occurences in 100 draw
  function sortLotto(min, max, amount, draw){
    let obj = {};
    for(let i = 0; i < draw; i++){
      let lotArr = lotto(1, 34, 5)
      lotArr.forEach(item => {
        obj[item] ? obj[item] = obj[item] + 1 : obj[item] = 1
      });
    }
    let entries = Object.entries(obj);
    entries.sort((a, b) => a[1] - b[1]);
    return entries
  }
  return {lotto, sortLotto};
})()
